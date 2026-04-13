import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/breadcrunb.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom px-4 md:px-8">
          <nav className="text-sm text-primary-foreground/60 mb-4 font-body">
            <Link to="/" className="hover:text-primary-foreground">Home</Link> / <span className="text-primary-foreground">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/70 mt-3">Get in touch for quotes, inquiries, or partnerships.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-heading font-black text-primary mb-6">Send Us a Message</motion.h2>
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
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                />
                <button type="submit" className="w-full gradient-accent text-secondary-foreground font-heading font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-heading font-black text-primary mb-6">Get In Touch</motion.h2>
              <div className="space-y-6 mb-8">
                <motion.div variants={fadeUp} custom={1} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-sm">Address</h3>
                    <p className="text-sm text-muted-foreground">Industrial Area, Phase II, New Delhi, India - 110020</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} custom={2} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-sm">Phone</h3>
                                        <div className="flex flex-col gap-1">
                      <a href="tel:+919673064141" className="text-sm text-muted-foreground hover:text-secondary">+91 96730 64141</a>
                      <a href="tel:+919559434141" className="text-sm text-muted-foreground hover:text-secondary">+91 95594 34141</a>
                      <a href="tel:+919049874141" className="text-sm text-muted-foreground hover:text-secondary">+91 90498 74141</a>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} custom={3} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-sm">Email</h3>
                    <a href="mailto:yashindustriesbeed@gmail.com" className="text-sm text-muted-foreground hover:text-secondary">yashindustriesbeed@gmail.com</a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} custom={4} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-sm">WhatsApp</h3>
                    <a href="https://wa.me/919673064141" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-secondary">Chat with us on WhatsApp</a>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div variants={fadeUp} custom={5} className="rounded-xl overflow-hidden shadow-card h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
