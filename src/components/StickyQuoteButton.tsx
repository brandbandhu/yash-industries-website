import { Link } from "react-router-dom";

const StickyQuoteButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 left-6 z-50 gradient-accent text-secondary-foreground font-heading font-bold text-sm px-5 py-3 rounded-full shadow-elevated hover:scale-105 transition-transform hidden md:flex items-center gap-2"
    >
      Request Quote
    </Link>
  );
};

export default StickyQuoteButton;
