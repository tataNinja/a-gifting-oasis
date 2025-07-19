import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import products from "@/data/products.json";

const Necklaces = () => {
  const [sortBy, setSortBy] = useState("featured");

  const necklaceProducts = products.necklaces;

  const subcategories = [
    { id: "all", name: "All Necklaces", count: necklaceProducts.length },
    { id: "pendants", name: "Pendants", count: 24 },
    { id: "chains", name: "Chains", count: 18 },
    { id: "chokers", name: "Chokers", count: 12 },
    { id: "statement", name: "Statement Pieces", count: 8 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Necklaces
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of elegant necklaces, from delicate everyday pieces to statement jewelry that captures attention.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-16">
        <div className="container px-4">
          <Tabs defaultValue="all" className="space-y-8">
            {/* Category Tabs */}
            <TabsList className="grid w-full grid-cols-5">
              {subcategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                  {category.name}
                  <span className="ml-1 text-xs">({category.count})</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Sort Options */}
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {necklaceProducts.length} products
              </p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border rounded-md px-3 py-1 text-sm bg-background"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {necklaceProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            {/* Other subcategory content would be similar */}
            {subcategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {necklaceProducts.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Necklaces;
