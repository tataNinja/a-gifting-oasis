const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const themeDir = path.join(root, 'theme_build');
const shopifyDir = path.join(root, 'shopify');
const distDir = path.join(root, 'dist');

// Build the React app
execSync('npm run build', { stdio: 'inherit' });

// Clean previous build
fs.rmSync(themeDir, { recursive: true, force: true });
fs.mkdirSync(themeDir, { recursive: true });

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((file) => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy theme skeleton
copyRecursive(shopifyDir, themeDir);
// Copy built assets
copyRecursive(path.join(distDir, 'assets'), path.join(themeDir, 'assets'));

// Zip
const zip = require('bestzip');
zip({ source: '*', destination: path.join(root, 'shopify_theme.zip'), cwd: themeDir })
  .then(() => console.log('Theme packaged to shopify_theme.zip'))
  .catch((err) => { console.error(err); process.exit(1); });
