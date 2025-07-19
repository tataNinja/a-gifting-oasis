import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Bracelets = () => {
  const [sortBy, setSortBy] = useState("featured");

  const braceletProducts = [
    {
      id: "b1",
      name: "Delicate Chain Bracelet Set",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 89,
      badge: "Best Seller" as const
    },
    {
      id: "b2",
      name: "Rose Gold Charm Bracelet",
      price: 26.99,
      originalPrice: 36.99,
      image: "https://images.unsplash.com/photo-1594736797933-d0eb8ba2fe65?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 156,
    },
    {
      id: "b3",
      name: "Tennis Bracelet",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 203,
      badge: "Just Dropped" as const
    },
    {
      id: "b4",
      name: "Friendship Bracelet Set",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 127,
      badge: "Under £10" as const
    },
    {
      id: "b5",
      name: "Crystal Bangle",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1603561593407-90d2e427bf13?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 74,
    },
    {
      id: "b6",
      name: "Leather Wrap Bracelet",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1603561593037-13caf1bf66df?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 92,
    }
  ];

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
