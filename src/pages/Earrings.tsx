import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Earrings = () => {
  const [sortBy, setSortBy] = useState("featured");

  const earringProducts = [
    {
      id: "e1",
      name: "Minimalist Pearl Earrings",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1588444650238-7221a7d8b6f3?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 203,
      badge: "Under £10" as const
    },
    {
      id: "e2",
      name: "Rose Gold Hoop Earrings",
      price: 21.99,
      originalPrice: 31.99,
      image: "https://images.unsplash.com/photo-1595721871319-64b4c86fc2d1?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 156,
      badge: "Best Seller" as const
    },
    {
      id: "e3",
      name: "Crystal Drop Earrings",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 89,
      badge: "Just Dropped" as const
    },
    {
      id: "e4",
      name: "Ear Climber Set",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1616791180964-a1c9e1a99c34?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 127,
    },
    {
      id: "e5",
      name: "Vintage Style Studs",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 74,
    },
    {
      id: "e6",
      name: "Statement Chandelier Earrings",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 92,
    }
  ];

  const subcategories = [
    { id: "all", name: "All Earrings", count: earringProducts.length },
    { id: "studs", name: "Studs", count: 32 },
    { id: "hoops", name: "Hoops", count: 28 },
    { id: "drops", name: "Drops", count: 24 },
    { id: "climbers", name: "Climbers", count: 16 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Earrings
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Frame your face beautifully with our collection of earrings, from everyday studs to glamorous statement pieces.
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
                Showing {earringProducts.length} products
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
                {earringProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            {/* Other subcategory content */}
            {subcategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {earringProducts.slice(0, 4).map((product) => (
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

export default Earrings;
