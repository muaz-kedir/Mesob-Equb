import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-navy opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-navy/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/15 text-teal-light text-sm font-medium mb-8 backdrop-blur-sm border border-teal/20"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Ethiopia's #1 Digital Equb Platform
            </motion.span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-blue-light mb-6">
              Save Together,
              <br />
              <span className="text-gradient-teal">Grow Together</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-light/70 font-body max-w-lg mb-10 leading-relaxed">
              Mesob Equb modernizes Ethiopia's beloved traditional savings system.
              Join thousands of savers achieving their financial goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="text-base h-13 px-8">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="text-base h-13 px-8 gap-3"
              >
                <span className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center">
                  <Play className="h-3.5 w-3.5 fill-teal text-teal" />
                </span>
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { num: "5,000+", label: "Active Members", icon: "👥" },
              { num: "50M+", label: "Birr Saved", icon: "💰" },
              { num: "98%", label: "Trust Score", icon: "⭐" },
              { num: "200+", label: "Equb Groups", icon: "🏘️" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-blue-light/5 backdrop-blur-md rounded-2xl p-6 border border-blue-light/10 hover:border-teal/30 transition-all duration-300 hover:bg-blue-light/10"
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className="text-3xl font-display font-bold text-teal mb-1">{stat.num}</div>
                <div className="text-sm text-blue-light/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden flex justify-between mt-14 px-2"
        >
          {[
            { num: "5,000+", label: "Members" },
            { num: "50M+", label: "Birr Saved" },
            { num: "98%", label: "Trust" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-display font-bold text-teal">{stat.num}</div>
              <div className="text-xs text-blue-light/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="hsl(210, 25%, 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
