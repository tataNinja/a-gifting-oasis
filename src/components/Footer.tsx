import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    shop: [
      "Necklaces",
      "Rings", 
      "Bracelets",
      "Earrings",
      "Gift Sets",
      "Under £10"
    ],
    support: [
      "Contact Us",
      "Size Guide", 
      "Shipping Info",
      "Returns & Exchanges",
      "Care Instructions",
      "FAQ"
    ],
    company: [
      "About GARMÉA",
      "Our Story",
      "Sustainability",
      "Careers",
      "Press",
      "Wholesale"
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src={logo} alt="GARMÉA" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 mb-6 max-w-md">
              Curating elegant, affordable jewelry and meaningful gifts that speak louder than words. 
              Every piece tells a story.
            </p>
            
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@garmea.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+44 20 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <Button variant="link" className="p-0 h-auto text-background/70 hover:text-background">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <Button variant="link" className="p-0 h-auto text-background/70 hover:text-background">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Button variant="link" className="p-0 h-auto text-background/70 hover:text-background">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12">
          <h3 className="font-semibold text-background mb-4 text-center">Follow Our Journey</h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-background/20" />

      {/* Bottom Footer */}
      <div className="container px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-background/70">
            <span>© 2024 GARMÉA. All rights reserved.</span>
            <Button variant="link" className="p-0 h-auto text-background/70 hover:text-background text-sm">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-background/70 hover:text-background text-sm">
              Terms of Service
            </Button>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-background/70">
            <span>Made with</span>
            <Heart className="h-3 w-3 fill-primary text-primary" />
            <span>in London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;