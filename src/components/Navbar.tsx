import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const ORDER_URL = "https://orders.orderonawhim.com/onlineorder/castellosrestaurant#/onlineorder";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="flex flex-col items-start">
          <span className="font-heading text-2xl font-bold text-primary-foreground tracking-wide">
            EL CASTILLO
          </span>
          <span className="text-xs tracking-[0.3em] text-accent font-body uppercase">
            Pizzeria & Tex Mex
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem label="Home" onClick={() => scrollTo("hero")} />
          <NavItem label="Menu" onClick={() => scrollTo("menu")} />
          <NavItem label="Gallery" onClick={() => scrollTo("gallery")} />
          <NavItem label="Contact" onClick={() => scrollTo("contact")} />
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded font-body font-bold text-sm tracking-wide uppercase hover:brightness-110 transition-all"
          >
            Order Online
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-muted/20 px-6 pb-6 pt-2 space-y-4">
          <NavItem label="Home" onClick={() => scrollTo("hero")} />
          <NavItem label="Menu" onClick={() => scrollTo("menu")} />
          <NavItem label="Gallery" onClick={() => scrollTo("gallery")} />
          <NavItem label="Contact" onClick={() => scrollTo("contact")} />
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-accent text-accent-foreground px-6 py-3 rounded font-body font-bold text-sm tracking-wide uppercase"
          >
            Order Online
          </a>
          <a
            href="tel:301-582-4727"
            className="flex items-center gap-2 text-primary-foreground/80 font-body text-sm"
          >
            <Phone size={16} /> 301-582-4727
          </a>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="text-primary-foreground/80 hover:text-accent font-body text-sm tracking-wide uppercase transition-colors block"
  >
    {label}
  </button>
);

export default Navbar;
