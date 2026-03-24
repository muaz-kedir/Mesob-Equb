import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Sign Up", desc: "Create your free account in minutes with your phone number or email.", icon: "📱" },
  { num: "02", title: "Join a Group", desc: "Browse existing Equb groups or create your own with friends and family.", icon: "🤝" },
  { num: "03", title: "Contribute", desc: "Make contributions on schedule via mobile money or bank transfer.", icon: "💳" },
  { num: "04", title: "Get Paid", desc: "Receive the full pool amount when it's your turn—guaranteed.", icon: "🎉" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-navy text-blue-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(174, 72%, 56%) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal/15 text-teal-light text-xs font-semibold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-blue-light">
            Four Simple Steps to{" "}
            <span className="text-gradient-teal">Financial Growth</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-blue-light/5 backdrop-blur-sm rounded-2xl p-7 border border-blue-light/10 hover:border-teal/30 transition-all duration-300 h-full">
                <span className="text-4xl mb-4 block">{step.icon}</span>
                <div className="text-xs font-bold text-teal/40 tracking-widest mb-2">STEP {step.num}</div>
                <h3 className="font-display text-xl font-semibold mb-3 text-teal-light">{step.title}</h3>
                <p className="text-blue-light/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-teal/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
