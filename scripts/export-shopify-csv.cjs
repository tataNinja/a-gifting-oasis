const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const headers = [
  'Handle',
  'Title',
  'Body (HTML)',
  'Vendor',
  'Type',
  'Tags',
  'Published',
  'Variant Price',
  'Image Src'
];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function productRows(items, type) {
  return items.map((p) => [
    slugify(p.name),
    p.name,
    '',
    'GARMÉA',
    type,
    '',
    'TRUE',
    p.price,
    p.image
  ]);
}

const rows = [headers];
rows.push(...productRows(products.necklaces, 'Necklaces'));
rows.push(...productRows(products.rings, 'Rings'));
rows.push(...productRows(products.bracelets, 'Bracelets'));
rows.push(...productRows(products.earrings, 'Earrings'));
rows.push(...productRows(products.gifts, 'Gifts'));

// Include best sellers if not already present
rows.push(...productRows(products.bestSellers, 'Best Sellers'));

const csv = rows.map(r => r.join(',')).join('\n');
const outPath = path.join(__dirname, '..', 'shopify_products.csv');
fs.writeFileSync(outPath, csv, 'utf8');
console.log(`Exported ${rows.length - 1} products to ${outPath}`);
