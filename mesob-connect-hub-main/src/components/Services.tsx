import { motion } from "framer-motion";
import { Wallet, TrendingUp, Clock, ShieldCheck, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Traditional Equb",
    desc: "Join rotating savings groups with flexible contribution amounts and payout schedules.",
    accent: "bg-teal/10 text-teal",
    hoverAccent: "group-hover:bg-gradient-teal group-hover:text-primary-foreground",
  },
  {
    icon: TrendingUp,
    title: "Investment Equb",
    desc: "Grow your money with premium Equb plans that include investment opportunities.",
    accent: "bg-navy/10 text-navy",
    hoverAccent: "group-hover:bg-navy group-hover:text-primary-foreground",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Choose weekly, bi-weekly, or monthly cycles that fit your financial rhythm.",
    accent: "bg-teal-light/10 text-teal-dark",
    hoverAccent: "group-hover:bg-teal-light group-hover:text-primary-foreground",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Payouts",
    desc: "Our escrow system ensures every member receives their payout—no exceptions.",
    accent: "bg-navy-light/10 text-navy-light",
    hoverAccent: "group-hover:bg-navy-light group-hover:text-primary-foreground",
  },
  {
    icon: Globe,
    title: "Diaspora Equb",
    desc: "Ethiopians abroad can join Equb groups back home, bridging distance with trust.",
    accent: "bg-teal-dark/10 text-teal-dark",
    hoverAccent: "group-hover:bg-teal-dark group-hover:text-primary-foreground",
  },
  {
    icon: Smartphone,
    title: "Digital Management",
    desc: "Track contributions, view schedules, and manage groups from your phone.",
    accent: "bg-teal/10 text-teal",
    hoverAccent: "group-hover:bg-gradient-teal group-hover:text-primary-foreground",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal-dark text-xs font-semibold tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Everything You Need for{" "}
            <span className="text-gradient-teal">Smart Savings</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Comprehensive savings solutions for every Ethiopian, from traditional Equb to modern investment options.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-background rounded-2xl p-7 border border-border hover:border-teal/30 transition-all duration-500 hover:shadow-teal hover:-translate-y-1 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl ${s.accent} ${s.hoverAccent} flex items-center justify-center mb-5 transition-all duration-300`}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-teal-dark transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
