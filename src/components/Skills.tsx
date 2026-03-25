import { motion } from "framer-motion";
import { 
  Code2, Database, Zap, GitBranch, Monitor, Terminal, LayoutTemplate, Layers, Frame, Lock, Server, Smartphone
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Node.js", icon: Server, code: "npm install express cors" },
    { name: "React.js", icon: Code2, code: "npx create-react-app ." },
    { name: "Next.js", icon: Layers, code: "npx create-next-app@latest" },
    { name: "TypeScript", icon: Code2, code: "tsc --init" },
    { name: "MongoDB", icon: Database, code: "db.collection.insertOne()" },
    { name: "Express.js", icon: Server, code: "app.listen(3000, () => {})" },
    { name: "Tailwind CSS", icon: LayoutTemplate, code: "npm install -D tailwindcss" },
    { name: "PHP", icon: Code2, code: "<?php echo 'Hello'; ?>" },
    { name: "SQL", icon: Database, code: "SELECT * FROM users;" },
    { name: "Supabase", icon: Database, code: "supabase start" },
    { name: "Git", icon: GitBranch, code: "git commit -m 'init'" },
    { name: "Docker", icon: Monitor, code: "docker-compose up -d" },
    { name: "Flutter", icon: Smartphone, code: "flutter run" },
    { name: "Ethical Hacking", icon: Lock, code: "nmap -sS -v db" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-mono"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-zinc-500">export const </span>
            Skills
            <span className="text-zinc-500"> = [</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            // Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
              className="rounded-xl border border-zinc-800 bg-[#0a0a0a] overflow-hidden flex flex-col group cursor-default"
            >
              <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-[#111]">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-400"></div>
                </div>
                <div className="mx-auto flex items-center space-x-2 text-zinc-500 text-[10px] font-mono font-bold tracking-wider uppercase group-hover:text-zinc-300 transition-colors">
                  <Terminal size={10} />
                  <span>{skill.name.toLowerCase().replace(" ", "-")}.sh</span>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col items-start justify-center font-mono relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <skill.icon size={120} />
                </div>
                
                <div className="flex items-center mb-3 text-white z-10 w-full">
                  <div className="p-2 bg-[#111] border border-zinc-800 rounded shadow-md mr-4 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:border-white transition-all duration-300">
                    <skill.icon size={20} className="text-zinc-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold tracking-wide">{skill.name}</h3>
                </div>
                
                <div className="text-xs text-zinc-400 bg-black border border-zinc-800 p-3 rounded w-full flex items-center overflow-x-auto whitespace-nowrap z-10 font-mono shadow-inner">
                  <span className="text-zinc-600 mr-2">$</span>
                  <span className="text-zinc-300 font-bold tracking-widest leading-none">{skill.code}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[6px] h-[14px] bg-white ml-2 align-middle shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-500 tracking-tighter">
          ];
        </div>
      </div>
    </section>
  );
};

export default Skills;
