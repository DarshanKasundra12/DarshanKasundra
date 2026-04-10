import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import MagneticTilt from "./ui/MagneticTilt";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [45, -45]);

  const projects = [
    {
      id: 1,
      title: "Eklavya - Modern Learning Management System",
      description: "Eklavya is a full-featured Learning Management System (LMS) providing an exceptional learning experience with course discovery, enrollment, AI-powered examinations, and an interactive UI for students and teachers.",
      image: "/Project Image/EklavyHome.png",
      technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Prisma', 'MySQL', 'Clerk', 'Vercel'],
      liveUrl: "https://eklavya-lms-z19t.onrender.com//",
      githubUrl: "https://github.com/Kunj-Mori/Eklavya-LMS",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration. But the database is currently no worked.",
      image: "/Project Image/Ecommerce-Home.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://e-commerce-s92u.onrender.com/",
      githubUrl: "https://github.com/DarshanKasundra12/E-Commerce",
      featured: true
    },
    {
      id: 3,
      title: "FitConnect",
      description: "Fit Connect is likely a fitness platform designed to connect Fit.",
      image: "/Project Image/FitConnectApp.png",
      technologies: ['Flutter', 'Firebase', 'Provider', 'Dart'],
      liveUrl: "https://fit-connect-mocha.vercel.app/",
      githubUrl: "https://github.com/DarshanKasundra12/FitConnect",
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-transparent relative">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-cyan-300/70">&lt;</span>FeaturedProjects <span className="text-cyan-300/70">/&gt;</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            // A showcase of my recent work
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
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
              className="group rounded-xl border border-slate-700/70 dev-glass dev-card overflow-hidden flex flex-col transition-all duration-300 relative"
            >
              {project.featured && (
                <div className="absolute top-0 right-0 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-300 to-lime-300 text-black text-xs font-bold uppercase rounded-bl-lg font-mono tracking-wider">
                    Featured
                  </span>
                </div>
              )}
              
              <div className="flex items-center px-4 py-2 border-b border-slate-700/70 bg-[#0f1520]">
                <div className="flex space-x-1.5 flex-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-300/60"></div>
                </div>
                <div className="flex items-center text-zinc-500 text-[10px] font-mono font-bold tracking-wider">
                  <Terminal size={10} className="mr-2" />
                  <span>{project.title.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
                </div>
                <div className="flex-1"></div>
              </div>

              <div className="relative overflow-hidden border-b border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm gap-4">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-300 to-lime-300 text-black hover:from-cyan-200 hover:to-lime-200 border border-cyan-100 px-4 py-2 font-mono uppercase text-xs font-bold transition-all hover:scale-105"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" /> Live
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#080c14] text-white hover:bg-[#111927] border border-slate-600 px-4 py-2 font-mono uppercase text-xs font-bold transition-all hover:scale-105"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col font-mono">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#0e1520] border border-slate-700 text-zinc-300 text-[10px] uppercase font-bold rounded hover:bg-cyan-300 hover:text-black transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-500 text-[10px] rounded cursor-default">
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
