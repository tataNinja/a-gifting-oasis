import { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    {
      title: "Necklaces",
      href: "/necklaces",
      items: ["Pendants", "Chains", "Chokers", "Statement Pieces"]
    },
    {
      title: "Rings",
      href: "/rings", 
      items: ["Engagement", "Wedding", "Fashion", "Stackable"]
    },
    {
      title: "Bracelets",
      href: "/bracelets",
      items: ["Charm", "Bangles", "Tennis", "Friendship"]
    },
    {
      title: "Earrings", 
      href: "/earrings",
      items: ["Studs", "Hoops", "Drops", "Climbers"]
    },
    {
      title: "Gifts",
      href: "/gifts",
      items: ["For Her", "For Him", "Under £10", "Personalized"]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  <Link to={item.href} className="font-medium text-primary hover:text-primary/80">
                    {item.title}
                  </Link>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem}
                      to={`${item.href}?category=${subItem.toLowerCase()}`}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 mr-6">
          <img src={logo} alt="GARMÉA" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="text-sm font-medium">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-48 gap-2 p-4">
                    {item.items.map((subItem) => (
                      <NavigationMenuLink
                        key={subItem}
                        asChild
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link to={`${item.href}?category=${subItem.toLowerCase()}`}>
                          <div className="text-sm font-medium leading-none">
                            {subItem}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <div className="flex items-center space-x-2">
          {isSearchOpen ? (
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search for jewelry..."
                className="w-64 border-primary/20 focus:border-primary"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 ml-4">
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;