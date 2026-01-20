import { Code, Database, Layout, Settings, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp, AnimatedSection, AnimatedItem } from "./AnimatedSection";

// Composants d'icônes pour les technologies
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#f89820" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
    <path fill="#5382a1" d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82"/>
    <path fill="#f89820" d="M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118"/>
    <path fill="#5382a1" d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <rect width="24" height="24" fill="#f7df1e"/>
    <path fill="#000" d="M7.334 18.935c.543.543 1.266.815 2.169.815 1.357 0 2.169-.815 2.169-2.169V9.065H9.503v8.516c0 .543-.272.815-.815.815s-.815-.272-.815-.815h-2.169c0 1.357.272 2.169 1.63 2.354zm6.789-.272c.815.815 1.9 1.357 3.257 1.357 1.9 0 3.257-1.086 3.257-2.712 0-1.357-.815-2.169-2.712-2.712l-.543-.272c-.815-.272-1.086-.543-1.086-1.086 0-.543.272-.815.815-.815.543 0 .815.272 1.086.815l1.357-.815c-.543-1.086-1.357-1.63-2.443-1.63-1.63 0-2.712 1.086-2.712 2.443 0 1.357.815 2.169 2.443 2.712l.543.272c.815.272 1.357.543 1.357 1.086 0 .543-.543.815-1.086.815-.815 0-1.357-.272-1.63-.815l-1.357.815z"/>
  </svg>
);

const PHPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777bb4"/>
    <ellipse cx="12" cy="12" rx="10" ry="6" fill="#fff"/>
    <path fill="#777bb4" d="M5.761 7.233c.68 0 1.233.084 1.659.252.426.168.759.42 1 .756.241.336.361.756.361 1.26 0 .504-.12.924-.361 1.26-.241.336-.574.588-1 .756-.426.168-.979.252-1.659.252H4.239v2.231H2.761V7.233h3zm-.48 3.024c.32 0 .56-.072.72-.216.16-.144.24-.36.24-.648 0-.288-.08-.504-.24-.648-.16-.144-.4-.216-.72-.216H4.239v1.728h1.042zm6.958-3.024c.68 0 1.233.084 1.659.252.426.168.759.42 1 .756.241.336.361.756.361 1.26 0 .504-.12.924-.361 1.26-.241.336-.574.588-1 .756-.426.168-.979.252-1.659.252h-1.522v2.231H9.239V7.233h3zm-.48 3.024c.32 0 .56-.072.72-.216.16-.144.24-.36.24-.648 0-.288-.08-.504-.24-.648-.16-.144-.4-.216-.72-.216h-1.042v1.728h1.042zm6.958-3.024c.68 0 1.233.084 1.659.252.426.168.759.42 1 .756.241.336.361.756.361 1.26 0 .504-.12.924-.361 1.26-.241.336-.574.588-1 .756-.426.168-.979.252-1.659.252h-1.522v2.231H15.717V7.233h3zm-.48 3.024c.32 0 .56-.072.72-.216.16-.144.24-.36.24-.648 0-.288-.08-.504-.24-.648-.16-.144-.4-.216-.72-.216h-1.042v1.728h1.042z"/>
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#e34f26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
    <path fill="#ef652a" d="M12 22.75l6.953-1.928L20.5 2.5H12v20.25z"/>
    <path fill="#fff" d="M12 9.5H8.844l-.203-2.281H12V4.938H5.906l.063.719.656 7.375H12V9.5zm0 5.438l-.016.004-3.547-.959-.227-2.547H6.188l.445 4.984L12 17.375v-2.437z"/>
    <path fill="#ebebeb" d="M11.984 9.5v2.531H9.422l-.203-2.531h2.765zm-.016 5.438v2.437l-3.531-.955-.227-2.547H6.188l.445 4.984 3.547.959.016-.004v-2.437l-.016.004z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#06b6d4" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#00758f" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.082c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.564.438 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.357-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.976-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.456 0 .86.113 1.21.34l-.206.476c-.314-.155-.66-.235-1.006-.235-.307 0-.544.078-.712.23-.168.154-.252.35-.252.588 0 .262.185.532.555.81l1.134.63c.45.31.76.65.76 1.182zm-7.73-.061c0 .402-.26.747-.78.747-.48 0-.778-.224-1.05-.747-.596-.716-.89-2.175-.89-4.375 0-2.175.295-3.63.89-4.376.272-.534.57-.747 1.05-.747.48 0 .778.224 1.05.747.596.716.89 2.175.89 4.375 0 2.175-.295 3.63-.89 4.376z"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#ff2d20" d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.037.027.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.027.014-.013.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.009.027.019.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.018.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.02-.028-.033-.002-.003-.006-.003-.009-.006-.007-.014-.01-.027-.013-.042-.51.003-.01-.007-.01-.014-.002-.018-.006-.035-.006-.054V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
  </svg>
);

const BootstrapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#7952b3" d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 0v24H0V0h24zM8.537 6.731v10.538h4.26c2.606 0 4.104-1.216 4.104-3.27 0-1.52-.773-2.454-2.232-2.454v-.054c1.170-.585 1.943-1.466 1.943-2.606 0-1.793-1.17-2.154-3.348-2.154H8.537z"/>
  </svg>
);

const technicalSkills = [
  { name: "Java", icon: JavaIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "PHP", icon: PHPIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "HTML / CSS", icon: HTMLIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "TailwindCSS", icon: TailwindIcon },
  { name: "MySQL", icon: MySQLIcon },
];

const softSkills = [
  { icon: Users, title: "Méthodologie Scrum", description: "Travail en équipe agile" },
  { icon: Settings, title: "Planification", description: "Découpage en tâches, estimation des charges" },
  { icon: FileText, title: "Documentation", description: "Rédaction de cahiers des charges" },
  { icon: Layout, title: "UML", description: "Conception et modélisation" },
];

const SkillCard = ({ name, icon: IconComponent, index }: { name: string; icon: React.ComponentType; index: number }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-card border border-border/50 hover:border-primary/30 p-4 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.3)"
      }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 text-center">
        <motion.div 
          className="flex justify-center mb-3"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <IconComponent />
        </motion.div>
        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
          {name}
        </h4>
      </div>
      
      {/* Shine effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{ transform: "skewX(-20deg)" }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <FadeInUp className="text-center mb-16">
          <motion.span 
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ce que je maîtrise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies et méthodologies que je maîtrise pour créer des solutions web performantes
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <FadeInUp delay={0.2}>
            <div className="glass-card rounded-2xl p-8 hover-lift h-full">
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Code className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold">Compétences Techniques</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technicalSkills.map((skill, index) => (
                  <SkillCard key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Soft Skills / Project Management */}
          <FadeInUp delay={0.3}>
            <div className="glass-card rounded-2xl p-8 hover-lift h-full">
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Database className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold">Gestion de Projet</h3>
              </div>

              <AnimatedSection className="grid gap-4">
                {softSkills.map((skill, index) => (
                  <AnimatedItem key={skill.title}>
                    <motion.div 
                      className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                      whileHover={{ x: 5, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>

              {/* Tools */}
              <motion.div 
                className="mt-6 pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-muted-foreground mb-3">Outils utilisés</p>
                <div className="flex flex-wrap gap-2">
                  {["Trello", "Git", "VS Code", "MySQL Workbench"].map((tool, index) => (
                    <motion.span 
                      key={tool} 
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default Skills;
