import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBar />
      <Header />
      <Hero />
      <BestSellers />
      <Categories />
      <WhyChooseUs />
      <Reviews />
      <Newsletter />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
