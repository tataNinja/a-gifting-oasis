import { Truck, Gift, Shield, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast & Free Shipping",
      description: "Free shipping on orders over £25. Express delivery available."
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Beautiful Gift Packaging", 
      description: "Every order comes with elegant gift packaging at no extra cost."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "30-day return policy and lifetime warranty on all jewelry."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Curated with Love",
      description: "Each piece is hand-selected for quality, style, and meaning."
    }
  ];

  return (
    <section className="py-16 bg-cream/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Why Choose GARMÉA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe beautiful jewelry should be accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-button rounded-full text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;