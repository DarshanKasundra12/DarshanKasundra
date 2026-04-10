import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Heart, GitBranch, TerminalSquare, Command } from "lucide-react";
import MagneticTilt from "./ui/MagneticTilt";

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const isFooterInView = useInView(footerRef, { once: false, amount: 0.45 });
  const transformTimerRef = useRef<number | null>(null);
  const [showBall, setShowBall] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    if (!isFooterInView) {
      if (transformTimerRef.current !== null) {
        window.clearTimeout(transformTimerRef.current);
        transformTimerRef.current = null;
      }
      setShowBall(false);
      return;
    }

    setAnimationCycle((prev) => prev + 1);
    setShowBall(true);

    transformTimerRef.current = window.setTimeout(() => {
      setShowBall(false);
      transformTimerRef.current = null;
    }, 4200);

    return () => {
      if (transformTimerRef.current !== null) {
        window.clearTimeout(transformTimerRef.current);
        transformTimerRef.current = null;
      }
    };
  }, [isFooterInView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/DarshanKasundra12" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/darshan-kasundra12/" },
    { name: "Email", icon: Mail, href: "mailto:darshankasundra0@gmail.com" },
  ];

  return (
    <footer ref={footerRef} className="bg-transparent text-white relative border-t border-slate-800/70 pb-4 pt-10 overflow-hidden">
      <div className="absolute right-3 sm:right-6 bottom-4 sm:bottom-6 z-30 pointer-events-none">
        <AnimatePresence mode="wait">
          {showBall ? (
            <motion.button
              key={`volleyball-${animationCycle}`}
              type="button"
              aria-label="Volleyball intro animation"
              className="h-12 w-12 rounded-full cursor-default shadow-[0_0_24px_rgba(255,193,77,0.45)]"
              initial={{ x: 320, y: -180, scale: 0.82, rotate: -28, opacity: 0 }}
              animate={{
                x: [320, 42, 0, 0, 0, 0, 0, 0, 0, 0],
                y: [-180, 14, 0, -30, 0, -20, 0, -12, 0, -6],
                rotate: [-28, 250, 420, 520, 590, 640, 675, 705, 725, 740],
                scaleX: [0.94, 1.12, 0.96, 1.04, 0.97, 1.02, 0.98, 1, 0.99, 1],
                scaleY: [1.08, 0.86, 1.04, 0.94, 1.02, 0.97, 1.01, 0.99, 1, 1],
                opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              }}
              transition={{
                duration: 2.2,
                times: [0, 0.27, 0.34, 0.52, 0.64, 0.74, 0.83, 0.9, 0.96, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <svg viewBox="0 0 100 100" className="pointer-events-none block h-full w-full" aria-hidden="true">
                <defs>
                  <radialGradient id="vbFill" cx="35%" cy="28%" r="70%">
                    <stop offset="0%" stopColor="#fff8d6" />
                    <stop offset="50%" stopColor="#ffd17d" />
                    <stop offset="100%" stopColor="#f09c33" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#vbFill)" stroke="#ffe7b2" strokeWidth="2.5" />
                <path d="M10 54 C28 45, 40 40, 56 39 C73 38, 86 43, 94 52" fill="none" stroke="#fff9eb" strokeWidth="6" strokeLinecap="round" opacity="0.95" />
                <path d="M17 24 C26 40, 30 56, 30 82" fill="none" stroke="#fff9eb" strokeWidth="6" strokeLinecap="round" opacity="0.92" />
                <path d="M62 14 C71 30, 75 47, 76 76" fill="none" stroke="#fff9eb" strokeWidth="6" strokeLinecap="round" opacity="0.92" />
                <circle cx="38" cy="30" r="11" fill="#fff" opacity="0.22" />
              </svg>
            </motion.button>
          ) : (
            <motion.button
              key={`scroll-top-${animationCycle}`}
              type="button"
              aria-label="Scroll to top"
              onClick={scrollToTop}
              className="pointer-events-auto group flex h-12 items-center gap-2 rounded-full border border-slate-500/70 bg-[#0b121d]/95 px-4 text-xs font-bold uppercase tracking-widest text-zinc-200 shadow-[0_0_24px_rgba(59,226,255,0.22)] transition-colors hover:border-cyan-300/70 hover:text-cyan-200"
              initial={{ scale: 0.55, opacity: 0, rotate: 12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <ArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
              Top
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8 font-mono"
        >
          {/* Main Footer Terminal Window */}
          <div className="rounded-xl border border-slate-700/70 dev-glass dev-card overflow-hidden max-w-2xl mx-auto shadow-[0_0_30px_rgba(59,226,255,0.08)]">
            <div className="flex items-center px-4 py-2 border-b border-slate-700/70 bg-[#0f1520]">
              <div className="flex space-x-1.5 flex-1">
                <div className="w-2 h-2 rounded-full bg-rose-400/60"></div>
                <div className="w-2 h-2 rounded-full bg-amber-300/60"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-300/60"></div>
              </div>
              <div className="flex items-center text-zinc-500 text-[10px] font-bold tracking-wider">
                <TerminalSquare size={10} className="mr-2" />
                <span>footer.tsx</span>
              </div>
              <div className="flex-1"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                <span className="text-cyan-300/70 mr-2">{"//"}</span>
                From keyboard strokes to volleyball spikes
              </h3>
              <p className="text-zinc-500 text-sm">
                I code with precision and play with teamwork
              </p>

              <div className="flex justify-center space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                  <MagneticTilt key={link.name} maxTilt={10} maxOffset={10}>
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#3be2ff", color: "#000" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#080d15] border border-slate-700 rounded-md text-zinc-300 transition-colors duration-300"
                  >
                    <link.icon size={16} />
                    <span className="text-xs uppercase font-bold tracking-wider">{link.name}</span>
                  </motion.a>
                  </MagneticTilt>
                ))}
              </div>
            </div>
          </div>

          {/* VS Code Style Bottom Status Bar */}
          <div className="mt-8 mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-zinc-500 uppercase font-bold tracking-wider bg-[#0f1520] px-4 py-2 rounded-md border border-slate-700/70">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0 hidden sm:flex">
              <span className="flex items-center hover:text-white cursor-pointer transition-colors"><GitBranch size={12} className="mr-1" /> main</span>
              <span className="hover:text-white cursor-pointer transition-colors">UTF-8</span>
              <span className="hover:text-white cursor-pointer transition-colors">React TypeScript</span>
            </div>
            
            <div className="flex items-center text-zinc-400">
              <Command size={12} className="mr-1" />
              <span>2025 Darshan Kasundra</span>
            </div>

            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="mx-1">
                <Heart size={12} className="text-white" fill="white" />
              </motion.div>
              <span>By ME</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
