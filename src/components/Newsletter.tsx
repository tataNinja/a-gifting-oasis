import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the GARMÉA Circle! ✨",
        description: "You'll receive exclusive offers and new collection previews.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary animate-float" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Exclusive Access
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Join the GARMÉA Circle
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Be the first to discover new collections, receive styling tips, and enjoy exclusive member-only offers
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-primary/20 focus:border-primary"
              required
            />
            <Button 
              type="submit" 
              className="bg-gradient-button hover:opacity-90 transition-opacity"
            >
              Join Circle
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;