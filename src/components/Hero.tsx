import { Mail, MapPin, Phone, Github, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Photo Profile - Left Side */}
          <motion.div 
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements behind photo */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -10, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Photo container */}
              <motion.div 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/profile-photo.jpeg" 
                  alt="Odette Fidèle Gossi Lokossou" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback si l'image ne charge pas
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div 
            className="text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
            >
              Fidèle 
              <motion.span 
                className="block text-gradient"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                LOKOSSOU
              </motion.span>
            </motion.h1>

            {/* Title */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-light"
            >
              Développeur Web
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl lg:max-w-none"
            >
              Passionnée par le développement web, j’ai acquis des compétences de base en HTML, CSS, 
              JavaScript ainsi que des notions en développement backend entres autres PHP, Laravel. Motivée, sérieuse et désireuse d’apprendre, je suis capable de travailler aussi bien en équipe que 
              de manière autonome.
            </motion.p>

            {/* Contact info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              <motion.a 
                href="mailto:fidelelokossou38@gmail.com" 
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:border-primary/50 transition-all hover-lift"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">fidelelokossou38@gmail.com</span>
              </motion.a>
               {/*<motion.div 
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card"
                whileHover={{ scale: 1.02 }}
              >
               <Phone className="w-4 h-4 text-primary" />
                 <span className="text-sm">+241 062 30 71 00</span> 
              </motion.div> */}
              <motion.div 
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Libreville, Gabon</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="glow-effect px-8">
                  <a href="#experience">Voir mes projets</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" asChild className="px-8">
                  <a href="/CV_Odette_Lokossou.pdf" download="CV_Odette_Lokossou.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger CV
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" asChild className="px-8">
                  <a href="https://github.com/Fidele124" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#skills"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;