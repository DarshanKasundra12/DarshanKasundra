import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal,
  FileCode2,
  Briefcase,
  Layers,
  Award,
  User,
  Send,
  Sparkles
} from "lucide-react";
import ThemeVariantSwitch from "./ThemeVariantSwitch";

interface NavbarProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
  file: string;
  icon: typeof Terminal;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", file: "index.tsx", icon: Terminal },
  { id: "skills", label: "Skills", file: "skills.json", icon: Layers },
  { id: "projects", label: "Projects", file: "projects.ts", icon: FileCode2 },
  { id: "certificates", label: "Certs", file: "certs.md", icon: Award },
  { id: "experience", label: "Experience", file: "history.log", icon: Briefcase },
  { id: "about", label: "About", file: "whoami.sh", icon: User },
  { id: "contact", label: "Contact", file: "ping.exe", icon: Send },
];

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      if (sectionId === "hero" || sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = window.innerWidth < 1024 ? 76 : 80;
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 40);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-[#060a12]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)] py-2 sm:py-2.5"
          : "bg-transparent border-b border-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center cursor-pointer select-none group"
              onClick={() => scrollToSection("home")}
              aria-label="Darshan Kasundra Home"
            >
              <img 
                src="/logo.svg" 
                alt="Darshan Kasundra Logo" 
                className="h-10 sm:h-11 md:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(59,226,255,0.35)] group-hover:drop-shadow-[0_0_24px_rgba(59,226,255,0.7)] transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* Center: Sleek Floating Pill Navigation (Modern Developer Dock) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-1 p-1 rounded-full bg-[#080d17]/85 backdrop-blur-xl border border-slate-700/60 shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide transition-all duration-200 select-none whitespace-nowrap ${
                      isActive
                        ? "text-cyan-300 font-bold"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Active Sliding Glowing Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full bg-cyan-950/70 border border-cyan-400/50 shadow-[0_0_16px_rgba(6,182,212,0.3)] z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Button Text with Active Dot */}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      )}
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Controls (Resume CTA & Theme Switcher) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Darshan_Kasundra_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-400/40 bg-cyan-950/30 hover:bg-cyan-900/40 hover:border-cyan-300 text-cyan-300 text-xs font-mono font-semibold tracking-wider transition-all duration-200 shadow-[0_0_12px_rgba(6,182,212,0.15)] group"
              title="Download 2-Page Resume PDF"
            >
              <Download size={13} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </a>

            <ThemeVariantSwitch />
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeVariantSwitch />

            {/* Cyber Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`p-2 border rounded-lg transition-all duration-200 ${
                isOpen
                  ? "border-cyan-400/80 bg-cyan-950/50 text-cyan-300 shadow-[0_0_14px_rgba(6,182,212,0.35)]"
                  : "border-slate-800 bg-[#090e17] text-zinc-300 hover:text-white hover:border-slate-700"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden absolute top-[calc(100%+8px)] left-3 right-3 sm:left-6 sm:right-6 z-50 overflow-hidden bg-[#070b14]/95 backdrop-blur-2xl border border-slate-700/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            >
              {/* Explorer Header */}
              <div className="px-4 py-3 bg-[#0a101c]/90 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="font-bold text-white tracking-wider">~/darshan/portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500 font-mono">git:(portfolio)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-2 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wide transition-all duration-150 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-950/60 to-transparent text-white border-l-2 border-cyan-400 pl-3 shadow-inner"
                          : "text-zinc-400 hover:bg-[#0c121e] hover:text-white border-l-2 border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon 
                          size={15} 
                          className={isActive ? "text-cyan-400" : "text-zinc-500"} 
                        />
                        <span className={`font-semibold ${isActive ? "text-cyan-300" : "text-zinc-300"}`}>
                          {item.label}
                        </span>
                      </div>

                      <span className="text-[10px] text-zinc-600 font-mono shrink-0">
                        {item.file}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Quick Actions Bar */}
              <div className="p-3 bg-[#05080f]/90 border-t border-slate-800/80 space-y-2 font-mono">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Darshan_Kasundra_Resume.pdf"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 text-xs font-bold transition-all shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                  >
                    <Download size={14} />
                    <span>Resume.pdf</span>
                  </a>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-slate-700 bg-[#0d1422] hover:bg-[#121c30] text-zinc-200 text-xs font-bold transition-all"
                  >
                    <Mail size={14} className="text-cyan-400" />
                    <span>Say Hello</span>
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 px-1 text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Ahmedabad, IN (IST)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://github.com/DarshanKasundra12" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github size={14} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/darshan-kasundra12" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Fullscreen Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
