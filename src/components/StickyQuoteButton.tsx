const StickyQuoteButton = () => {
  const handleClick = () => {
    window.dispatchEvent(new Event("open-enquiry-modal"));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 gradient-accent text-secondary-foreground font-heading font-bold text-sm px-5 py-3 rounded-full shadow-elevated hover:scale-105 transition-transform hidden md:flex items-center gap-2"
      aria-label="Enquire Now"
    >
      Enquire Now
    </button>
  );
};

export default StickyQuoteButton;