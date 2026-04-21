import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/breadcrunb.png";
import { useGalleryItems } from "@/hooks/useGallery";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Infrastructure = () => {
  const { data: galleryItems = [] } = useGalleryItems();
  const imageOnlyItems = galleryItems.filter((item) => Boolean(item.imageUrl));

  return (
    <>
      <section className="relative overflow-hidden pb-32 pt-48 md:pb-40 md:pt-32">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Gallery" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom px-4 pt-6 md:px-8">
          <nav className="mb-4 mt-16 text-sm text-primary-foreground/60 font-body">
            <Link to="/" className="hover:text-primary-foreground">Home</Link> / <span className="text-primary-foreground">Gallery</span>
          </nav>
          <h1 className="text-4xl font-heading font-black text-primary-foreground md:text-5xl">Gallery</h1>
          <p className="mt-3 max-w-xl text-primary-foreground/70">A visual look at our facilities, production process, and completed projects.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {imageOnlyItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group overflow-hidden rounded-2xl glass-card hover-lift"
              >
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-muted/50 via-muted/20 to-transparent md:h-72">
                  <img src={item.imageUrl} alt={`Gallery image ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
