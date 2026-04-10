import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import MagneticTilt from "./ui/MagneticTilt";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast({
        title: "Empty Message",
        description: "Please enter a message to start the chat.",
        variant: "destructive"
      });
      return;
    }
    const phoneNumber = "6351027968"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "darshankasundra0@gmail.com", href: "mailto:darshankasundra0@gmail.com" },
    { icon: MapPin, label: "Location", value: "Ahmedabad, GUJ", href: "#" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-transparent relative border-t border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-mono"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-cyan-300/70">./</span>SayHello<span className="text-cyan-300/70">.sh</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mt-4">
            // Have a project in mind? Let's work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="font-mono">
              <h3 className="text-2xl font-bold text-white mb-4">
                &gt; Ping Me
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out via console!
              </p>
            </div>

            <div className="space-y-4 font-mono">
              {contactInfo.map((info, index) => (
                <MagneticTilt key={info.label} className="rounded-xl">
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5, backgroundColor: "#111" }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-slate-700/70 dev-glass transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#080d15] border border-slate-700 rounded-lg text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,226,255,0.4)] transition-all duration-300">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-500 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="text-white glow-text">{info.value}</p>
                  </div>
                </motion.a>
                </MagneticTilt>
              ))}
            </div>
          </motion.div>

          <MagneticTilt className="rounded-xl">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-700/70 dev-glass dev-card shadow-[0_0_40px_rgba(59,226,255,0.08)] overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-slate-700/70 bg-[#0f1520]">
              <div className="flex space-x-1.5 flex-1">
                <div className="w-3 h-3 rounded-full bg-rose-400/60"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300/60"></div>
                <div className="w-3 h-3 rounded-full bg-[#25D366]"></div>
              </div>
              <div className="flex items-center text-zinc-500 text-xs font-mono font-bold tracking-wider">
                <Terminal size={12} className="mr-2" />
                <span>whatsapp-cli.exe</span>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="p-8 font-mono">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <MessageCircle className="text-[#25D366]" size={28} />
                  [WhatsApp::Chat]
                </h3>
                <p className="text-zinc-500 text-sm">
                  // Execute this command to send a direct message.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-6">
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Enter Message Payload
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 text-zinc-600 select-none">&gt;</div>
                    <Textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full bg-[#070b12] border border-slate-800 focus:border-cyan-300 focus:ring-0 resize-none text-white pl-10 pt-4 rounded transition-colors duration-300 font-mono shadow-inner"
                      placeholder="Type your message here..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-300 to-lime-300 text-black hover:from-cyan-200 hover:to-lime-200 uppercase font-bold tracking-wider rounded-none shadow-[0_0_15px_rgba(59,226,255,0.4)] hover:shadow-[0_0_25px_rgba(59,226,255,0.6)] cursor-pointer transition-all duration-300 border border-cyan-100"
                >
                  <Send size={18} className="mr-2" />
                  root@run: send
                </Button>
              </form>
            </div>
          </motion.div>
          </MagneticTilt>
        </div>
      </div>
    </section>
  );
};

export default Contact;
