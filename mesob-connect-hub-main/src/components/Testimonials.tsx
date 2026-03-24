import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Abeba Tesfaye",
    role: "Small Business Owner",
    text: "Mesob Equb helped me save enough to expand my coffee shop. The digital tracking made everything transparent and trustworthy.",
    avatar: "👩🏾",
  },
  {
    name: "Dawit Mekonnen",
    role: "Software Engineer, USA",
    text: "Living abroad, I can still participate in Equb with my family back home. It keeps me connected to my roots and helps me save.",
    avatar: "👨🏾",
  },
  {
    name: "Hiwot Bekele",
    role: "Teacher",
    text: "I love how easy it is to manage my contributions. The guaranteed payouts give me peace of mind for my children's education fund.",
    avatar: "👩🏽",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal-dark text-xs font-semibold tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by{" "}
            <span className="text-gradient-teal">Thousands</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear what our members have to say about their experience with Mesob Equb.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border hover:shadow-teal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-teal text-teal" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-7 text-[15px]">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
                  {t.avatar}
                </span>
                <div>
                  <div className="font-display font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
