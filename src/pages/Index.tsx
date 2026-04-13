import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Zap, Clock, Wrench, Factory, CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import bannerImg from "@/assets/banner.png";
import bannerImg2 from "@/assets/banner 2.png";
import bannerImg3 from "@/assets/banner3.png";
import bannerMobile1 from "@/assets/mobile banner/banner.png";
import bannerMobile2 from "@/assets/mobile banner/banner 2.png";
import bannerMobile3 from "@/assets/mobile banner/banner 3.png";
import manufacturingImg from "@/assets/about us.png";
import productHighmast from "@/assets/product-highmast.jpg";
import { products } from "@/data/products";
import homeOctagonal from "@/assets/home products/octagonal pole.png";
import homeTubular from "@/assets/home products/Tubular Pole.png";
import homeConical from "@/assets/home products/Conical Pole.png";
import homeDecorative from "@/assets/home products/Decorative light Pole.png";
import homeHighmast from "@/assets/home products/High Mast Pole.png";
import homeStreetlight from "@/assets/home products/Street Light Pole.png";
import appHighways from "@/assets/Where Our Poles Shine/Highways.png";
import appStreetLighting from "@/assets/Where Our Poles Shine/Street Lighting.png";
import appIndustrialAreas from "@/assets/Where Our Poles Shine/Industrial Areas.png";
import appResidentialProjects from "@/assets/Where Our Poles Shine/Residential Projects.png";
import appSmartCityProjects from "@/assets/Where Our Poles Shine/Smart City Projects.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const openEnquiryModal = () => {
  window.dispatchEvent(new Event("open-enquiry-modal"));
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const heroSlides = [
  {
    id: "manufacturing",
    image: bannerImg,
    mobileImage: bannerMobile1,
    alt: "Yash Industries banner",
    kicker: "Trusted Since 2014",
    title: "Leading Manufacturer of High-Quality",
    highlight: "Lighting Poles",
    description: "Durable. Strong. Engineered for Performance.",
    ctaPrimary: { label: "View Products", to: "/products" },
    ctaSecondary: { label: "Enquire Now", to: "/contact" },
    stats: ["10+ Years Experience", "Custom Manufacturing", "High Strength Steel"],
  },
  {
    id: "infrastructure",
    image: bannerImg2,
    mobileImage: bannerMobile2,
    alt: "Modern manufacturing line",
    kicker: "Precision Engineering",
    title: "Infrastructure That Powers",
    highlight: "Smart Cities",
    description: "From highways to residential projects, we deliver reliable lighting solutions.",
    ctaPrimary: { label: "Explore Capabilities", to: "/about" },
    ctaSecondary: { label: "Talk to Experts", to: "/contact" },
    stats: ["IS Standard Galvanization", "On-Time Dispatch", "Pan-India Supply"],
    align: "right",
  },
  {
    id: "product-range",
    image: bannerImg3,
    mobileImage: bannerMobile3,
    alt: "Highmast lighting pole",
    kicker: "Product Range",
    title: "Engineered Poles for",
    highlight: "Every Application",
    description: "Octagonal, tubular, conical and decorative designs to match your project needs.",
    ctaPrimary: { label: "Browse Catalogue", to: "/products" },
    ctaSecondary: { label: "Get Pricing", to: "/contact" },
    stats: ["Custom Heights", "Heavy-Duty Steel", "Export-Ready Finish"],
    align: "left",
  },
];

