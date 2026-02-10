import { motion } from "framer-motion";

const galleryImages = [
  "http://dinecastellos.com/wp-content/uploads/2024/03/12074713_1326712730678585_9172745862560794526_n-1.jpg",
  "http://dinecastellos.com/wp-content/uploads/2024/03/15195822_1573267212689801_841807873895272177_o.jpg",
  "http://dinecastellos.com/wp-content/uploads/2024/03/15822573_1621671381182717_5769271315273809877_n.jpg",
  "http://dinecastellos.com/wp-content/uploads/2024/03/15823154_1621671361182719_1330068613900455666_n-1.jpg",
  "http://dinecastellos.com/wp-content/uploads/2024/03/15823196_1621671337849388_154421422242863741_n-1.jpg",
  "http://dinecastellos.com/wp-content/uploads/2024/03/15826825_1621671281182727_6424591550079129071_n.jpg",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">
            A Taste
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={src}
                alt={`El Castillo dish ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
