import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: "Best Seller" | "Just Dropped" | "Under £10";
  isLiked?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  badge,
  isLiked = false 
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden">
      {/* Badge */}
      {badge && (
        <Badge 
          className={`absolute top-2 left-2 z-10 ${
            badge === "Best Seller" ? "bg-primary text-primary-foreground" :
            badge === "Just Dropped" ? "bg-accent text-accent-foreground" :
            "bg-sage text-foreground"
          }`}
        >
          {badge}
        </Badge>
      )}

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
      >
        <Heart 
          className={`h-4 w-4 ${isLiked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
        />
      </Button>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-lg font-semibold text-primary">£{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              £{originalPrice}
            </span>
          )}
        </div>

        {/* Add to Bag Button */}
        <Button 
          className="w-full bg-gradient-button hover:opacity-90 transition-opacity"
          size="sm"
        >
          Add to Bag
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;