const HeroSection = () => (
  <section className="relative w-full overflow-hidden pt-24 md:pt-6">
    <Carousel opts={{ loop: true }} className="w-full">
      <CarouselContent className="ml-0">
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id} className="pl-0">
            <div className="relative min-h-[100vh] w-full flex items-center">
              <div className="absolute inset-0">
                <picture>
                  <source media="(max-width: 768px)" srcSet={slide.mobileImage ?? slide.image} />
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-bottom md:object-center"
                    width={1920}
                    height={1080}
                  />
                </picture>
                {/* overlay removed as requested */}
              </div>
              <div className="relative container-custom px-4 md:px-8 py-32 w-full">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className={`max-w-3xl ${slide.align === "right" ? "md:ml-auto md:text-right" : ""}`}
                >
                  <motion.p variants={fadeUp} custom={0} className="text-white font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                    {slide.kicker}
                  </motion.p>
                  <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                    {slide.title}{" "}
                    <span className="text-white">{slide.highlight}</span>
                  </motion.h1>
                  <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-white/80 font-body mb-8">
                    {slide.description}
                  </motion.p>
                  <motion.div
                    variants={fadeUp}
                    custom={3}
                    className={`flex flex-wrap gap-4 mb-10 ${slide.align === "right" ? "md:justify-end" : ""}`}
                  >
                    <Link to={slide.ctaPrimary.to} className="gradient-accent text-secondary-foreground font-heading font-bold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
                      {slide.ctaPrimary.label}
                    </Link>
                    {slide.ctaSecondary.label === "Enquire Now" ? (
                      <button
                        type="button"
                        onClick={openEnquiryModal}
                        className="border-2 border-white/40 text-white font-heading font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                      >
                        {slide.ctaSecondary.label}
                      </button>
                    ) : (
                      <Link to={slide.ctaSecondary.to} className="border-2 border-white/40 text-white font-heading font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm">
                        {slide.ctaSecondary.label}
                      </Link>
                    )}
                  </motion.div>
                  <motion.div
                    variants={fadeUp}
                    custom={4}
                    className={`flex flex-wrap gap-6 ${slide.align === "right" ? "md:justify-end" : ""}`}
                  >
                    {slide.stats.map((text) => (
                      <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-white" />
                        <span className="font-body">{text}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 border-primary-foreground/40 bg-black/30 text-primary-foreground hover:bg-black/50" />
      <CarouselNext className="right-6 top-1/2 -translate-y-1/2 border-primary-foreground/40 bg-black/30 text-primary-foreground hover:bg-black/50" />
    </Carousel>
  </section>
);

const homeProductImages: Record<string, string> = {
  "Octagonal Pole": homeOctagonal,
  "Tubular Pole": homeTubular,
  "Conical Pole": homeConical,
  "Decorative Pole": homeDecorative,
  "High Mast Pole": homeHighmast,
  "Street Light Pole": homeStreetlight,
};

const ProductCategories = () => {
  const homeProducts = products.map((product) => ({
    ...product,
    image: homeProductImages[product.name] ?? product.image,
  }));

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">Our Products</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-black text-primary mb-4">Product Range</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">Engineered for strength and durability, our lighting poles power cities across India.</motion.p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeProducts.map((product, i) => (
            <motion.div key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={`/products/${product.slug}`} className="group block glass-card rounded-xl overflow-hidden hover-lift">
                <div className="h-72 md:h-80 overflow-hidden rounded-xl bg-gradient-to-b from-muted/40 via-muted/20 to-transparent p-0 flex items-center justify-center border-2 border-black/80">
                  <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-secondary/50 px-4 py-2 text-secondary font-heading font-semibold text-sm transition-colors hover:bg-secondary/10">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="section-padding bg-muted">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">About Us</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-black text-primary mb-6">A Decade of Manufacturing Excellence</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
            With a decade of expertise, we are a leading manufacturer specializing in high-quality Street Light Poles designed for durability and strength. Over the last 10 years, we have mastered the art of crafting robust infrastructure that powers cities and highways.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-6">
            From standard Octagonal and Tubular poles to custom Decorative designs, our products are engineered to meet international standards. Our commitment to precision welding, superior galvanization, and on-time delivery has made us a trusted partner in the lighting industry.
          </motion.p>
          <motion.div variants={fadeUp} custom={4}>
            <Link to="/about" className="inline-flex items-center gap-2 gradient-accent text-secondary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img src={manufacturingImg} alt="Manufacturing facility" loading="lazy" className="rounded-2xl shadow-elevated" width={1200} height={800} />
        </motion.div>
      </div>
    </div>
  </section>
);

const whyChooseData = [
  { icon: Shield, title: "High Durability", desc: "Built with premium steel for decades of performance." },
  { icon: Zap, title: "Premium Galvanization", desc: "Hot-dip galvanized to IS standards for corrosion resistance." },
  { icon: Wrench, title: "Custom Designs", desc: "Tailored solutions for your specific project needs." },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable logistics ensuring timely project completion." },
  { icon: Factory, title: "Strong Infrastructure", desc: "State-of-the-art facility with modern machinery." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-background">
    <div className="container-custom">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
        <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">Why Choose Us</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-black text-primary">Built on Trust & Quality</motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {whyChooseData.map((item, i) => (
          <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
            className="glass-card rounded-xl p-6 text-center group hover-lift cursor-default"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <item.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-sm text-primary mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const processSteps = [
  { step: "01", title: "Design & Engineering", desc: "Precision CAD designs as per client specs." },
  { step: "02", title: "Precision Fabrication", desc: "CNC cutting, bending & welding." },
  { step: "03", title: "Galvanization & Coating", desc: "Hot-dip galvanization for protection." },
  { step: "04", title: "Quality Testing", desc: "Rigorous inspection & load testing." },
  { step: "05", title: "Dispatch & Delivery", desc: "Safe packaging & on-time logistics." },
];

const ManufacturingProcess = () => (
  <section className="section-padding gradient-primary text-primary-foreground">
    <div className="container-custom">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
        <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">Our Process</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-black">Manufacturing Excellence</motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {processSteps.map((step, i) => (
          <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
            className="relative p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm text-center"
          >
            <span className="text-4xl font-heading font-black text-secondary/30 block mb-2">{step.step}</span>
            <h3 className="font-heading font-bold text-sm mb-2">{step.title}</h3>
            <p className="text-xs opacity-70">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const applicationData = [
  { image: appHighways, label: "Highways" },
  { image: appStreetLighting, label: "Street Lighting" },
  { image: appIndustrialAreas, label: "Industrial Areas" },
  { image: appResidentialProjects, label: "Residential Projects" },
  { image: appSmartCityProjects, label: "Smart City Projects" },
];

const Applications = () => (
  <section className="section-padding bg-muted">
    <div className="container-custom">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
        <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">Applications</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-black text-primary">Where Our Poles Shine</motion.h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {applicationData.map((app, i) => (
          <motion.div
            key={app.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="group glass-card rounded-xl p-4 text-center hover-lift"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted/40 mb-3">
              <img
                src={app.image}
                alt={app.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <p className="font-heading font-bold text-sm text-primary">{app.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="section-padding gradient-accent">
    <div className="container-custom text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-black text-secondary-foreground mb-4">
          Looking for Reliable Lighting Poles?
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
          Get the best quote for your project. Our team is ready to assist you with custom solutions.
        </motion.p>
        <motion.div variants={fadeUp} custom={2}>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
            Request Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Index = () => (
  <>
    <HeroSection />
    <ProductCategories />
    <AboutPreview />
    <WhyChooseUs />
    <ManufacturingProcess />
    <Applications />
    <CTASection />
  </>
);

export default Index;
