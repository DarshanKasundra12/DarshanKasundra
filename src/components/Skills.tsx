
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Zap,
  GitBranch,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "React & Next.js",
      icon: Code2,
      description: "Building modern, scalable web applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "TypeScript",
      icon: Code2,
      description: "Type-safe development for robust applications",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Creating beautiful, intuitive user interfaces",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Responsive Design",
      icon: Smartphone,
      description: "Mobile-first, cross-device compatibility",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Web Performance",
      icon: Zap,
      description: "Optimizing for speed and user experience",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Modern CSS",
      icon: Monitor,
      description: "Tailwind CSS, CSS Grid, Flexbox, Animations",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "APIs & Backend",
      icon: Database,
      description: "RESTful APIs, GraphQL, and database integration",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Version Control",
      icon: GitBranch,
      description: "Git workflows and collaborative development",
      color: "from-gray-500 to-slate-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Skills & 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
            >
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
