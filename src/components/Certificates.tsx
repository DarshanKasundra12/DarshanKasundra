
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
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      description: "Advanced React concepts including hooks, context, and performance optimization",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      credentialUrl: "https://coursera.org/verify/cert123",
      skills: ["React", "JavaScript", "Hooks", "Context API"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive full-stack development covering frontend and backend technologies",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      credentialUrl: "https://freecodecamp.org/certification/cert456",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "TypeScript Advanced",
      issuer: "Microsoft",
      date: "2024",
      description: "Advanced TypeScript patterns, generics, and type system mastery",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      credentialUrl: "https://learn.microsoft.com/cert789",
      skills: ["TypeScript", "Advanced Types", "Generics", "Decorators"]
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      issuer: "Google",
      date: "2023",
      description: "User experience design fundamentals and interface design best practices",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
      credentialUrl: "https://grow.google/certificates/ux",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    }
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
              {hoveredCert === cert.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                  onClick={() => setHoveredCert(null)}
                >
                  <motion.div
                    className="relative max-w-2xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-200 text-lg">{cert.issuer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
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
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
          >
            View All Certificates
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
