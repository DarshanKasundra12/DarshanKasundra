import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Rocket, Code, Layers, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { label: "Experience", value: "6 Month", icon: Calendar },
    { label: "Projects Built", value: "8+", icon: Code },
    { label: "Tech Stack", value: "12+", icon: Layers },
    { label: "Client Deliveries", value: "1", icon: Rocket },
    { label: "Team Activities", value: "Volley Enthusiast", icon: Users },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Fueled by code, driven by gameplay — I build with logic and play
            with passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Hello! I'm Darshan Kasundra
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify transition-colors duration-300">
                I'm an enthusiastic web developer with hands-on experience in
                the MERN stack, including MongoDB, Express.js, React, and
                Node.js. Over the past few months, I've built dynamic web
                applications that reflect my growing knowledge in JavaScript,
                HTML/CSS, SQL, Supabase, Git, Docker, and more.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify transition-colors duration-300">
                While my professional journey is just beginning, my dedication
                to writing clean, efficient code and learning best practices
                drives me forward every day. I enjoy tackling real-world
                problems and transforming ideas into user-friendly, responsive
                interfaces.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify transition-colors duration-300">
                Beyond the keyboard, I love playing volleyball — it's more than
                a sport to me. It's a team game that requires communication,
                trust, and coordination — the same values I bring into my
                development workflow when collaborating with others.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <MapPin size={20} className="text-blue-600" />
                <span>Ahmedabad, GUJ</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <Calendar size={20} className="text-blue-600" />
                <span>Available for projects</span>
              </div>
            </div>

            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="Darshan.png"
                alt="Darshan Kasundra Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center group min-w-[140px]"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-all duration-300">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
