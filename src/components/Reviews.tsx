import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Reviews = () => {
  const reviews = [
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      review: "Absolutely stunning pieces! The rose gold necklace I ordered was even more beautiful in person. The packaging was so elegant too.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=150&h=150&fit=crop&crop=face",
      product: "Rose Gold Heart Pendant"
    },
    {
      name: "Sophie Martinez",
      location: "Manchester, UK", 
      rating: 5,
      review: "I've ordered multiple items from GARMÉA and they never disappoint. Quality is amazing for the price point!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      product: "Delicate Chain Bracelet Set"
    },
    {
      name: "Olivia Chen",
      location: "Birmingham, UK",
      rating: 5, 
      review: "Perfect for gifting! Bought these earrings for my sister's birthday and she absolutely loves them. Will definitely order again.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      product: "Minimalist Pearl Earrings"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who trust GARMÉA for their jewelry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-card-foreground mb-6 leading-relaxed">
                "{review.review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-card-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <p className="text-xs text-primary italic">{review.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;