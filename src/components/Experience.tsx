import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal } from "lucide-react";
import { useRef } from "react";
import MagneticTilt from "./ui/MagneticTilt";

const experiences = [
  {
    company: "Digimonk Solutions",
    role: "Software Engineer",
    period: "Jan 2026 - Present",
    description: "Developing and maintaining full-stack web applications using MongoDB, Express.js, React, and Node.js in a collaborative company environment."
  },
  {
    company: "AIGETAI",
    role: "Backend Developer Internship",
    period: "May 2025 - Aug 2025",
    description: "Developed scalable backend APIs with Node.js, Express, and Mongoose, designed dynamic MongoDB schemas for various application features, and built admin-side CRUD operations with a chat-based support system."
  },
  {
    company: "BITSINFOTECH",
    role: "MERN Developer Internship",
    period: "May 2024 - July 2024",
    description: "Contributed to the development and optimization of a MERN stack website by designing user-friendly React interfaces and resolving software issues."
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [42, -42]);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-mono"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-cyan-300/70">cat </span>experience.log
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mt-4">
            // My professional work and internship journey
          </p>
        </motion.div>
        
        <MagneticTilt className="rounded-xl">
        <div className="relative rounded-xl border border-slate-700/70 dev-glass dev-card shadow-[0_0_30px_rgba(59,226,255,0.08)] overflow-hidden">
          <div className="flex items-center px-4 py-3 border-b border-slate-700/70 bg-[#0f1520]">
            <div className="flex space-x-1.5 flex-1">
              <div className="w-3 h-3 rounded-full bg-rose-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-amber-300/60"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-300/60"></div>
            </div>
            <div className="flex items-center text-zinc-500 text-xs font-mono font-bold tracking-wider">
              <Terminal size={12} className="mr-2" />
              <span>bash - experience.log</span>
            </div>
            <div className="flex-1"></div>
          </div>
          
          <div className="p-6 md:p-10 font-mono text-sm sm:text-base leading-relaxed text-zinc-400">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="mb-8 relative pl-6 border-l-2 border-slate-700 last:mb-0 pb-2"
              >
                <div className="absolute w-3 h-3 bg-cyan-300 rounded-full -left-[7px] top-1.5 shadow-[0_0_12px_rgba(59,226,255,0.8)]"></div>
                
                <div className="text-zinc-500 text-xs mb-1 font-bold tracking-wider uppercase">[{exp.period}]</div>
                <h3 className="text-xl font-bold text-white mb-1 glow-text">
                  <span className="text-zinc-500 font-normal mr-2">@</span>{exp.company}
                </h3>
                <p className="text-xl font-bold text-zinc-300 mb-3">{exp.role}</p>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  <span className="text-zinc-600 mr-2">$ log details:</span>
                  {exp.description}
                </p>
              </motion.div>
            ))}
            <div className="flex items-center mt-8">
              <span className="text-zinc-600 mr-2">darshan@portfolio:~$</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2.5 h-5 bg-white align-middle shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              ></motion.span>
            </div>
          </div>
        </div>
        </MagneticTilt>
      </div>
    </section>
  );
};

export default Experience;
