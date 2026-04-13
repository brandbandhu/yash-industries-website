import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import logoImg from "@/assets/logo .png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const productOptions = [
  "Octagonal Pole",
  "Tubular Pole",
  "Conical Pole",
  "Decorative Pole",
  "High Mast Pole",
  "Street Light Pole",
  "Other",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    product: "",
    quantity: "",
    message: "",
  });
  const location = useLocation();

  useEffect(() => {
    const handler = () => setIsEnquiryOpen(true);
    window.addEventListener("open-enquiry-modal", handler);
    return () => window.removeEventListener("open-enquiry-modal", handler);
  }, []);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry sent! We'll get back to you soon.");
    setForm({
      name: "",
      phone: "",
      email: "",
      company: "",
      city: "",
      product: "",
      quantity: "",
      message: "",
    });
    setIsEnquiryOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="w-full bg-secondary text-secondary-foreground">
        <div className="container-custom flex items-center justify-between gap-4 h-9 px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <a href="tel:+919673064141" className="hover:opacity-80 transition-opacity">+91 96730 64141</a>
              <span className="opacity-60">/</span>
              <a href="tel:+919559434141" className="hover:opacity-80 transition-opacity">+91 95594 34141</a>
              <span className="opacity-60">/</span>
              <a href="tel:+919049874141" className="hover:opacity-80 transition-opacity">+91 90498 74141</a>
            </div>
            <a href="mailto:yashindustriesbeed@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              yashindustriesbeed@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Yash Industries" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.path ? "text-secondary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsEnquiryOpen(true)}
            className="gradient-accent text-secondary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Enquire Now
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-body text-sm font-medium py-2 ${
                    location.pathname === link.path ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsEnquiryOpen(true);
                }}
                className="w-full text-center gradient-accent text-secondary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isEnquiryOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <div className="gradient-primary text-primary-foreground px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-black">Quick Enquiry</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">Share your requirement and we will respond quickly.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEnquiryOpen(false)}
                    className="text-primary-foreground/80 hover:text-primary-foreground"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleEnquirySubmit} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
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
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                  <input
                    type="text"
                    placeholder="Company / Firm"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                  <select
                    required
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  >
                    <option value="" disabled>Select Product</option>
                    {productOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Required Quantity"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                  <div className="hidden md:block" />
                </div>

                <textarea
                  placeholder="Requirement Details"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-4 px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                />

                <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <p className="text-xs text-muted-foreground">We will use this information only to respond to your enquiry.</p>
                  <button
                    type="submit"
                    className="w-full md:w-auto gradient-accent text-secondary-foreground font-heading font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
