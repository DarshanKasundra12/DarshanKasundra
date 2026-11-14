import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorBubble from "@/components/CursorBubble";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress-bar" style={{ scaleX }} />;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [introPhase, setIntroPhase] = useState<"NAME" | "ZOOM" | "COMPLETE">("NAME");

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    // Force scroll to top on refresh
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    
    // Prevent scrolling during intro
    document.body.style.overflow = "hidden";

    // Phase 1: NAME reveal (1.4s)
    const zoomTimer = setTimeout(() => {
      setIntroPhase("ZOOM");
    }, 1400);

    // Phase 2: COMPLETE (0.7s zoom, then seamless reveal)
    const completeTimer = setTimeout(() => {
      setIntroPhase("COMPLETE");
      setActiveSection("home");
      document.body.style.overflow = "auto";
    }, 2100);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "auto";
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (introPhase !== "COMPLETE") return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ["home", "skills", "projects", "certificates", "experience", "about", "contact"];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetHeight = element.offsetHeight;
              
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [introPhase]);

  return (
    <ThemeProvider>
      <div className="bg-[var(--black)] text-white selection:bg-[var(--green)] selection:text-black font-['Outfit'] relative">
        <div className="ambient-orb orb-cyan" />
        <div className="ambient-orb orb-lime" />
        <div className="ambient-orb orb-amber" />
        <div className="noise-overlay" />
        <div className="scanline-overlay" />
        <ScrollProgressBar />
        
        {/* Cinematic Intro: Zero-Lag Zoom Overlay */}
        <AnimatePresence>
          {introPhase !== "COMPLETE" && (
            <motion.div
              key="intro-container"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden pointer-events-auto"
            >
              <div className="relative flex items-center justify-center">
                {/* The Full Name "DARSHAN" */}
                <div className="flex overflow-visible">
                  {/* First Letter 'D' - The portal focus */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      introPhase === "NAME" 
                        ? { opacity: 1, scale: 1, x: 0 } 
                        : { scale: 16, x: "6vw", opacity: [1, 1, 0], transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] } }
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-black text-white uppercase inline-block origin-center z-50 will-change-transform"
                  >
                    D
                  </motion.span>

                  {/* Remaining Letters "ARSHAN" */}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      introPhase === "NAME" 
                        ? { opacity: 1, x: 0 } 
                        : { opacity: 0, x: 80, transition: { duration: 0.3 } }
                    }
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-black text-white uppercase inline-block ml-2 will-change-transform"
                  >
                    ARSHAN
                  </motion.span>
                </div>

                {/* The Cinematic "Line" cut effect */}
                {introPhase === "NAME" && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1.2, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, delay: 0.4, times: [0, 0.5, 1] }}
                    className="h-[2px] bg-white w-screen absolute top-1/2 left-1/2 -translate-x-1/2 z-[60] origin-center"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Interactive Elements */}
        <CursorBubble />
        <Navbar activeSection={activeSection} />
        
        {/* Portfolio Content — Pre-mounted to eliminate post-transition render lag */}
        <div className="relative z-10">
          <div id="home"><Hero isIntroComplete={introPhase === "COMPLETE"} /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="certificates"><Certificates /></div>
          <div id="experience"><Experience /></div>
          <div id="about"><About /></div>
          <div id="contact"><Contact /></div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
