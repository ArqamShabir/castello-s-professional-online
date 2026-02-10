import { Phone, MapPin, Clock } from "lucide-react";

const ORDER_URL = "https://orders.orderonawhim.com/onlineorder/castellosrestaurant#/onlineorder";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl font-bold mb-2">El Castillo</h3>
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-body mb-4">
              Pizzeria & Tex Mex
            </p>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Quality food at reasonable prices. Serving our community with authentic Italian and Mexican flavors.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 font-body text-sm">
              <a href="tel:301-582-4727" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone size={16} className="text-accent" />
                301-582-4727
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>State Line & Rt 40</span>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Clock size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Closed: Thanksgiving, Christmas & New Year's Day</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3 font-body text-sm">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Order Online
              </a>
              <a
                href="https://dinecastellos.com/main-menu/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                View Full Menu
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-xs">
            © {new Date().getFullYear()} El Castillo Pizzeria & Tex Mex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
