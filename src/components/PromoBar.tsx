import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground px-4 py-2 text-center relative">
      <div className="flex items-center justify-center space-x-2">
        <Sparkles className="h-4 w-4 animate-float" />
        <span className="text-sm font-medium">
          ✨ First-time visitors: Get 10% off your first order with code WELCOME10
        </span>
        <Sparkles className="h-4 w-4 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default PromoBar;