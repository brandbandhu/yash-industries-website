import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/breadcrunb.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const galleryItems = [
  { id: "g1", title: "Manufacturing Floor", src: "" },
  { id: "g2", title: "Welding Line", src: "" },
  { id: "g3", title: "Galvanization Unit", src: "" },
  { id: "g4", title: "Quality Lab", src: "" },
  { id: "g5", title: "Finished Poles", src: "" },
  { id: "g6", title: "Dispatch Area", src: "" },
  { id: "g7", title: "Material Yard", src: "" },
  { id: "g8", title: "Fabrication Bay", src: "" },
  { id: "g9", title: "Warehouse", src: "" },
];

const Infrastructure = () => (
  <>
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container-custom px-4 md:px-8">
        <nav className="text-sm text-primary-foreground/60 mb-4 font-body">
          <Link to="/" className="hover:text-primary-foreground">Home</Link> / <span className="text-primary-foreground">Gallery</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground">Gallery</h1>
        <p className="text-primary-foreground/70 mt-3 max-w-xl">A visual look at our facilities, production process, and completed projects.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">Our Workspace</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-black text-primary">Infrastructure Gallery</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">
            Images will be added here. Each card will display a full-size photo with title.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group glass-card rounded-2xl overflow-hidden hover-lift"
            >
              <div className="h-64 md:h-72 bg-gradient-to-br from-muted/50 via-muted/20 to-transparent flex items-center justify-center text-muted-foreground text-sm font-heading">
                {item.src ? (
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span>Image Coming Soon</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Add image here when available.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Infrastructure;
