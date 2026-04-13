import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import { products } from "@/data/products";
import { useState } from "react";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import oct1 from "@/assets/octogonal pole/Octagonal  Pole1.png";
import oct2 from "@/assets/octogonal pole/Octagonal  Pole2.png";
import oct3 from "@/assets/octogonal pole/Octagonal  Pole3.png";
import oct4 from "@/assets/octogonal pole/Octagonal  Pole4.png";
import highMast1 from "@/assets/High Mast Pole/High Mast Pole1.png";
import highMast2 from "@/assets/High Mast Pole/High Mast Pole2.png";
import highMast3 from "@/assets/High Mast Pole/High Mast Pole3.png";
import highMast4 from "@/assets/High Mast Pole/High Mast Pole4.png";
import tubular1 from "@/assets/Tubular Pole/Tubular Poles1.png";
import tubular2 from "@/assets/Tubular Pole/Tubular Poles2.png";
import tubular3 from "@/assets/Tubular Pole/Tubular Poles3.png";
import tubular4 from "@/assets/Tubular Pole/Tubular Poles4.png";
import tubular5 from "@/assets/Tubular Pole/Tubular Poles5.png";
import decorative1 from "@/assets/Decorative Pole/Decorative Lighting Pole1.png";
import decorative2 from "@/assets/Decorative Pole/Decorative Lighting Pole2.png";
import decorative3 from "@/assets/Decorative Pole/Decorative Lighting Pole3.png";
import decorative4 from "@/assets/Decorative Pole/Decorative Lighting Pole4.png";
import street1 from "@/assets/Street Light Pole/Street Light Pole1.png";
import street2 from "@/assets/Street Light Pole/Street Light Pole2.png";
import street3 from "@/assets/Street Light Pole/Street Light Pole3.png";
import street4 from "@/assets/Street Light Pole/Street Light Pole4.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const galleryMap: Record<string, string[]> = {
    "octagonal-pole": [oct1, oct2, oct3, oct4],
    "high-mast-pole": [highMast1, highMast2, highMast3, highMast4],
    "tubular-pole": [tubular1, tubular2, tubular3, tubular4, tubular5],
    "decorative-pole": [decorative1, decorative2, decorative3, decorative4],
    "street-light-pole": [street1, street2, street3, street4],
  };
  const galleryImages = galleryMap[product?.slug ?? ""] ?? (product ? [product.image] : []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-primary mb-4">Product Not Found</h1>
          <Link to="/products" className="text-secondary font-heading font-semibold">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry submitted! We'll contact you shortly.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="pt-28 md:pt-32 pb-6 bg-background">
        <div className="container-custom px-4 md:px-8">
          <nav className="text-sm text-muted-foreground font-body mt-16">
            <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/products" className="hover:text-primary">Products</Link> / <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="section-padding pt-8 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Image Carousel */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full">
              <Carousel opts={{ loop: true }} className="w-full h-full">
                <CarouselContent className="ml-0 h-full">
                  {galleryImages.map((img, index) => (
                    <CarouselItem key={`${product.slug}-img-${index}`} className="pl-0 h-full">
                      <div className="rounded-2xl overflow-hidden shadow-elevated h-full min-h-[340px] md:min-h-[460px] lg:min-h-full">
                        <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
              </Carousel>
            </motion.div>

            {/* Info */}
            <motion.div initial="hidden" animate="visible" className="h-full flex flex-col">
              <motion.span variants={fadeUp} custom={0} className="text-xs font-heading font-semibold text-secondary uppercase tracking-wider">{product.category}</motion.span>
              <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-black text-primary mt-2 mb-4">{product.name}</motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">{product.description}</motion.p>

              {/* Specs */}
              <motion.div variants={fadeUp} custom={3} className="glass-card rounded-xl p-6 mb-6">
                <h3 className="font-heading font-bold text-primary mb-4">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-border pb-2">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium text-foreground">{product.material}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-border pb-2">
                    <span className="text-muted-foreground">Height Range</span>
                    <span className="font-medium text-foreground">{product.height}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-border pb-2">
                    <span className="text-muted-foreground">Shape</span>
                    <span className="font-medium text-foreground">{product.shape}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-border pb-2">
                    <span className="text-muted-foreground">Finish</span>
                    <span className="font-medium text-foreground">{product.finish}</span>
                  </div>
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-sm border-b border-border pb-2">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-medium text-foreground">{val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">MOQ</span>
                    <span className="font-medium text-foreground">{product.moq}</span>
                  </div>
                </div>
              </motion.div>

              {/* Applications */}
              <motion.div variants={fadeUp} custom={4} className="mb-6">
                <h3 className="font-heading font-bold text-primary mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span key={a} className="text-xs font-heading font-semibold bg-muted text-muted-foreground px-3 py-1.5 rounded-full">{a}</span>
                  ))}
                </div>
              </motion.div>

              {/* Customization */}
              <motion.div variants={fadeUp} custom={5} className="mb-6">
                <h3 className="font-heading font-bold text-primary mb-3">Customization Options</h3>
                <ul className="space-y-2">
                  {product.customization.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} custom={6}>
                <a href="#inquiry" className="inline-flex items-center gap-2 gradient-accent text-secondary-foreground font-heading font-bold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Get Best Price <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Inquiry Form */}
          <motion.div id="inquiry" initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-heading font-black text-primary text-center mb-8">
              Inquire About {product.name}
            </motion.h2>
            <motion.form variants={fadeUp} custom={1} onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <input
                type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\\D/g, "").slice(0, 10) })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
              />
              <button type="submit" className="w-full gradient-accent text-secondary-foreground font-heading font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Submit Inquiry
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
