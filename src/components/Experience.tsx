import { motion } from "framer-motion";

const experiences = [
  {
    company: "AIGETAI",
    role: "Backend  Developer Internship",
    period: "May 2025 - Aug 2025",
    description: "Developed scalable backend APIs with Node.js, Express, and Mongoose, designed dynamic MongoDB schemas for various application features, and built admin-side CRUD operations with a chat-based support system."
  },
  {
    company: "BITSINFOTECH ",
    role: "MERN Developer Internship",
    period: "May 2024 - July 2024",
    description: "Contributed to the development and optimization of a MERN stack website by designing user-friendly React interfaces and resolving software issues."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            My professional work and internship journey
          </p>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">{exp.role}</h3>
                <p className="text-gray-900 dark:text-white font-medium mb-1">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
