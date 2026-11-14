import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Code2, Database, GitBranch, Monitor, Terminal, LayoutTemplate, Layers, Lock, Server, Radio, Cpu
} from "lucide-react";
import { useRef } from "react";
import MagneticTilt from "./ui/MagneticTilt";

interface SkillItem {
  name: string;
  category: string;
  icon: typeof Server;
  code: string;
}

const skills: SkillItem[] = [
  { name: "Node.js & Clustering", category: "Backend", icon: Server, code: "node --experimental-worker server.js" },
  { name: "Express.js", category: "Backend", icon: Server, code: "app.use('/api/v1', router)" },
  { name: "Socket.IO (Real-Time)", category: "Real-Time", icon: Radio, code: "io.on('order:ready', (data) => {})" },
  { name: "Redis Caching", category: "Performance", icon: Database, code: "redis.setEx(tokenKey, 3600, val)" },
  { name: "Next.js 14", category: "Frontend", icon: Layers, code: "export async function generateMetadata()" },
  { name: "React.js", category: "Frontend", icon: Code2, code: "const [state, dispatch] = useReducer()" },
  { name: "TypeScript", category: "Language", icon: Code2, code: "type ApiResponse<T> = Promise<T>" },
  { name: "MongoDB & Mongoose", category: "Database", icon: Database, code: "ordersSchema.index({ userId: 1 })" },
  { name: "MySQL & Prisma ORM", category: "Database", icon: Database, code: "npx prisma migrate dev --name init" },
  { name: "Supabase & RLS", category: "Database", icon: Database, code: "CREATE POLICY on orders FOR SELECT" },
  { name: "Docker Containerization", category: "DevOps", icon: Monitor, code: "docker compose up --build -d" },
  { name: "JWT & Cryptography", category: "Security", icon: Lock, code: "crypto.createCipheriv(alg, key, iv)" },
  { name: "Tailwind & shadcn/ui", category: "Styling", icon: LayoutTemplate, code: "npm i -D tailwindcss-animate" },
  { name: "Postman & JMeter", category: "Testing", icon: Cpu, code: "jmeter -n -t stress_100_req.jmx" },
  { name: "Git & CI/CD", category: "DevOps", icon: GitBranch, code: "git push origin main" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-transparent relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2230_1px,transparent_1px),linear-gradient(to_bottom,#1a2230_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-mono"
        >
          <div className="flex items-center justify-center gap-3 text-zinc-500 text-xs mb-3">
            <span className="px-2 py-0.5 border border-slate-700 rounded bg-[#0a0f17]">
              ~/core/tech_stack
            </span>
            <span>// Production-Tested Engineering Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-zinc-500">export const </span>
            Skills
            <span className="text-cyan-300/70"> = [</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            // Full-stack technologies, databases, real-time protocols & devops
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <MagneticTilt
              key={skill.name}
              className="rounded-xl"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 0 30px rgba(59,226,255,0.14)" }}
                className="rounded-xl border border-slate-700/70 dev-glass dev-card overflow-hidden flex flex-col group cursor-default h-full"
              >
                <div className="flex items-center px-4 py-2 border-b border-slate-700/70 bg-[#0f1520]">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-300/60" />
                  </div>
                  <div className="mx-auto flex items-center space-x-2 text-zinc-500 text-[10px] font-mono font-bold tracking-wider uppercase group-hover:text-cyan-200 transition-colors">
                    <Terminal size={10} />
                    <span>{skill.category.toLowerCase()}/{skill.name.split(" ")[0].toLowerCase()}.sh</span>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col items-start justify-center font-mono relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <skill.icon size={120} />
                  </div>
                  
                  <div className="flex items-center mb-3 text-white z-10 w-full">
                    <div className="p-2 bg-[#111927] border border-slate-700 rounded shadow-md mr-4 group-hover:shadow-[0_0_15px_rgba(59,226,255,0.45)] group-hover:border-cyan-300 transition-all duration-300">
                      <skill.icon size={20} className="text-zinc-300 group-hover:text-cyan-200" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold tracking-wide">{skill.name}</h3>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-zinc-400 bg-[#070b12] border border-slate-800 p-3 rounded w-full flex items-center overflow-x-auto whitespace-nowrap z-10 font-mono shadow-inner mt-auto">
                    <span className="text-zinc-600 mr-2">$</span>
                    <span className="text-zinc-300 font-bold tracking-widest leading-none text-[11px]">{skill.code}</span>
                    <span className="inline-block w-[6px] h-[14px] bg-cyan-300 ml-2 align-middle animate-pulse shadow-[0_0_10px_rgba(59,226,255,0.85)] shrink-0" />
                  </div>
                </div>
              </motion.div>
            </MagneticTilt>
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
