import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo .png";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="inline-flex items-center mb-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-white/30">
              <img src={logoImg} alt="Yash Industries" className="h-12 w-auto" />
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Gallery", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    to={
                      label === "Home"
                        ? "/"
                        : `/${label.toLowerCase().replace(" ", "-").replace("about-us", "about")}`
                    }
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-4">Products</h4>
            <ul className="space-y-2">
              {["Octagonal Pole", "Tubular Pole", "Conical Pole", "Decorative Pole", "High Mast Pole", "Street Light Pole"].map((name) => (
                <li key={name}>
                  <Link
                    to={`/products/${name.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  <span className="font-semibold text-primary-foreground">Reg. Office :</span>{" "}
                  Renukai Niwas, Near Natyagraha, Canol Road Beed
                  <br />
                  <span className="font-semibold text-primary-foreground">Factory :</span>{" "}
                  Plot No. 08, Survey No. 73, Charhata Road, Palwan, Tq. & Dist. Beed 0 431 122
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919673064141" className="hover:opacity-100">+91 96730 64141</a>
                  <a href="tel:+919559434141" className="hover:opacity-100">+91 95594 34141</a>
                  <a href="tel:+919049874141" className="hover:opacity-100">+91 90498 74141</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:yashindustriesbeed@gmail.com" className="hover:opacity-100">yashindustriesbeed@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">Copyright © 2026 All Rights Reserved By Yash Industries Designed By Webakoof</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

