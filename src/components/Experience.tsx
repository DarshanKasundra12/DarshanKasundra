import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal } from "lucide-react";
import { useRef } from "react";
import MagneticTilt from "./ui/MagneticTilt";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Theta Technolabs",
    role: "Software Developer Intern",
    period: "Jul 2026 - Present",
    points: [
      "Developed an internal Encryption & Decryption Tool for securely handling sensitive payloads with server-side secret-key storage and automated cryptographic workflows.",
      "Built a centralized Login Gateway for company servers, enabling secure authentication and streamlined access to multiple internal projects through a unified entry point."
    ],
    tech: ["Node.js", "Express.js", "Cryptography", "JWT", "Security Gateways", "REST APIs"]
  },
  {
    company: "Digimonk Solutions",
    role: "Full Stack Developer Intern",
    period: "Jan 2026 – Jul 2026",
    points: [
      "Engineered a route optimization system using Node.js, Express.js, and open-source mapping tools as the sole backend developer, owning full API design and MVC architecture.",
      "Containerized the application using Docker, ensuring consistent environments across development and production with zero configuration drift.",
      "Implemented robust JWT authentication and role-based access control (RBAC); verified every endpoint using structured Postman collections before releases."
    ],
    tech: ["Node.js", "Express.js", "Docker", "JWT", "RBAC", "Postman", "Mapping APIs"]
  },
  {
    company: "AIGETAI",
    role: "Node Developer Intern",
    period: "May 2025 – Aug 2025",
    points: [
      "Engineered 30+ REST APIs across Questions, Promotions, and Sports modules (Node.js, Express.js, MongoDB) with 10+ schemas optimized via indexing, pagination, and filtering.",
      "Built a real-time support ticket system featuring 15+ Socket.IO events for live chat and instant status updates; integrated SportsDev APIs for automated data synchronization.",
      "Raised backend reliability through 100+ structured Postman tests, input validation pipelines, and route performance optimizations."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "SportsDev API", "Postman"]
  },
  {
    company: "Bits Infotech",
    role: "MERN Developer Intern",
    period: "May 2024 – Jul 2024",
    points: [
      "Rebuilt a legacy PHP/MySQL e-commerce platform from scratch in the MERN stack with modern architecture and JWT-secured role-based access for Admin and User roles.",
      "Developed full Admin Panel for category/product/user management and customer-facing store with variant displays, dynamic cart (+ / -), and 10+ responsive views.",
      "Integrated backend-driven PDF bill generation for order invoices, automating receipt delivery immediately on order checkout."
    ],
    tech: ["React", "Node.js", "MongoDB", "Express.js", "jsPDF", "REST APIs"]
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
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto mt-4 font-mono">
            // 4 software engineering internships: shipping secure gateways, optimizing high-load routes, and writing resilient code
          </p>
        </motion.div>
        
        <MagneticTilt className="rounded-xl">
          <div className="relative rounded-xl border border-slate-700/70 dev-glass dev-card shadow-[0_0_30px_rgba(59,226,255,0.08)] overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-slate-700/70 bg-[#0f1520]">
              <div className="flex space-x-1.5 flex-1">
                <div className="w-3 h-3 rounded-full bg-rose-400/60" />
                <div className="w-3 h-3 rounded-full bg-amber-300/60" />
                <div className="w-3 h-3 rounded-full bg-cyan-300/60" />
              </div>
              <div className="flex items-center text-zinc-500 text-xs font-mono font-bold tracking-wider">
                <Terminal size={12} className="mr-2" />
                <span>bash - career_timeline.log ({experiences.length} records)</span>
              </div>
              <div className="flex-1" />
            </div>
            
            <div className="p-6 md:p-10 font-mono text-sm sm:text-base leading-relaxed text-zinc-400">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="mb-10 relative pl-6 border-l-2 border-slate-700 last:mb-0 pb-3"
                >
                  <div className="absolute w-3.5 h-3.5 bg-cyan-300 rounded-full -left-[8px] top-1.5 shadow-[0_0_12px_rgba(59,226,255,0.9)] ring-4 ring-[#0f1520]" />
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-zinc-500 text-xs font-bold tracking-wider uppercase bg-[#080d15] px-2.5 py-0.5 rounded border border-slate-800">
                      [{exp.period}]
                    </span>
                    <span className="text-xs text-lime-300/90 font-bold uppercase tracking-wider">
                      Internship #{experiences.length - idx}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 glow-text">
                    <span className="text-zinc-500 font-normal mr-2">@</span>{exp.company}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-cyan-300 mb-3">{exp.role}</p>

                  <div className="space-y-2 mb-4">
                    {exp.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        <span className="text-zinc-600 mr-2 shrink-0 select-none">&gt;</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#080d15] border border-slate-800 text-zinc-400 text-[10px] uppercase font-bold rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="flex items-center mt-8 pt-4 border-t border-slate-800/80">
                <span className="text-zinc-600 mr-2">darshan@portfolio:~$</span>
                <span className="text-zinc-400 text-xs mr-2">tail -f career.success</span>
                <span className="inline-block w-2.5 h-5 bg-white align-middle animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
          </div>
        </MagneticTilt>
      </div>
    </section>
  );
};

export default Experience;
