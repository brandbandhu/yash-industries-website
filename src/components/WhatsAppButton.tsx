const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919673064141?text=Hello%2C%20I%20am%20interested%20in%20your%20lighting%20poles."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 128 128" className="w-14 h-14 drop-shadow-lg" aria-hidden="true">
        <circle cx="64" cy="64" r="52" fill="#25D366" />
        <path
          fill="#FFFFFF"
          d="M64 28c-19.9 0-36 16.1-36 36 0 6.4 1.7 12.5 4.9 17.9L28 100l18.6-4.8c5.2 2.8 11.1 4.3 17.4 4.3 19.9 0 36-16.1 36-36S83.9 28 64 28zm20.8 52.4c-.9 2.5-5.2 4.8-7.2 5.1-1.9.3-4.3.4-7-.4-1.6-.5-3.7-1.2-6.3-2.4-11-4.8-18.1-15.9-18.6-16.6-.5-.7-4.5-6-4.5-11.4 0-5.4 2.9-8 3.9-9.1 1-1.1 2.2-1.4 2.9-1.4.7 0 1.4 0 2.1 0 .7 0 1.6-.3 2.5 1.9.9 2.2 3.1 7.6 3.3 8.1.3.6.4 1.3.1 2-.3.7-.5 1.1-1.1 1.7-.5.6-1.1 1.3-1.6 1.8-.5.5-1.1 1.1-.5 2.1.6 1 2.6 4.3 5.6 7 3.8 3.4 7 4.5 8.1 4.9 1 .4 1.6.3 2.2-.2.6-.5 2.6-3 3.3-4.1.7-1 1.4-.9 2.3-.6.9.3 5.7 2.7 6.7 3.2 1 .5 1.6.7 1.8 1.1.2.4.2 2.2-.7 4.7z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;