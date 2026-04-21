import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/breadcrunb.png";
import { useProducts } from "@/hooks/useProducts";
import { resolveProductCardImage } from "@/data/legacyMedia";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const categories = ["All", "Street Light Poles", "Decorative Poles", "High Mast"];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { data: products = [] } = useProducts();

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);
  const displayProducts = filtered.map((product) => ({
    ...product,
    image: resolveProductCardImage(product.slug, product.image),
  }));

  return (
    <>
      <section className="relative overflow-hidden pb-32 pt-48 md:pb-40 md:pt-32">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Products" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom px-4 pt-6 md:px-8">
          <nav className="mb-4 mt-16 text-sm text-primary-foreground/60 font-body">
            <Link to="/" className="hover:text-primary-foreground">Home</Link> / <span className="text-primary-foreground">Products</span>
          </nav>
          <h1 className="text-4xl font-heading font-black text-primary-foreground md:text-5xl">Our Products</h1>
          <p className="mt-3 max-w-xl text-primary-foreground/70">Explore our complete range of lighting poles engineered for strength and durability.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-lg px-5 py-2.5 text-sm font-heading font-semibold transition-all ${
                  activeFilter === cat ? "gradient-accent text-secondary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayProducts.map((product, i) => (
              <motion.div key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/products/${product.slug}`} className="group block overflow-hidden rounded-xl glass-card hover-lift">
                  <div className="flex h-72 items-center justify-center overflow-hidden rounded-xl border-2 border-black/80 bg-gradient-to-b from-muted/40 via-muted/20 to-transparent p-0 md:h-80">
                    <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-secondary">{product.category}</span>
                    <h3 className="mb-2 mt-1 text-lg font-heading font-bold text-primary">{product.name}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Height: {product.height}</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-secondary/50 px-3 py-1.5 text-xs font-heading font-semibold text-secondary transition-colors hover:bg-secondary/10">
                        Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
