import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp, SlideInLeft, SlideInRight } from "./AnimatedSection";

const experiences = [
  {
    type: "work",
    title: "Développement d'une plateforme e-commerce",
    company: "Yubile Technologie",
    location: "Libreville, Gabon",
    period: "Juillet 2025 - Octobre 2025",
    description: "Conception et développement d'une plateforme web e-commerce pour un restaurant. Gestion des catégories, des plats, des commandes et des utilisateurs.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    type: "project",
    title: "Système de gestion de stock",
    company: "ESGIS Gabon",
    location: "Libreville",
    period: "Mars 2019 - Avril 2020",
    description: "Conception d'un système permettant de gérer la marchandise d'un magasin. Vérification du stock, possibilité de retirer, ajouter et rechercher des articles.",
    technologies: ["C", "Algorithmes", "Structures de données"],
  },
];

const formations = [
  {
    degree: "Licence Professionnelle en Génie Logiciel",
    school: "ESGIS - École Supérieure de Gestion d'Informatique et des Sciences",
    period: "2024 - 2025",
  },
  {
    degree: "Baccalauréat Série A1",
    school: "Lycée National Léon Mba",
    period: "2021 - 2022",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <FadeInUp className="text-center mb-16">
          <motion.span 
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mon parcours
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Parcours <span className="text-gradient">Professionnel</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mon expérience et mes projets qui démontrent mes capacités techniques
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Experiences */}
          <div className="lg:col-span-3">
            <SlideInLeft>
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Briefcase className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold">Expériences & Projets</h3>
              </div>
            </SlideInLeft>

            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                className="absolute left-6 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary) / 0.5), transparent)" }}
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={exp.title} 
                    className="relative pl-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background glow-effect"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                    />
                    
                    <motion.div 
                      className="glass-card rounded-2xl p-6 hover-lift"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <motion.span 
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.type === "work" ? "Stage" : "Projet scolaire"}
                        </motion.span>
                      </div>
                      
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={tech} 
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + techIndex * 0.05 + 0.3 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Formations */}
          <div className="lg:col-span-2">
            <SlideInRight>
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <GraduationCap className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold">Formations</h3>
              </div>
            </SlideInRight>

            <div className="space-y-4">
              {formations.map((formation, index) => (
                <motion.div 
                  key={formation.degree}
                  className="glass-card rounded-2xl p-6 hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{formation.degree}</h4>
                  <p className="text-sm text-primary mb-2">{formation.school}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formation.period}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div 
              className="mt-8 glass-card rounded-2xl p-6 hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4">Langues</h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Français</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                    Courant
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Anglais</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    Débutant
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
