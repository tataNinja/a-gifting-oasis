import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import products from "@/data/products.json";

const Bracelets = () => {
  const [sortBy, setSortBy] = useState("featured");

  const braceletProducts = products.bracelets;

  const subcategories = [
    { id: "all", name: "All Bracelets", count: braceletProducts.length },
    { id: "charm", name: "Charm", count: 22 },
    { id: "bangles", name: "Bangles", count: 16 },
    { id: "tennis", name: "Tennis", count: 14 },
    { id: "friendship", name: "Friendship", count: 18 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Bracelets
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Adorn your wrists with our stunning collection of bracelets, from delicate chains to statement pieces.
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
                Showing {braceletProducts.length} products
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
                {braceletProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            {/* Other subcategory content */}
            {subcategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {braceletProducts.slice(0, 4).map((product) => (
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

export default Bracelets;
