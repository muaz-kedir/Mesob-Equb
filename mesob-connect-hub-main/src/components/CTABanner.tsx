import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(174, 72%, 56%) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-light leading-tight">
            Ready to Start Your{" "}
            <span className="text-gradient-teal">Savings Journey?</span>
          </h2>
          <p className="mt-5 text-blue-light/60 text-lg max-w-lg mx-auto">
            Join thousands of Ethiopians who trust Mesob Equb for their financial goals. It's free to get started.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="h-13 px-8 text-base">
              Join Mesob Equb <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="h-13 px-8 text-base">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
