import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certificates = [
    {
      id: 1,
      title: "AWS Academy Graduate - AWS Academy Cloud Developing",
      issuer: "AWS Academy",
      date: "March 31, 2025",
      description: "Foundational knowledge of cloud computing and AWS services",
      image: "AWS_Darshan-1.jpg",
      credentialUrl: "https://www.credly.com/badges/fbed93dd-8d78-4729-839c-bae704f1250d/",
      skills: ["AWS", "Cloud Computing", "Cloud Development", "Web Services"]
    },
    {
      id: 2,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "February 21, 2025",
      description: "Comprehensive web design principles, HTML, CSS, and responsive design techniques",
      image: "Freecodecamp-Responsive Web Design-1.jpg",
      credentialUrl: "https://www.freecodecamp.org/certification/DarshanKasundra/responsive-web-design",
      skills: ["Operating Systems", "Kernel Architecture", "Process Management", "Memory Management"]
    },
    {
      id: 3,
      title: "Windows Forensics with Belkasoft",
      issuer: "Belkasoft",
      date: "February 5, 2025",
      description: "Comprehensive training in Windows forensics using Belkasoft tools",
      image: "Belkasoft- 2025-02-05-1.jpg",
      credentialUrl: "",
      skills: ["Windows Forensics", "Digital Forensics", "Belkasoft", "Cybersecurity"]
    },
    {
      id: 4,
      title: "Advance Course",
      issuer: "Code Unnati",
      date: "2024 - 2025",
      description: "Machine Learning, Internet of Things, Deep Learning",
      image: "CodeUnnati-Darshan-1.jpg",
      credentialUrl: "",
      skills: ["Machine Learning", "Internet of Things", "Deep Learning", "Data Science"]
    },
    {
      id: 5,
      title: "Docker Training Course for the Absolute Beginner",
      issuer: "KodeKloud",
      date: "September 09, 2024",
      description: "Comprehensive introduction to Docker, containerization, and deployment",
      image: "docker-1.jpg",
      credentialUrl: "https://learn.kodekloud.com/user/certificate/feaa822c-e83d-4d73-a61b-656f9aa9a3ff",
      skills: ["Docker", "Containerization", "Deployment", "DevOps"]
    },
    {
      id: 6,
      title: "Ethical Hacking",
      issuer: "NPTEL",
      date: "Jul-Oct 2024",
      description: "Advanced concepts in ethical hacking, penetration testing, and security assessment",
      image: "NPTEL-EH.png",
      credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S45730049603986208",
      skills: ["Ethical Hacking", "Penetration Testing", "Cybersecurity", "Network Security"]
    },
    {
      id: 7,
      title: "Operating Systems Fundamentals",
      issuer: "NPTEL",
      date: "Jul-Oct 2024",
      description: "Core concepts of operating systems, including process management and memory management",
      image: "NPTEL-OS.png",
      credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS108S55730028203986208",
      skills: ["Operating Systems", "Kernel Architecture", "Process Management", "Memory Management"]
    },
    {
      id: 8,
      title: "Google Cloud Cybersecurity Career Launchpad program",
      issuer: "Google Cloud",
      date: "Jul-Oct 2024",
      description: "Comprehensive cybersecurity training program covering cloud security fundamentals",
      image: "Google Cloud Career Launchpad Certificate - myff0MWZ - Darshan Kasundra-1.jpg",
      credentialUrl: "https://www.credly.com/badges/97dfd8de-afcd-4d7c-93d6-af669a7a71e8",
      skills: ["Google Cloud", "Cybersecurity", "Cloud Security", "Network Security"]
    },
    {
      id: 9,
      title: "Google UX Design",
      issuer: "Google-Coursera",
      date: "February 29, 2024",
      description: "Foundational UX design principles, user research, and prototyping",
      image: "Google Ux Design-1.jpg",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/JZP2NZY39ZAQ",
      skills: ["UX Design", "User Research", "Prototyping", "Design Thinking"]
    },
    {
      id: 10,
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB University",
      date: "March 2, 2024",
      description: "Foundational data analytics skills, including data visualization and analysis",
      image: "MongoDB Certificates-1.jpg",
      credentialUrl: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/849c144d-5416-4a9c-ab31-ab6dd5c80b07-d23it188-kasundra-darshan-chetanbhai-faa5cbab-ecc5-4f40-ac52-46421a9bca2f-certificate.pdf",
      skills: ["MongoDB", "Node.js", "Database Development", "Web Development"]
    },
    {
      id: 11,
      title: "Java Basics",
      issuer: "HackerRank",
      date: "Octomber 19, 2024",
      description: "Foundational Java programming skills, including syntax, data types, and control structures",
      image: "Java-Hackerrank.png",
      credentialUrl: "https://www.hackerrank.com/certificates/69dcb3409a72",
      skills: ["Java", "Programming", "Data Structures", "Algorithms"]
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Certificates &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Professional certifications and continuous learning achievements
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
              whileHover={{ y: -5 }}
              className="group relative"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all duration-300 border-0 dark:border dark:border-gray-700 h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-all duration-500"
                    animate={{
                      scale: hoveredCert === cert.id ? 1.2 : 1,
                      filter: hoveredCert === cert.id ? "brightness(1.1)" : "brightness(1)"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <Award size={12} />
                      Certified
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full"
                      asChild
                    >
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 transition-colors duration-300">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 transition-colors duration-300">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enlarged image overlay when hovered */}
              {hoveredCert === cert.id && cert.title === "Advance Course" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                  onClick={() => setHoveredCert(null)}
                >
                  <motion.div
                    className="relative max-w-2xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl bg-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Credential icon in overlay */}
                    <div className="absolute top-4 right-4 z-10">
                      {cert.credentialUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full"
                          asChild
                        >
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={20} />
                          </a>
                        </Button>
                      )}
                    </div>
                    <img
                      src={cert.image || '/placeholder.svg'}
                      alt={cert.title}
                      className="max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-200 text-lg">{cert.issuer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ) : hoveredCert === cert.id ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                  onClick={() => setHoveredCert(null)}
                >
                  <motion.div
                    className="relative max-w-2xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl bg-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Credential icon in overlay */}
                    <div className="absolute top-4 right-4 z-10">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full"
                        asChild
                      >
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                        </a>
                      </Button>
                    </div>
                    {cert.image && cert.image.toLowerCase().endsWith('.pdf') ? (
                      <iframe
                        src={cert.image}
                        title={cert.title}
                        className="w-[80vw] h-[80vh] bg-gray-100"
                        style={{ border: 0 }}
                      />
                    ) : (
                      <img
                        src={cert.image || '/placeholder.svg'}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-200 text-lg">{cert.issuer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
          >
            View All Certificates
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
