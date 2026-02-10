import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const ORDER_URL = "https://orders.orderonawhim.com/onlineorder/castellosrestaurant#/onlineorder";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Delicious pizza from El Castillo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-accent font-body text-sm tracking-[0.4em] uppercase mb-4">
            Pizzeria & Tex Mex
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            El Castillo
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-10 leading-relaxed">
            Quality food at reasonable prices. Authentic Italian & Mexican flavors, made with love.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-10 py-4 rounded font-body font-bold tracking-wide uppercase text-sm hover:brightness-110 transition-all"
            >
              Order Online
            </a>
            <a
              href="tel:301-582-4727"
              className="border border-primary-foreground/40 text-primary-foreground px-10 py-4 rounded font-body tracking-wide uppercase text-sm hover:border-accent hover:text-accent transition-all"
            >
              Call 301-582-4727
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
