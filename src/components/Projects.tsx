import { motion } from "framer-motion";
import { Cloud, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Provider } from "@radix-ui/react-toast";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Eklavya - Modern Learning Management System",
      description: "Eklavya is a full-featured Learning Management System (LMS) providing an exceptional learning experience with course discovery, enrollment, AI-powered examinations, and an interactive UI for students and teachers..",
      image: "/Project Image/EklavyHome.png",
      technologies: ['React',
        'Next.js',
       ' TailwindCSS',
        'TypeScript',
        'Prisma',
        'MySQL',
        'Clerk',
        'Razor Pay',
        'Uploadthing',
        'Vercel'],
      liveUrl: "https://eklavya-lms-z19t.onrender.com//",
      githubUrl: "https://github.com/Kunj-Mori/Eklavya-LMS",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration.But the database is currently no worked.",
      image: "/Project Image/Ecommerce-Home.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://e-commerce-s92u.onrender.com/",
      githubUrl: "https://github.com/DarshanKasundra12/E-Commerce",
      featured: true
    },
    {
      id: 3,
      title: "FitConnect",
      description: "Fit Connect is likely a fitness platform designed to connect Fit.",
      image: "/Project Image/FitConnectApp.png",
      technologies: ['Flutter',
        'Firebase',
        'Provider',
        'Dart'],
      liveUrl: "https://fit-connect-mocha.vercel.app/",
      githubUrl: "https://github.com/DarshanKasundra12/FitConnect",
      featured: true
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
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all duration-300 border-0 dark:border dark:border-gray-700 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
