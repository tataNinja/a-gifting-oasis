import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="GARMÉA Jewelry Collection" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary animate-float" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Curated with Love
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Gifts That Speak
            <span className="block text-primary">Louder Than Words</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover our collection of elegant, affordable jewelry and meaningful gifts. 
            Each piece is carefully curated to create moments that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-button hover:opacity-90 transition-opacity">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Gift Guide
            </Button>
          </div>

          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Free shipping over £25</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Gift packaging included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="h-16 w-16 bg-soft-pink/30 rounded-full blur-xl animate-float" />
      </div>
      <div className="absolute bottom-32 right-32 hidden lg:block">
        <div className="h-12 w-12 bg-rose-gold/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default Hero;