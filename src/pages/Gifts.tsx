import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, Heart } from "lucide-react";

const Gifts = () => {
  const [sortBy, setSortBy] = useState("featured");

  const giftProducts = [
    {
      id: "g1",
      name: "Personalized Initial Necklace",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 89,
      badge: "Best Seller" as const
    },
    {
      id: "g2",
      name: "Couple's Matching Keychains",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 156,
      badge: "Under £10" as const
    },
    {
      id: "g3",
      name: "Gift Set - Necklace & Earrings",
      price: 34.99,
      originalPrice: 44.99,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 203,
      badge: "Just Dropped" as const
    },
    {
      id: "g4",
      name: "Men's Leather Bracelet",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1603561593037-13caf1bf66df?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 127,
    },
    {
      id: "g5",
      name: "Friendship Bracelet Duo",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 74,
      badge: "Under £10" as const
    },
    {
      id: "g6",
      name: "Engraved Photo Locket",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1608234808654-2a8875faa6fd?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 92,
    }
  ];

  const subcategories = [
    { id: "all", name: "All Gifts", count: giftProducts.length },
    { id: "for-her", name: "For Her", count: 42 },
    { id: "for-him", name: "For Him", count: 28 },
    { id: "under-10", name: "Under £10", count: 35 },
    { id: "personalized", name: "Personalized", count: 24 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gift className="h-6 w-6 text-primary" />
              <Heart className="h-5 w-5 text-primary fill-primary animate-float" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Gifts That Matter
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect gift for every special person in your life. Meaningful jewelry and accessories that create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Gift Guide Section */}
      <section className="py-12 bg-warm-beige/30">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Gift Guide by Occasion
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-3xl mb-2">💝</div>
              <h3 className="font-semibold mb-2">Birthday Gifts</h3>
              <p className="text-sm text-muted-foreground">Celebrate another year around the sun</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-3xl mb-2">💕</div>
              <h3 className="font-semibold mb-2">Anniversary</h3>
              <p className="text-sm text-muted-foreground">Mark your special milestones</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold mb-2">Graduation</h3>
              <p className="text-sm text-muted-foreground">Celebrate achievements</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold mb-2">Just Because</h3>
              <p className="text-sm text-muted-foreground">Show someone you care</p>
            </div>
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
                Showing {giftProducts.length} products
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
                {giftProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            {/* Other subcategory content */}
            {subcategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {giftProducts.slice(0, 4).map((product) => (
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

export default Gifts;
