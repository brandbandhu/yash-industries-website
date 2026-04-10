import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Shield, Award, Users, Clock, ArrowRight } from "lucide-react";
import manufacturingImg from "@/assets/about us.png";
import heroBg from "@/assets/breadcrunb.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const strengths = [
  { icon: Shield, title: "Quality Assured", desc: "Every product tested to IS standards" },
  { icon: Award, title: "10+ Years Expertise", desc: "A decade of manufacturing excellence" },
  { icon: Users, title: "500+ Clients", desc: "Trusted by government & private sector" },
  { icon: Clock, title: "On-Time Delivery", desc: "Commitment to project timelines" },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="About Yash Industries" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container-custom px-4 md:px-8">
        <nav className="text-sm text-primary-foreground/60 mb-4 font-body">
          <Link to="/" className="hover:text-primary-foreground">Home</Link> / <span className="text-primary-foreground">About Us</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground">About Us</h1>
        <p className="text-primary-foreground/70 mt-3 max-w-xl">Learn more about our legacy, values, and manufacturing excellence.</p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-black text-primary mb-6">
              A Decade of Lighting Infrastructure Excellence
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              With a decade of expertise, we are a leading manufacturer of high-quality street light poles engineered for durability and strength.
              Over the last 10 years, we have mastered the art of crafting robust infrastructure that powers cities and highways.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
              From standard Octagonal and Tubular poles to custom Decorative designs, our products are built to meet international standards.
              Our commitment to precision welding, superior galvanization, and on-time delivery has made us a trusted partner in the lighting industry.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link to="/products" className="inline-flex items-center gap-2 gradient-accent text-secondary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img src={manufacturingImg} alt="Our manufacturing facility" loading="lazy" className="rounded-2xl shadow-elevated" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center">
            <div className="group [perspective:1200px] w-full max-w-xs">
              <div className="relative min-h-[220px] md:min-h-[240px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 glass-card rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-5 [backface-visibility:hidden]">
                  <div className="w-20 h-20 rounded-full border-2 border-secondary/40 flex items-center justify-center">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-heading font-black text-2xl tracking-[0.25em] text-primary">VISION</h2>
                </div>
                <div className="absolute inset-0 glass-card rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-muted-foreground leading-relaxed max-w-xs">
                    To be the most trusted name in street lighting infrastructure worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center">
            <div className="group [perspective:1200px] w-full max-w-xs">
              <div className="relative min-h-[220px] md:min-h-[240px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 glass-card rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-5 [backface-visibility:hidden]">
                  <div className="w-20 h-20 rounded-full border-2 border-secondary/40 flex items-center justify-center">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-heading font-black text-2xl tracking-[0.25em] text-primary">MISSION</h2>
                </div>
                <div className="absolute inset-0 glass-card rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-muted-foreground leading-relaxed max-w-xs">
                    Delivering superior-quality poles and professional support with a focus on durability, safety, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strengths */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-black text-primary">Our Strengths</motion.h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white/80 p-7 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -top-16 right-0 h-32 w-32 rounded-full bg-secondary/10 blur-2xl" />
              <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 ring-1 ring-secondary/30">
                <s.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="relative font-heading font-black text-primary mb-2">{s.title}</h3>
              <p className="relative text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
