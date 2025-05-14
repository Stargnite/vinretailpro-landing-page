import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import nigeriaFlag from "@/assets/images/nigeriaFlag.png";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Close the menu when the screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    // Set mounted to true after component mounts
    setIsMounted(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMounted) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isMounted]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Use Case", href: "#" },
    { name: "Features", href: "#" },
    { name: "Why Choose Us", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always visible */}
          <div className="flex-shrink-0 z-20">
            <img src={logo} alt="" className="w-60 h-60" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-gray-700 transition-colors poppins-regular"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center justify-center gap-x-4 ">
            <Button className="bg-[#6717CD] hover:bg-[#574175] cursor-pointer h-10 poppins-regular">Free Trial</Button>
            <div className="flex items-center gap-x-2">
              <img src={nigeriaFlag} alt="flag" />
              <p>Nigeria</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-10 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Menu - Slides from left */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-white z-10 lg:hidden transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="pt-20 pb-6 px-6">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-gray-700 transition-colors poppins-regular"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="mt-4 bg-[#6717CD] max-w-[50%] h-10 poppins-regular">Free Trial</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
