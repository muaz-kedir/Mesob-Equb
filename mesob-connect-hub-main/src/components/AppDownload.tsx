import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Check } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const features = [
  "Track all your Equb contributions in real-time",
  "Receive instant notifications for payouts",
  "Join or create groups from anywhere",
  "Secure biometric authentication",
  "Offline mode for low-connectivity areas",
];

const AppDownload = () => {
  return (
    <section id="app" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-navy/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal-dark text-xs font-semibold tracking-widest uppercase mb-4">
              Mobile App
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Equb,{" "}
              <span className="text-gradient-teal">In Your Pocket</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-lg">
              Download the Mesob Equb app and manage your savings groups anytime, anywhere.
              Available on iOS and Android.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-teal flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  <span className="text-muted-foreground text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="h-14 px-6 gap-3 text-base">
                <Download className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button variant="hero-outline" size="lg" className="h-14 px-6 gap-3 text-base">
                <Download className="h-5 w-5" />
                Download for Android
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Free to download · 4.8★ rating · 10,000+ downloads
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-teal opacity-10 rounded-[3rem] blur-2xl" />
              <img
                src={appMockup}
                alt="Mesob Equb Mobile App"
                className="relative max-w-[320px] w-full animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
