import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import mesobIcon from "@/assets/mesob-equb-logo.png";
// import mesobIcon from  "@/assets/image.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "App", href: "#app" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 px-4 py-3">
        <a href="#home" className="flex items-center gap-2.5">
  <img 
    src={mesobIcon}
    alt="Mesob Equb"
    className="h-10 w-auto object-contain bg-transparent"
  />
  <span className="font-righteous text-2xl font-bold">
    <span className={scrolled ? "text-navy" : "text-blue-light"}>
      Mesob
    </span>{" "}
    <span style={{ color: scrolled ? '#128C9E' : '#128C9E' }}>
      Equb
    </span>
  </span>
</a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                scrolled ? "text-muted-foreground" : "text-blue-light/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="ml-2">
            Join Now
          </Button>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-blue-light"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-3">
                Join Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
