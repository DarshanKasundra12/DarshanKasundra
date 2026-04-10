import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Calendar, Terminal, X, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import MagneticTilt from "./ui/MagneticTilt";

const Certificates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [46, -46]);

  const [activeCert, setActiveCert] = useState<number | null>(null);

  const certificates = [
    {
      id: 1, title: "AWS Academy Graduate - AWS Academy Cloud Developing", issuer: "AWS Academy", date: "March 31, 2025",
      description: "Foundational knowledge of cloud computing and AWS services", image: "AWS_Darshan-1.jpg",
      credentialUrl: "https://www.credly.com/badges/fbed93dd-8d78-4729-839c-bae704f1250d/", skills: ["AWS", "Cloud Computing"]
    },
    {
      id: 2, title: "Responsive Web Design", issuer: "freeCodeCamp", date: "February 21, 2025",
      description: "Comprehensive web design principles, HTML, CSS", image: "Freecodecamp-Responsive Web Design-1.jpg",
      credentialUrl: "https://www.freecodecamp.org/certification/DarshanKasundra/responsive-web-design", skills: ["HTML", "CSS"]
    },
    {
      id: 3, title: "Windows Forensics with Belkasoft", issuer: "Belkasoft", date: "February 5, 2025",
      description: "Comprehensive training in Windows forensics using Belkasoft tools", image: "Belkasoft- 2025-02-05-1.jpg",
      credentialUrl: "", skills: ["Windows Forensics", "Belkasoft"]
    },
    {
      id: 4, title: "Advance Course", issuer: "Code Unnati", date: "2024 - 2025",
      description: "Machine Learning, Internet of Things, Deep Learning", image: "CodeUnnati-Darshan-1.jpg",
      credentialUrl: "", skills: ["Machine Learning", "IoT", "Deep Learning"]
    },
    {
      id: 5, title: "Docker Training Course", issuer: "KodeKloud", date: "September 09, 2024",
      description: "Comprehensive introduction to Docker", image: "docker-1.jpg",
      credentialUrl: "https://learn.kodekloud.com/user/certificate/feaa822c-e83d-4d73-a61b-656f9aa9a3ff", skills: ["Docker", "Containers"]
    },
    {
      id: 6, title: "Ethical Hacking", issuer: "NPTEL", date: "Jul-Oct 2024",
      description: "Advanced concepts in ethical hacking, penetration testing", image: "NPTEL-EH.png",
      credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S45730049603986208", skills: ["Ethical Hacking", "Security"]
    },
    {
      id: 7, title: "Operating Systems Fundamentals", issuer: "NPTEL", date: "Jul-Oct 2024",
      description: "Core concepts of operating systems, process management", image: "NPTEL-OS.png",
      credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS108S55730028203986208", skills: ["Operating Systems", "Kernel"]
    },
    {
      id: 8, title: "Google Cloud Cybersecurity", issuer: "Google Cloud", date: "Jul-Oct 2024",
      description: "Comprehensive cybersecurity training program", image: "Google Cloud Career Launchpad Certificate - myff0MWZ - Darshan Kasundra-1.jpg",
      credentialUrl: "https://www.credly.com/badges/97dfd8de-afcd-4d7c-93d6-af669a7a71e8", skills: ["Google Cloud", "Cybersecurity"]
    },
    {
      id: 9, title: "Google UX Design", issuer: "Google-Coursera", date: "February 29, 2024",
      description: "Foundational UX design principles", image: "Google Ux Design-1.jpg",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/JZP2NZY39ZAQ", skills: ["UX Design", "Research"]
    },
    {
      id: 10, title: "MongoDB Node.js Developer Path", issuer: "MongoDB University", date: "March 2, 2024",
      description: "Foundational data analytics skills, including data visualization", image: "MongoDB Certificates-1.jpg",
      credentialUrl: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/849c144d-5416-4a9c-ab31-ab6dd5c80b07-d23it188-kasundra-darshan-chetanbhai-faa5cbab-ecc5-4f40-ac52-46421a9bca2f-certificate.pdf", skills: ["MongoDB", "Node.js"]
    },
    {
      id: 11, title: "Java Basics", issuer: "HackerRank", date: "October 19, 2024",
      description: "Foundational Java programming skills", image: "Java-Hackerrank.png",
      credentialUrl: "https://www.hackerrank.com/certificates/69dcb3409a72", skills: ["Java", "Programming"]
    }
  ];

  return (
    <section id="certificates" ref={sectionRef} className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 font-mono"
        >
          <div className="flex items-center gap-4 text-zinc-500 text-sm mb-4">
            <span className="px-2 py-0.5 border border-slate-700 rounded bg-[#0a0f17]">~/credentials</span>
            <div className="h-[1px] flex-1 bg-zinc-900"></div>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
            PROFESSIONAL <br />
            <span className="section-title-accent uppercase">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {certificates.map((cert) => {
            const isPreviewing = activeCert === cert.id;
            
            return (
              <MagneticTilt key={cert.id} className="rounded-xl">
              <motion.div
                key={cert.id}
                layout
                className={`relative group rounded-xl border ${isPreviewing ? 'border-cyan-300/70 shadow-[0_0_50px_rgba(59,226,255,0.15)]' : 'border-slate-700/70'} dev-glass dev-card overflow-hidden flex flex-col transition-all duration-500`}
                onClick={() => !isPreviewing && setActiveCert(cert.id)}
              >
                {/* Terminal Styled Header */}
                <div className="flex items-center px-4 py-3 border-b border-slate-700/70 bg-[#0f1520] justify-between">
                  <div className="flex space-x-2">
                    {isPreviewing ? (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveCert(null); }}
                        className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition-transform"
                      />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-rose-400/60" />
                    )}
                    <div className="w-3 h-3 rounded-full bg-amber-300/60" />
                    <div className="w-3 h-3 rounded-full bg-cyan-300/60" />
                  </div>
                  <div className="text-zinc-600 text-[10px] font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                    {isPreviewing ? <Search size={10} /> : <FileText size={10} />}
                    {cert.title.slice(0, 20)}...
                  </div>
                </div>

                {/* Preview Content Area — "Only in that space" */}
                <div 
                  className={`relative overflow-hidden transition-all duration-500 ease-in-out ${isPreviewing ? 'h-[400px] sm:h-[500px]' : 'h-56'}`}
                >
                  <AnimatePresence mode="wait">
                    {isPreviewing ? (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full bg-[#030303] flex flex-col"
                      >
                        <div className="flex-1 overflow-hidden p-2 sm:p-4 flex items-center justify-center">
                          {cert.image.toLowerCase().endsWith('.pdf') ? (
                            <iframe
                              src={cert.image}
                              className="w-full h-full bg-white rounded-sm"
                              style={{ border: 0 }}
                            />
                          ) : (
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain rounded-sm shadow-2xl"
                            />
                          )}
                        </div>
                        <div className="p-4 bg-[#0a0a0a] border-t border-zinc-900 flex justify-between items-center">
                          <span className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest">[Preview Mode]</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-zinc-400 hover:text-white text-[10px] uppercase font-bold tracking-widest"
                            onClick={(e) => { e.stopPropagation(); setActiveCert(null); }}
                          >
                            <X size={14} className="mr-2" /> Close
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full group"
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 flex items-center justify-center">
                          <span className="px-4 py-2 border border-zinc-700 bg-black/80 text-white font-mono text-xs uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Expand Preview
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Details Section */}
                {!isPreviewing && (
                  <div className="p-6 font-mono flex flex-col flex-grow bg-[#050505] border-t border-zinc-900/50">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-white pr-4">
                        {cert.title}
                      </h3>
                      <div className="flex items-center text-zinc-600 text-[10px] whitespace-nowrap pt-1">
                        <Calendar size={10} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>
                    
                    <p className="text-[#4ade80] font-bold mb-3 uppercase text-[10px] tracking-widest">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 border border-zinc-800 text-zinc-500 text-[9px] uppercase font-bold rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
              </MagneticTilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
