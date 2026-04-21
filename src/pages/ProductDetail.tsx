import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useProduct } from "@/hooks/useProducts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading } = useProduct(slug ?? "");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const galleryImages = product?.galleryImages?.length ? product.galleryImages : product ? [product.image] : [];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-heading font-bold text-primary">Loading product...</h1>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-heading font-bold text-primary">Product Not Found</h1>
          <Link to="/products" className="font-heading font-semibold text-secondary">← Back to Products</Link>
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
      <section className="bg-background pb-6 pt-28 md:pt-32">
        <div className="container-custom px-4 md:px-8">
          <nav className="mt-16 text-sm text-muted-foreground font-body">
            <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/products" className="hover:text-primary">Products</Link> / <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="section-padding bg-background pt-8">
        <div className="container-custom">
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full">
              <Carousel opts={{ loop: true }} className="h-full w-full">
                <CarouselContent className="ml-0 h-full">
                  {galleryImages.map((img, index) => (
                    <CarouselItem key={`${product.slug}-img-${index}`} className="h-full pl-0">
                      <div className="h-full min-h-[340px] overflow-hidden rounded-2xl shadow-elevated md:min-h-[460px] lg:min-h-full">
                        <img src={img} alt={`${product.name} ${index + 1}`} className="h-full w-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
              </Carousel>
            </motion.div>

            <motion.div initial="hidden" animate="visible" className="flex h-full flex-col">
              <motion.span variants={fadeUp} custom={0} className="text-xs font-heading font-semibold uppercase tracking-wider text-secondary">{product.category}</motion.span>
              <motion.h1 variants={fadeUp} custom={1} className="mb-4 mt-2 text-3xl font-heading font-black text-primary md:text-4xl">{product.name}</motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mb-6 leading-relaxed text-muted-foreground">{product.description}</motion.p>

              <motion.div variants={fadeUp} custom={3} className="mb-6 rounded-xl glass-card p-6">
                <h3 className="mb-4 font-heading font-bold text-primary">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2 text-sm">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium text-foreground">{product.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2 text-sm">
                    <span className="text-muted-foreground">Height Range</span>
                    <span className="font-medium text-foreground">{product.height}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2 text-sm">
                    <span className="text-muted-foreground">Shape</span>
                    <span className="font-medium text-foreground">{product.shape}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2 text-sm">
                    <span className="text-muted-foreground">Finish</span>
                    <span className="font-medium text-foreground">{product.finish}</span>
                  </div>
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-border pb-2 text-sm">
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

              <motion.div variants={fadeUp} custom={4} className="mb-6">
                <h3 className="mb-3 font-heading font-bold text-primary">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span key={a} className="rounded-full bg-muted px-3 py-1.5 text-xs font-heading font-semibold text-muted-foreground">{a}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={5} className="mb-6">
                <h3 className="mb-3 font-heading font-bold text-primary">Customization Options</h3>
                <ul className="space-y-2">
                  {product.customization.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 shrink-0 text-secondary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} custom={6}>
                <a href="#inquiry" className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-heading font-bold gradient-accent text-secondary-foreground transition-opacity hover:opacity-90">
                  Get Best Price <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div id="inquiry" initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto mt-16 max-w-2xl">
            <motion.h2 variants={fadeUp} custom={0} className="mb-8 text-center text-2xl font-heading font-black text-primary">
              Inquire About {product.name}
            </motion.h2>
            <motion.form variants={fadeUp} custom={1} onSubmit={handleSubmit} className="space-y-4 rounded-xl glass-card p-8">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]{10}"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg py-3.5 font-heading font-bold gradient-accent text-secondary-foreground transition-opacity hover:opacity-90">
                <Send className="h-4 w-4" /> Submit Inquiry
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
