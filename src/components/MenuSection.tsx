import { motion } from "framer-motion";
import mexicanDish from "@/assets/mexican-dish.jpg";
import italianDish from "@/assets/italian-dish.jpg";
import pizzaDish from "@/assets/pizza-dish.jpg";

const MENU_URL = "https://dinecastellos.com/main-menu/";

const dishes = [
  {
    title: "Mexican Favorites",
    description: "Authentic tacos, burritos, enchiladas, and more — crafted with traditional recipes and fresh ingredients.",
    image: mexicanDish,
  },
  {
    title: "Italian Classics",
    description: "Rich pastas, hearty calzones, and savory subs — bringing Italy's finest flavors to your table.",
    image: italianDish,
  },
  {
    title: "Pizzeria",
    description: "Hand-tossed pizzas with premium toppings, baked to perfection in our ovens. A true crowd favorite.",
    image: pizzaDish,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">
            Explore
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Experience the difference! We are dedicated to give you quality food at reasonable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {dish.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-primary text-primary px-10 py-3 rounded font-body font-bold tracking-wide uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
