import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Terminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import MagneticTilt from "./ui/MagneticTilt";

interface ProjectItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  statusBadge?: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "SevaQ – Restaurant QR Token System",
    subtitle: "Self-Initiated Commercial Product",
    description:
      "A secure QR-based takeaway token platform where customers scan to track orders in real-time with Socket.IO voice notifications. Scaled throughput from 21 to 100 req/sec (4.7x) using Redis caching, worker threads, clustering, and a dual-database architecture (MongoDB & Supabase) with automated cron cleanup.",
    image: "/Project Image/Portfolio-Image.png",
    technologies: [
      "MERN",
      "Socket.IO",
      "Redis",
      "Supabase",
      "Worker Threads",
      "Node Clustering",
      "jsPDF",
      "JMeter",
    ],
    liveUrl: "https://github.com/DarshanKasundra12/QR-Token",
    githubUrl: "https://github.com/DarshanKasundra12/QR-Token",
    featured: true,
    statusBadge: "Commercial Product",
  },
  {
    id: 2,
    title: "DocConnect – Clinic Management System",
    subtitle: "Validated by Real Medical Doctors",
    description:
      "Production-ready healthcare platform where receptionists manage patient registration, appointments, and billing while doctors review cases. Enforces role-based isolation via Supabase Row-Level Security (RLS) and auto-generates prescription & billing PDFs using jsPDF and html2canvas.",
    image: "/Project Image/DocConnect.png",
    technologies: [
      "React",
      "TypeScript",
      "Supabase (RLS)",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "jsPDF",
    ],
    liveUrl: "https://doctor-connect-v2.vercel.app/",
    githubUrl: "https://github.com/DarshanKasundra12/DoctorConnect",
    featured: true,
    statusBadge: "Production Ready",
  },
  {
    id: 3,
    title: "Eklavya – AI-Driven LMS Platform",
    subtitle: "AI Question Generation & Evaluation",
    description:
      "Full-stack Learning Management System where educators publish and monetize courses via Razorpay and UploadThing. Powered by Gemini API for automated topic-based question generation, dual manual/AI evaluation, an AI student chatbot, and Prisma ORM on Aiven MySQL.",
    image: "/Project Image/EklavyHome.png",
    technologies: [
      "Next.js 14",
      "Prisma ORM",
      "MySQL (Aiven)",
      "Gemini API",
      "Clerk",
      "Razorpay",
      "UploadThing",
      "Tailwind CSS",
    ],
    liveUrl: "https://eklavya-lms-z19t.onrender.com/",
    githubUrl: "https://github.com/Kunj-Mori/Eklavya-LMS",
    featured: true,
    statusBadge: "AI Powered",
  },
  {
    id: 4,
    title: "Modern MERN E-Commerce Platform",
    subtitle: "Rebuilt from PHP to Modern Architecture",
    description:
      "Full-featured e-commerce system built from scratch in MERN with JWT-secured role-based access for Admin and Customer views. Features dynamic variant product displays, interactive quantity controls (+ / -), responsive catalog pages, and automated PDF invoice generation.",
    image: "/Project Image/Ecommerce-Home.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "jsPDF",
      "REST APIs",
    ],
    liveUrl: "https://e-commerce-s92u.onrender.com/",
    githubUrl: "https://github.com/DarshanKasundra12/E-Commerce",
    featured: false,
  },
  {
    id: 5,
    title: "FitConnect – Mobile Fitness Ecosystem",
    subtitle: "Cross-Platform Athlete Platform",
    description:
      "Mobile fitness platform connecting personal trainers and enthusiasts. Features custom workout regime building, body metric tracking, real-time sync with Firebase, and community challenge feeds.",
    image: "/Project Image/FitConnectApp.png",
    technologies: ["Flutter", "Dart", "Firebase", "Provider", "REST APIs"],
    liveUrl: "https://fit-connect-mocha.vercel.app/",
    githubUrl: "https://github.com/DarshanKasundra12/FitConnect",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-transparent relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141d2a_1px,transparent_1px),linear-gradient(to_bottom,#141d2a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-mono"
        >
          <div className="flex items-center justify-center gap-3 text-zinc-500 text-xs mb-3">
            <span className="px-2 py-0.5 border border-slate-700 rounded bg-[#0a0f17]">
              ~/portfolio/projects
            </span>
            <span>// 2+ Production Products & Real-world Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-cyan-300/70">&lt;</span>FeaturedProjects{" "}
            <span className="text-cyan-300/70">/&gt;</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            // Full-stack engineering, high-throughput APIs & real-time architectures
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <MagneticTilt key={project.id} className="rounded-xl">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.01,
                  boxShadow: "0 0 35px rgba(59,226,255,0.18)",
                }}
                className="group rounded-xl border border-slate-700/70 dev-glass dev-card overflow-hidden flex flex-col transition-all duration-300 relative h-full"
              >
                {/* Badges */}
                <div className="absolute top-0 right-0 z-20 flex items-center">
                  {project.statusBadge && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-300 to-lime-300 text-black text-[10px] font-black uppercase rounded-bl-lg font-mono tracking-wider flex items-center gap-1 shadow-md">
                      <Sparkles size={11} /> {project.statusBadge}
                    </span>
                  )}
                </div>

                <div className="flex items-center px-4 py-2 border-b border-slate-700/70 bg-[#0f1520]">
                  <div className="flex space-x-1.5 flex-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-300/60" />
                  </div>
                  <div className="flex items-center text-zinc-500 text-[10px] font-mono font-bold tracking-wider">
                    <Terminal size={10} className="mr-2" />
                    <span>
                      {project.title.split("–")[0].trim().toLowerCase().replace(/\s+/g, "-")}.tsx
                    </span>
                  </div>
                  <div className="flex-1" />
                </div>

                <div className="relative overflow-hidden border-b border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm gap-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-300 to-lime-300 text-black hover:from-cyan-200 hover:to-lime-200 border border-cyan-100 px-4 py-2 font-mono uppercase text-xs font-bold transition-all hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" /> Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        className="bg-[#080c14] text-white hover:bg-[#111927] border border-slate-600 px-4 py-2 font-mono uppercase text-xs font-bold transition-all hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" /> Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col font-mono">
                  {project.subtitle && (
                    <span className="text-[10px] text-cyan-300/80 uppercase font-bold tracking-wider mb-1">
                      // {project.subtitle}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800 mt-auto">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0e1520] border border-slate-700 text-zinc-300 text-[10px] uppercase font-bold rounded hover:bg-cyan-300 hover:text-black transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-500 text-[10px] rounded cursor-default font-bold">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </MagneticTilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
