import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      name: "Necklaces",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      count: "120+ pieces"
    },
    {
      name: "Rings", 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
      count: "85+ pieces"
    },
    {
      name: "Bracelets",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop", 
      count: "95+ pieces"
    },
    {
      name: "Earrings",
      image: "https://images.unsplash.com/photo-1588444650238-7221a7d8b6f3?w=400&h=300&fit=crop",
      count: "110+ pieces"
    },
    {
      name: "Gifts for Her",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop",
      count: "200+ pieces"
    },
    {
      name: "Under £10",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=300&fit=crop",
      count: "50+ pieces"
    }
  ];

  return (
    <section className="py-16 bg-warm-beige/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect piece for every occasion and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-serif font-semibold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {category.count}
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-white/90 text-foreground hover:bg-white w-fit"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;