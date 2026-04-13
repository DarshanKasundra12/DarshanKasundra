import { Terminal as TerminalIcon, ShieldCheck, Zap, Code2, Coffee, Command, Cpu, Globe, Rocket, Monitor, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HumanModel from "./HumanModel";
import MagneticTilt from "./ui/MagneticTilt";

const roleText = [
  "Advanced Web Dev",
  "Full Stack Engineer",
  "UI/UX Designer",
  "Cloud Architect",
  "Cybersecurity Enthusiast"
];

const Hero = () => {
  const [role, setRole] = useState(0);
  const [roleFade, setRoleFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => {
        setRole((prev) => (prev + 1) % roleText.length);
        setRoleFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="min-h-screen pt-24 md:pt-28 lg:pt-24 pb-10 lg:pb-12 relative overflow-hidden bg-transparent selection:bg-zinc-800 selection:text-white">
      {/* Background Grid Accent */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a2230_1px,transparent_1px),linear-gradient(to_bottom,#1a2230_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left Column: Terminal & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/45 backdrop-blur-sm text-zinc-300 text-xs font-mono mb-2 shadow-[0_0_16px_rgba(59,226,255,0.15)]"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-300 mr-2 animate-pulse"></span>
                System Protocol: ACTIVE
              </motion.div>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-none tracking-tighter">
                DARSHAN <br />
                <span className="section-title-accent">KASUNDRA</span>
              </h1>
              
              <div className="h-12 flex items-center">
                <AnimatePresence mode="wait">
                  {roleFade && (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xl sm:text-2xl lg:text-3xl font-mono text-cyan-300 font-bold glow-text"
                    >
                      &gt; {roleText[role]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Terminal Window Overlay (Skeleton Aesthetic) */}
            <MagneticTilt className="w-full max-w-2xl rounded-xl">
            <div className="w-full max-w-2xl rounded-xl border border-slate-700/70 dev-glass dev-card overflow-hidden shadow-2xl relative">
              <div className="flex items-center px-4 py-3 border-b border-slate-700/70 bg-[#0d131d]/80">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-rose-400/50 border border-rose-400/25"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-300/60 border border-amber-300/25"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-300/60 border border-cyan-300/30"></div>
                </div>
                <div className="flex-1 text-center text-zinc-400 text-xs font-mono tracking-widest uppercase">
                  bio.sh — 128x64
                </div>
              </div>

              <div className="p-6 font-mono text-sm sm:text-base space-y-4 max-h-[400px] overflow-auto custom-scrollbar">
                <div className="flex items-start space-x-3">
                  <span className="text-zinc-600 shrink-0">01</span>
                  <p className="text-zinc-400"><span className="text-cyan-300">const</span> profile = {'{'}</p>
                </div>
                <div className="flex items-start space-x-3 ml-4">
                  <span className="text-zinc-600 shrink-0">02</span>
                  <p className="text-zinc-300">name: <span className="text-zinc-500">"Darshan Kasundra"</span>,</p>
                </div>
                <div className="flex items-start space-x-3 ml-4">
                  <span className="text-zinc-600 shrink-0">03</span>
                  <p className="text-zinc-300">role: <span className="text-zinc-500">"Full Stack Web Developer"</span>,</p>
                </div>
                <div className="flex items-start space-x-3 ml-4">
                  <span className="text-zinc-600 shrink-0">04</span>
                  <p className="text-zinc-300">location: <span className="text-zinc-500">"Gujarat, India"</span>,</p>
                </div>
                <div className="flex items-start space-x-3 ml-4">
                  <span className="text-zinc-600 shrink-0">05</span>
                  <p className="text-zinc-300">education: <span className="text-zinc-500">"Computer Information Technology"</span></p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-zinc-600 shrink-0">06</span>
                  <p className="text-zinc-400">{'}'};</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-zinc-600 shrink-0">07</span>
                  <p className="text-zinc-500 mt-2">// Pursuing Software Engineering, focused on MERN & Cloud.</p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    onClick={() => window.open("/resume.pdf", "_blank")}
                    size="lg"
                    className="bg-gradient-to-r from-cyan-300 to-lime-300 text-black hover:from-cyan-200 hover:to-lime-200 px-6 py-2 text-xs font-bold tracking-wider uppercase rounded-none border border-cyan-200 transition-all duration-300 shadow-[0_0_18px_rgba(59,226,255,0.35)]"
                  >
                    Resume.pdf
                  </Button>
                  
                  <div className="flex space-x-4">
                    <MagneticTilt maxTilt={12} maxOffset={10}>
                      <a href="https://github.com/DarshanKasundra12" className="block p-2 border border-slate-700 rounded bg-[#0a0f17] hover:bg-cyan-300 hover:text-black transition-colors"><Github size={18} /></a>
                    </MagneticTilt>
                    <MagneticTilt maxTilt={12} maxOffset={10}>
                      <a href="https://www.linkedin.com/in/darshan-kasundra12/" className="block p-2 border border-slate-700 rounded bg-[#0a0f17] hover:bg-cyan-300 hover:text-black transition-colors"><Linkedin size={18} /></a>
                    </MagneticTilt>
                  </div>
                </div>
              </div>
            </div>
            </MagneticTilt>
          </motion.div>

          {/* Right Column: 3D Model Viewer — Responsive & Luxury Flow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative lg:h-[min(68vh,560px)] flex items-center justify-center order-first lg:order-last mb-8 lg:mb-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-3xl rounded-full scale-75 -z-10"></div>
            
            {/* The 3D container is scaled for mobile and large screens */}
            <div className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[460px]">
              <HumanModel />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer z-50 p-4"
          onClick={() => {
            const nextSec = document.getElementById("skills");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="text-zinc-500 hover:text-cyan-300 transition-colors" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
