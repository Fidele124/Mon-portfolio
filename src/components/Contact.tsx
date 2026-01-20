import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FadeInUp } from "./AnimatedSection";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "fidelelokossou38@gmail.com",
    href: "mailto:fidelelokossou38@gmail.com",
    isLink: true,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+241 062 30 71 00",
    href: "tel:+24106230171000",
    isLink: true,
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Owendo, Libreville, Gabon",
    href: null,
    isLink: false,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Fidele124",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/fidèle-lokossou",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <FadeInUp className="text-center mb-16">
          <motion.span 
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Restons en contact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Intéressé(e) par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </FadeInUp>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.isLink ? (
                    <motion.a
                      href={item.href!}
                      className="glass-card rounded-2xl p-5 hover-lift flex items-center gap-4 group block"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                          {item.value}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                      </div>
                    </motion.a>
                  ) : (
                    <motion.div
                      className="glass-card rounded-2xl p-5 flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-4 rounded-xl bg-primary/10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {socialLinks.map((social) => (
                  <motion.a 
                    key={social.label}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl glass-card hover:border-primary/50 hover:bg-primary/10 transition-all group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* CTA Card */}
            <motion.div 
              className="glass-card rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              
              <div className="text-center relative z-10">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center glow-effect"
                  animate={{ 
                    boxShadow: [
                      "0 0 60px -15px hsl(var(--primary) / 0.3)",
                      "0 0 80px -15px hsl(var(--primary) / 0.5)",
                      "0 0 60px -15px hsl(var(--primary) / 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Send className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Travaillons ensemble</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Je suis disponible pour un stage en développement web. 
                  Contactez-moi pour discuter de votre projet !
                </p>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="w-full glow-effect" asChild>
                      <a href="mailto:fidelelokossou38@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Envoyer un email
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="w-full" asChild>
                      <a href="/CV_Odette_Lokossou.pdf" download="CV_Odette_Lokossou.pdf">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger mon CV
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
