import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Calendar, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const activeCert = certificates.find(c => c.id === hoveredCert);

  return (
    <section id="certificates" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-mono"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-zinc-500">sudo get </span>
            Certificates
            <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-4 h-8 bg-white ml-2 align-middle"></motion.span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mt-4">
            // Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
              className="group relative rounded-xl border border-zinc-800 bg-[#0a0a0a] overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
              onClick={() => setHoveredCert(cert.id)}
            >
              <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-[#111]">
                <div className="flex space-x-1.5 flex-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-400"></div>
                </div>
                <div className="flex items-center text-zinc-500 text-[10px] font-mono font-bold tracking-wider">
                  <Terminal size={10} className="mr-2" />
                  <span>cert_{cert.id}.pdf</span>
                </div>
                <div className="flex-1 text-right text-zinc-600 text-[10px] uppercase font-bold tracking-widest hidden sm:block">
                  [Click to preview]
                </div>
              </div>

              <div className="relative overflow-hidden border-b border-zinc-800 bg-[#000]">
                <motion.div
                  className="w-full h-48 bg-zinc-900 border-b border-zinc-800 flex items-center justify-center relative overflow-hidden"
                >
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-black/80 px-4 py-2 rounded text-white font-mono text-sm border border-zinc-800">Preview .pdf</span>
                  </div>
                </motion.div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-sm uppercase font-mono flex items-center gap-1 shadow-lg">
                    <Award size={12} /> Certified
                  </span>
                </div>
                
                {cert.credentialUrl && (
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-black text-white hover:bg-white hover:text-black border border-white font-mono uppercase text-xs font-bold"
                      asChild
                    >
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={16} className="mr-2" /> View
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col font-mono">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors duration-300 pr-4">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-zinc-500 text-xs whitespace-nowrap">
                    <Calendar size={12} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <p className="text-zinc-400 font-bold mb-3 uppercase text-xs tracking-wider">
                  {cert.issuer}
                </p>
                <p className="text-zinc-500 mb-4 flex-grow text-sm">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-400 text-[10px] uppercase font-bold rounded hover:bg-white hover:text-black transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enlarged image overlay when clicked */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setHoveredCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-zinc-800 bg-black flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Header for Modal */}
              <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#111] shrink-0">
                <div className="flex space-x-2">
                  <button onClick={() => setHoveredCert(null)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-inner"></button>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="flex-1 text-center text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase">
                  preview_{activeCert.id}.png
                </div>
                <div className="w-12 text-right">
                  {activeCert.credentialUrl && (
                    <a href={activeCert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors inline-block">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex-1 overflow-auto bg-[#0a0a0a] flex items-center justify-center p-4">
                {activeCert.image && activeCert.image.toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={activeCert.image}
                    title={activeCert.title}
                    className="w-full h-[70vh] bg-white rounded shadow-inner"
                    style={{ border: 0 }}
                  />
                ) : (
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  />
                )}
              </div>
              
              <div className="shrink-0 border-t border-zinc-800 bg-[#111] p-4 text-center font-mono flex flex-col">
                <h3 className="text-white text-lg font-bold glow-text">{activeCert.title}</h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold">{activeCert.issuer}</p>
                <div className="mt-2 text-zinc-600 text-xs tracking-widest">
                  [Click outside or press Red button to close]
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
