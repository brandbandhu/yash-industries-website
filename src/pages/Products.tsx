import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import homeOctagonal from "@/assets/home products/octagonal pole.png";
import homeTubular from "@/assets/home products/Tubular Pole.png";
import homeConical from "@/assets/home products/Conical Pole.png";
import homeDecorative from "@/assets/home products/Decorative light Pole.png";
import homeHighmast from "@/assets/home products/High Mast Pole.png";
import homeStreetlight from "@/assets/home products/Street Light Pole.png";
import heroBg from "@/assets/breadcrunb.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const categories = ["All", "Street Light Poles", "Decorative Poles", "High Mast"];
const homeProductImages: Record<string, string> = {
  "Octagonal Pole": homeOctagonal,
  "Tubular Pole": homeTubular,
  "Conical Pole": homeConical,
  "Decorative Pole": homeDecorative,
  "High Mast Pole": homeHighmast,
  "Street Light Pole": homeStreetlight,
};

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);
  const displayProducts = filtered.map((product) => ({
    ...product,
    image: homeProductImages[product.name] ?? product.image,
  }));

  return (
    <>
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom px-4 md:px-8">
          <nav className="text-sm text-primary-foreground/60 mb-4 font-body">
            <Link to="/" className="hover:text-primary-foreground">Home</Link> / <span className="text-primary-foreground">Products</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground">Our Products</h1>
          <p className="text-primary-foreground/70 mt-3 max-w-xl">Explore our complete range of lighting poles engineered for strength and durability.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-heading font-semibold text-sm px-5 py-2.5 rounded-lg transition-all ${
                  activeFilter === cat
                    ? "gradient-accent text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product, i) => (
              <motion.div key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/products/${product.slug}`} className="group block glass-card rounded-xl overflow-hidden hover-lift">
                  <div className="h-72 md:h-80 overflow-hidden rounded-xl bg-gradient-to-b from-muted/40 via-muted/20 to-transparent p-0 flex items-center justify-center border-2 border-black/80">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-heading font-semibold text-secondary uppercase tracking-wider">{product.category}</span>
                    <h3 className="font-heading font-bold text-lg text-primary mt-1 mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Height: {product.height}</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-secondary/50 px-3 py-1.5 text-secondary font-heading font-semibold text-xs transition-colors hover:bg-secondary/10">
                        Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
