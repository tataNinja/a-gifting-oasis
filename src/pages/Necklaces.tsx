import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Necklaces = () => {
  const [sortBy, setSortBy] = useState("featured");

  const necklaceProducts = [
    {
      id: "n1",
      name: "Rose Gold Heart Pendant Necklace",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 127,
      badge: "Best Seller" as const
    },
    {
      id: "n2",
      name: "Delicate Gold Chain Necklace",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 89,
    },
    {
      id: "n3",
      name: "Layered Chain Set",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 156,
      badge: "Just Dropped" as const
    },
    {
      id: "n4",
      name: "Pearl Drop Necklace",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 203,
    },
    {
      id: "n5",
      name: "Minimalist Bar Necklace",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1596944946061-c8c1c4e56e12?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 92,
      badge: "Under £10" as const
    },
    {
      id: "n6",
      name: "Crystal Pendant Necklace",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1608234808654-2a8875faa6fd?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 74,
    }
  ];

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
