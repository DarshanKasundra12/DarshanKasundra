import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Full Stack Web Developer",
    "MERN Stack Specialist",
    "UI/UX Enthusiast",
    "Software Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const codeSnippets = [
    { text: 'const name = "Darshan";', top: '10%', left: '5%', delay: 0 },
    { text: 'async function build() {', top: '25%', left: '80%', delay: 2 },
    { text: 'await success();', top: '35%', left: '75%', delay: 4 },
    { text: 'return true;', top: '50%', left: '10%', delay: 1 },
    { text: 'npm start', top: '70%', left: '85%', delay: 3 },
    { text: 'export default Developer;', top: '80%', left: '15%', delay: 5 },
    { text: 'import { creativity } from "mind";', top: '20%', left: '30%', delay: 6 },
    { text: 'interface Skills {', top: '60%', left: '60%', delay: 2 },
    { text: 'while (alive) { code(); }', top: '90%', left: '40%', delay: 1 }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-black selection:bg-black selection:text-black"
    >
      {/* Animated Faint Grid Overlay */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-40 pointer-events-none"
      />

      {/* Floating background code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-zinc-600/60 text-sm whitespace-nowrap font-bold tracking-wider"
            style={{ top: snippet.top, left: snippet.left }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: snippet.delay,
              ease: "easeInOut",
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Window with Glowing Border and floating animation */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-zinc-700 bg-[#000] shadow-[0_0_50px_-15px_rgba(255,255,255,0.2)] overflow-hidden backdrop-blur-md relative"
        >
          {/* subtle white glow ray inside terminal */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

          {/* macOS window controls / header */}
          <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#0a0a0a]">
            <div className="flex space-x-2">
              <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-zinc-600 cursor-pointer"></motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-zinc-500 cursor-pointer"></motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-zinc-400 cursor-pointer"></motion.div>
            </div>
            <div className="flex gap-2 items-center mx-auto text-zinc-400 font-mono text-xs font-bold tracking-wider">
              <Terminal size={14} className="text-white" />
              <span className="text-white">darshan.tsx</span>
            </div>
          </div>

          {/* Editor content */}
          <div className="p-6 md:p-10 font-mono text-sm sm:text-base leading-relaxed text-zinc-400">
            <div className="mb-4">
              <span className="text-zinc-600 select-none">1 </span> <span className="text-white font-bold">import</span> {"{"} <span className="text-white">Developer</span> {"}"} <span className="text-white font-bold">from</span> <span className="text-zinc-300">"future"</span>;
            </div>
            <div className="mb-4">
              <span className="text-zinc-600 select-none">2 </span>
            </div>
            <div className="mb-4 flex items-center">
              <span className="text-zinc-600 select-none w-6">3 </span> 
              <span className="text-white font-bold">const</span> <span className="text-white">profile</span> = {"{"}
            </div>
            <div className="mb-2 flex items-center pl-4 md:pl-8">
              <span className="text-zinc-600 select-none w-6 -ml-4 md:-ml-8">4 </span> 
              <span className="text-zinc-300">name</span>: <span className="text-white">"</span><span className="text-white font-extrabold text-xl sm:text-3xl tracking-wide highlight-glow">Darshan Kasundra</span><span className="text-white">"</span>,
            </div>
            <div className="mb-2 flex items-center pl-4 md:pl-8 h-8 sm:h-10">
              <span className="text-zinc-600 select-none w-6 -ml-4 md:-ml-8">5 </span> 
              <span className="text-zinc-300 mr-2">role</span>: <span className="text-white ml-2">"</span>
              <div className="relative overflow-hidden h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white font-bold text-lg sm:text-xl whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-white">"</span>,
            </div>
            <div className="mb-2 flex items-start pl-4 md:pl-8">
              <span className="text-zinc-600 select-none w-6 -ml-4 md:-ml-8">6 </span> 
              <div>
                <span className="text-zinc-300">bio</span>: <span className="text-white">`</span><span className="text-zinc-100 font-medium">Dedicated IT student Chandu Bhai S Patel Institute of Technology with hands-on experience in MERN. Interned BITSINFOTECH, enhancing skills in website development.</span><span className="text-white">`</span>,
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <span className="text-zinc-600 select-none w-6">7 </span> {"}"};
            </div>
            <div className="mb-4">
              <span className="text-zinc-600 select-none">8 </span>
            </div>
            <div className="mb-4 flex items-center flex-wrap gap-2">
              <span className="text-zinc-600 select-none w-6">9 </span> <span className="text-white font-bold">await</span> <span className="text-white glow-text">profile</span>.<span className="text-white">init</span>(); 
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-3 h-6 bg-white align-middle ml-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              ></motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-start pl-4 md:pl-8"
            >
              <Button
                onClick={() => window.open("/resume.pdf", "_blank")}
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 hover:scale-105 px-8 py-3 text-sm font-bold tracking-wider uppercase font-sans rounded-none border border-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] cursor-pointer"
              >
                Resume.pdf
              </Button>

              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/DarshanKasundra12"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-black border border-zinc-600 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white cursor-pointer"
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/darshan-kasundra12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-black border border-zinc-600 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white cursor-pointer"
                >
                  <Linkedin size={22} />
                </motion.a>
                <motion.a
                  href="mailto:darshankasundra0@gmail.com"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-black border border-zinc-600 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white cursor-pointer"
                >
                  <Mail size={22} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer p-4"
          onClick={scrollToProjects}
        >
          <ArrowDown className="text-white hover:scale-125 transition-transform" size={32} />
        </motion.div>
      </div>
      
      {/* Glow Effects Styles */}
      <style>{`
        .highlight-glow { text-shadow: 0 0 20px rgba(255,255,255,0.8); }
        .glow-text { text-shadow: 0 0 10px rgba(255,255,255,0.4); }
      `}</style>
    </section>
  );
};

export default Hero;
