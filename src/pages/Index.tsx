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
import CustomScrollbar from "@/components/CustomScrollbar";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress-bar" style={{ scaleX }} />;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [introPhase, setIntroPhase] = useState<"NAME" | "ZOOM" | "COMPLETE">("NAME");

  useEffect(() => {
    // Force scroll to top on refresh
    window.scrollTo(0, 0);
    
    // Prevent scrolling during intro
    document.body.style.overflow = "hidden";

    // Phase 1: NAME reveal (2.2s)
    const zoomTimer = setTimeout(() => {
      setIntroPhase("ZOOM");
    }, 2200);

    // Phase 2: ZOOM transition (1s)
    const completeTimer = setTimeout(() => {
      setIntroPhase("COMPLETE");
      setActiveSection("home");
      // Re-enable scrolling after intro
      document.body.style.overflow = "auto";
    }, 3200);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (introPhase !== "COMPLETE") return;

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [introPhase]);

  return (
    <ThemeProvider>
      <div className="bg-[var(--black)] text-white selection:bg-[var(--green)] selection:text-black font-['Outfit'] relative">
        <div className="noise-overlay" />
        <ScrollProgressBar />
        
        {/* Cinematic Framer Motion Intro: Zoom-into-D */}
        <AnimatePresence mode="wait">
          {introPhase !== "COMPLETE" && (
            <motion.div
              key="intro-container"
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
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
                        : { scale: 80, x: "10vw", opacity: [1, 1, 0], transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-black text-white uppercase inline-block origin-center z-50"
                  >
                    D
                  </motion.span>

                  {/* Remaining Letters "ARSHAN" - they fly away during zoom */}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      introPhase === "NAME" 
                        ? { opacity: 1, x: 0 } 
                        : { opacity: 0, x: 100, transition: { duration: 0.4 } }
                    }
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-black text-white uppercase inline-block ml-2"
                  >
                    ARSHAN
                  </motion.span>
                </div>

                {/* The Cinematic "Line" cut effect from Phase 1 */}
                {introPhase === "NAME" && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1.2, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: 0.6, times: [0, 0.5, 1] }}
                    className="h-[2px] bg-white w-screen absolute top-1/2 left-1/2 -translate-x-1/2 z-[60] origin-center"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio Content — Zooms "OUT" from the D portal reveal */}
        <AnimatePresence>
          {introPhase === "COMPLETE" && (
            <>
              {/* These components must be outside the scaled/filtered container to remain fixed to the viewport */}
              <CursorBubble />
              <Navbar activeSection={activeSection} />
              
              <motion.div
                initial={{ scale: 1.5, opacity: 0, filter: "blur(20px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <div id="home"><Hero /></div>
                <div id="skills"><Skills /></div>
                <div id="projects"><Projects /></div>
                <div id="certificates"><Certificates /></div>
                <div id="experience"><Experience /></div>
                <div id="about"><About /></div>
                <div id="contact"><Contact /></div>
                
                <Footer />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default Index;
