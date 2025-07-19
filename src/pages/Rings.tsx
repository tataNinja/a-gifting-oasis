import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Rings = () => {
  const [sortBy, setSortBy] = useState("featured");

  const ringProducts = [
    {
      id: "r1",
      name: "Infinity Promise Ring",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 156,
      badge: "Best Seller" as const
    },
    {
      id: "r2",
      name: "Rose Gold Stackable Ring Set",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 89,
    },
    {
      id: "r3",
      name: "Minimalist Band Ring",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1543295606-8188b8ee6b53?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 203,
      badge: "Under £10" as const
    },
    {
      id: "r4",
      name: "Crystal Solitaire Ring",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1603561596112-db532d74f2bc?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 127,
    },
    {
      id: "r5",
      name: "Vintage Style Ring",
      price: 26.99,
      image: "https://images.unsplash.com/photo-1603561593853-8b8048e7f863?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 74,
      badge: "Just Dropped" as const
    },
    {
      id: "r6",
      name: "Pearl Accent Ring",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1603561596559-ba2ced7c0b31?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 92,
    }
  ];

  const subcategories = [
    { id: "all", name: "All Rings", count: ringProducts.length },
    { id: "engagement", name: "Engagement", count: 15 },
    { id: "wedding", name: "Wedding", count: 12 },
    { id: "fashion", name: "Fashion", count: 28 },
    { id: "stackable", name: "Stackable", count: 18 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Rings
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From promise rings to statement pieces, find the perfect ring to symbolize your most precious moments.
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
                Showing {ringProducts.length} products
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
                {ringProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            {/* Other subcategory content */}
            {subcategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {ringProducts.slice(0, 4).map((product) => (
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

export default Rings;
