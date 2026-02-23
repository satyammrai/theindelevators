import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Lift Types", href: "#lift-types" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
            GI
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-foreground tracking-wide">
              Great India
            </span>
            <span className="block text-xs text-muted-foreground tracking-widest uppercase">
              Elevator
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+918826866830" className="glow-button text-sm px-6 py-2.5 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Enquiry Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden glass-header border-t border-border/50 mt-2">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+918826866830" className="glow-button text-sm px-6 py-2.5 text-center mt-2">
              Enquiry Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
