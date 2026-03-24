import mesobIcon from "@/assets/mesob-equb-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy text-blue-light py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(174, 72%, 56%) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={mesobIcon} alt="Mesob Equb" className="h-12 w-auto object-contain" />
              <span className="font-righteous text-2xl font-bold">
                <span className="text-blue-light">
                  Mesob
                </span>{" "}
                <span style={{ color: '#128C9E' }}>
                  Equb
                </span>
              </span>
            </div>
            <p className="text-sm text-blue-light/60 leading-relaxed">
              Modernizing Ethiopia's beloved traditional savings system for a connected world.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-teal-light mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-blue-light/60 hover:text-teal transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-teal-light mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {["Traditional Equb", "Investment Equb", "Diaspora Equb", "Digital Management"].map((s) => (
                <span key={s} className="text-sm text-blue-light/60">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-teal-light mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                <a key={l} href="#" className="text-sm text-blue-light/60 hover:text-teal transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-light/10 pt-8 text-center">
          <p className="text-sm text-blue-light/40">
            © {new Date().getFullYear()} Mesob Equb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;