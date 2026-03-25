import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { label: "Experience", value: "6 Month" },
    { label: "Projects Built", value: "8+" },
    { label: "Tech Stack", value: "12+" },
    { label: "Client Deliveries", value: "1" },
  ];

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-mono"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-zinc-500">whoami | </span>AboutMe
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mt-4">
            // Fueled by code, driven by strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main IDE Markdown Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 xl:col-span-8 rounded-xl border border-zinc-800 bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col"
          >
            <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#111]">
              <div className="flex space-x-1.5 flex-1">
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-500"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
              </div>
              <div className="flex items-center text-zinc-500 text-xs font-mono font-bold tracking-wider">
                <Terminal size={12} className="mr-2" />
                <span>vim about_me.md</span>
              </div>
              <div className="flex-1"></div>
            </div>
            
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed text-zinc-400 flex-1 flex flex-col justify-center">
              <div className="flex">
                <span className="text-zinc-700 select-none mr-4">1</span>
                <span><span className="text-white font-bold"># Hello! I'm Darshan Kasundra</span></span>
              </div>
              <div className="flex"><span className="text-zinc-700 select-none mr-4">2</span><span></span></div>
              <div className="flex">
                <span className="text-zinc-700 select-none mr-4">3</span>
                <span>I'm an enthusiastic web developer with hands-on experience in the MERN stack, including MongoDB, Express.js, React, and Node.js. Over the past few months, I've built dynamic web applications that reflect my growing knowledge in JavaScript, HTML/CSS, SQL, Supabase, Git, Docker, and more.</span>
              </div>
              <div className="flex"><span className="text-zinc-700 select-none mr-4">4</span><span></span></div>
              <div className="flex">
                <span className="text-zinc-700 select-none mr-4">5</span>
                <span>While my professional journey is just beginning, my dedication to writing clean, efficient code and learning best practices drives me forward every day. I enjoy tackling real-world problems and transforming ideas into user-friendly interfaces.</span>
              </div>
              <div className="flex"><span className="text-zinc-700 select-none mr-4">6</span><span></span></div>
              <div className="flex">
                <span className="text-zinc-700 select-none mr-4">7</span>
                <span>Off the screen, I carry the same focus and teamwork built from playing structured strategies back into my development workflow. I thrive inside collaborative coding environments where communication and logic prevail.</span>
              </div>
              <div className="flex"><span className="text-zinc-700 select-none mr-4">8</span><span></span></div>
              
              <div className="mt-8 flex flex-wrap gap-4 pl-6">
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin size={16} className="text-white" />
                  <span>Ahmedabad, GUJ</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Calendar size={16} className="text-white" />
                  <span>Available for projects</span>
                </div>
              </div>

              <div className="mt-8 pl-6">
                <Button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 border border-white font-mono uppercase text-xs font-bold tracking-wider rounded-none shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300"
                >
                  <Download size={16} className="mr-2" /> Download Resume
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture and 4 Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6"
          >
            {/* Profile Picture Box */}
            <div className="relative rounded-xl border border-zinc-800 bg-[#050505] overflow-hidden group shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center w-full flex-shrink-0 flex-1">
              <div className="relative w-full flex justify-center py-4 h-full items-center">
                <img
                  src="Darshan.png"
                  alt="Darshan Kasundra Profile"
                  className="w-full max-w-md h-auto max-h-[400px] object-contain transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 border border-zinc-800 rounded font-mono text-zinc-400 text-xs backdrop-blur-sm z-10 transition-opacity duration-300">
                profile.png
              </div>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 flex-shrink-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 rounded-xl border border-zinc-800 bg-[#0a0a0a] flex flex-col items-center justify-center font-mono hover:bg-[#111] transition-colors duration-300 text-center shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 shadow-white">
                    {stat.value}
                  </div>
                  <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest text-center leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
