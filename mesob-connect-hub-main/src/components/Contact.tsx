import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-teal-dark">Contact Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Get in <span className="text-gradient-teal">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">Our Office</h4>
                <p className="text-sm text-muted-foreground">Bole Road, Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">Phone</h4>
                <p className="text-sm text-muted-foreground">+251 911 123 456</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">Email</h4>
                <p className="text-sm text-muted-foreground">info@mesobequb.com</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-card border-border" />
              <Input placeholder="Your Email" type="email" className="bg-card border-border" />
            </div>
            <Input placeholder="Subject" className="bg-card border-border" />
            <Textarea placeholder="Your Message" rows={5} className="bg-card border-border resize-none" />
            <Button variant="hero" size="lg" className="w-full">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
