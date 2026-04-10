import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import ThemeVariantSwitch from "./ThemeVariantSwitch";

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home", file: "index.tsx" },
    { id: "skills", label: "Skills", file: "skills.json" },
    { id: "projects", label: "Projects", file: "projects.ts" },
    { id: "certificates", label: "Certificates", file: "certs.md" },
    { id: "experience", label: "Experience", file: "history.log" },
    { id: "about", label: "About", file: "whoami.sh" },
    { id: "contact", label: "Contact", file: "ping.exe" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      if (sectionId === "hero" || sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = window.innerWidth < 768 ? 70 : 60;
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 10);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "dev-glass shadow-[0_8px_32px_rgba(0,0,0,0.45)] border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo / Prompt */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 font-bold cursor-pointer select-none group"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="/logo.svg" 
              alt="Darshan Kasundra Logo" 
              className="h-24 w-auto drop-shadow-[0_0_12px_rgba(59,226,255,0.35)] group-hover:drop-shadow-[0_0_30px_rgba(59,226,255,0.75)] transition-all duration-300"
            />
            {/* <span className="text-white font-mono font-bold tracking-wider text-sm hidden sm:inline">
              Darshan<span className="text-zinc-500">.dev</span>
            </span> */}
          </motion.div>

          {/* Desktop IDE Tabs Navigation */}
          <div className="hidden lg:flex items-end h-full pt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors duration-200 border-x border-t rounded-t-lg mx-[1px] ${
                    isActive
                      ? "bg-[#0f1720] border-slate-700/70 text-white shadow-[0_-5px_24px_rgba(59,226,255,0.15)] z-10"
                      : "bg-[#05070d] border-transparent text-zinc-500 hover:bg-[#0c1119] hover:text-zinc-200 z-0"
                  }`}
                >
                  <span className={`${isActive ? 'text-cyan-300/80' : 'text-zinc-600'}`}>.{item.file.split('.')[1]}</span>
                  {item.label}
                  
                  {/* Subtle active line indicator at top of tab */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-300 via-lime-300 to-amber-300 shadow-[0_0_16px_rgba(59,226,255,0.8)] rounded-t-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {/* Bottom border cover when active to blend with body */}
                  {isActive && (
                    <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#111]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeVariantSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-slate-700 rounded bg-[#0d131d] text-zinc-300 hover:text-cyan-300 transition-colors duration-200"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center pl-3">
            <ThemeVariantSwitch />
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden dev-glass border border-slate-700/70 rounded-lg mt-2 shadow-2xl absolute left-4 right-4 z-50 origin-top"
            >
              <div className="p-2 space-y-1">
                <div className="px-3 py-2 text-[10px] text-zinc-500 uppercase font-bold tracking-widest border-b border-slate-800/70 mb-2 select-none">
                  Explorer: Portfolio
                </div>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left flex items-center px-3 py-2 rounded text-xs tracking-wider transition-colors duration-200 ${
                        isActive
                          ? "bg-[#111927] text-white border-l-2 border-cyan-300"
                          : "text-zinc-400 hover:bg-[#0f1520] hover:text-zinc-200 border-l-2 border-transparent"
                      }`}
                    >
                      <ChevronRight size={14} className={`mr-2 transition-transform ${isActive ? "rotate-90 text-cyan-300" : "text-zinc-600"}`} />
                      <span className={`mr-2 ${isActive ? 'text-cyan-300/80' : 'text-zinc-600'}`}>.{item.file.split('.')[1]}</span>
                      {item.file}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile blur overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden mt-16"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
