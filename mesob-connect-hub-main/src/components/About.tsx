import { motion } from "framer-motion";
import { Heart, Shield, Users, Target } from "lucide-react";
import patternBg from "@/assets/pattern-bg.png";
import mesobIcon from "@/assets/mesob-equb-logo.png";

const values = [
  {
    icon: Heart,
    title: "Rooted in Tradition",
    desc: "Equb has been the backbone of Ethiopian communities for centuries. We honor this tradition by bringing it into the digital age.",
    color: "from-teal to-teal-light",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "Every transaction is tracked, every payout is guaranteed. Our platform ensures complete transparency for all members.",
    color: "from-navy to-navy-light",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "We believe in the power of collective savings. Together, we achieve what's impossible alone.",
    color: "from-navy to-navy-light",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    desc: "Whether it's a new home, education, or business capital — Mesob Equb helps you reach your financial milestones faster.",
    color: "from-teal-light to-teal-dark",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.04]">
        <img src={patternBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal-dark text-xs font-semibold tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Empowering Communities Through{" "}
              <span className="text-gradient-teal">Collective Savings</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Mesob Equb bridges the gap between Ethiopia's rich communal savings heritage
              and modern financial technology, making Equb accessible, secure, and efficient
              for everyone — at home and abroad.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                {["👩🏾", "👨🏾", "👩🏽", "👨🏿"].map((emoji, i) => (
                  <span
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-lg"
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <div>
                <div className="font-display font-bold text-foreground">5,000+ Members</div>
                <div className="text-sm text-muted-foreground">Trust Mesob Equb</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`bg-background rounded-2xl p-6 shadow-card border border-border hover:shadow-teal transition-all duration-300 ${
                  i === 1 ? "translate-y-4" : i === 3 ? "translate-y-4" : ""
                }`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4`}>
                  <v.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
