import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BestSellers = () => {
  const bestSellers = [
    {
      id: "1",
      name: "Rose Gold Heart Pendant Necklace",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 127,
      badge: "Best Seller" as const
    },
    {
      id: "2", 
      name: "Delicate Chain Bracelet Set",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 89,
      badge: "Best Seller" as const
    },
    {
      id: "3",
      name: "Minimalist Pearl Earrings",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1588444650238-7221a7d8b6f3?w=500&h=500&fit=crop",
      rating: 4,
      reviews: 203,
      badge: "Under £10" as const
    },
    {
      id: "4",
      name: "Infinity Promise Ring",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      rating: 5,
      reviews: 156,
      badge: "Best Seller" as const
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why these pieces have captured hearts around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Best Sellers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;