import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, GitBranch, TerminalSquare, Command } from "lucide-react";
import MagneticTilt from "./ui/MagneticTilt";

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/DarshanKasundra12" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/darshan-kasundra12/" },
    { name: "Email", icon: Mail, href: "mailto:darshankasundra0@gmail.com" },
  ];

  return (
    <footer ref={footerRef} className="bg-transparent text-white relative border-t border-slate-800/70 pb-4 pt-10 overflow-hidden">
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
                From keyboard strokes to polished interactions
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
