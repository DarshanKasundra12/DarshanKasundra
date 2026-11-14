import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle, Terminal, Copy, Check, ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import MagneticTilt from "./ui/MagneticTilt";

type ContactMode = "email" | "whatsapp";
type EmailClientTarget = "gmail" | "outlook" | "system";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const [mode, setMode] = useState<ContactMode>("email");
  const [emailClient, setEmailClient] = useState<EmailClientTarget>("gmail");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email form states
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // WhatsApp form state
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const { toast } = useToast();
  const personalEmail = "darshankasundra0@gmail.com";
  const phoneNumber = "6351027968";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalEmail);
    setCopiedEmail(true);
    toast({
      title: "Email Copied",
      description: `${personalEmail} copied to your clipboard.`,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getEncodedPayload = () => {
    const rawSubject = subject.trim() || `Portfolio Inquiry from ${senderName.trim() || "Recruiter"}`;
    const rawBody = `From: ${senderName.trim() || "Not specified"}\nReply-To: ${senderEmail.trim() || "Not specified"}\n\nMessage:\n${emailMessage}`;
    return {
      subject: encodeURIComponent(rawSubject),
      body: encodeURIComponent(rawBody),
    };
  };

  const dispatchEmail = (target: EmailClientTarget) => {
    if (!emailMessage.trim()) {
      toast({
        title: "Empty Message",
        description: "Please include a message payload before dispatching.",
        variant: "destructive",
      });
      return;
    }

    const { subject: s, body: b } = getEncodedPayload();

    if (target === "gmail") {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalEmail}&su=${s}&body=${b}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
      toast({
        title: "Redirecting to Gmail",
        description: "Opened Gmail in your browser with your message pre-filled.",
      });
    } else if (target === "outlook") {
      const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${personalEmail}&subject=${s}&body=${b}`;
      window.open(outlookUrl, "_blank", "noopener,noreferrer");
      toast({
        title: "Redirecting to Outlook",
        description: "Opened Outlook Web in your browser with your message pre-filled.",
      });
    } else {
      // Default system mailto:
      const mailtoUrl = `mailto:${personalEmail}?subject=${s}&body=${b}`;
      window.location.href = mailtoUrl;
      toast({
        title: "Opening Mail Application",
        description: "Attempting to open your system's default email client.",
      });
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    dispatchEmail(emailClient);
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappMessage.trim()) {
      toast({
        title: "Empty Message",
        description: "Please enter a message to start the WhatsApp chat.",
        variant: "destructive",
      });
      return;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    setWhatsappMessage("");
  };

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
          <div className="flex items-center justify-center gap-3 text-zinc-500 text-xs mb-3">
            <span className="px-2 py-0.5 border border-slate-700 rounded bg-[#0a0f17]">
              ~/network/handshake
            </span>
            <span>// Open for Full-Time Roles & Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="text-cyan-300/70">./</span>SayHello<span className="text-cyan-300/70">.sh</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto font-mono">
            // Have an ambitious project or a high-impact engineering role? Let&apos;s build something exceptional together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Fast Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 font-mono"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                &gt; Ping Me
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Looking for a full-stack engineer, backend API specialist, or real-time systems developer? Reach out through your preferred mail application or directly in your browser.
              </p>
            </div>

            {/* Interactive Email Copy Card */}
            <MagneticTilt className="rounded-xl">
              <div className="p-5 rounded-xl border border-slate-700/70 dev-glass dev-card group relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-3 bg-[#080d15] border border-slate-700 rounded-lg text-cyan-300 group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                        Primary Inbox
                      </p>
                      <p className="text-white text-xs sm:text-sm font-bold truncate">
                        {personalEmail}
                      </p>
                    </div>
                  </div>

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={handleCopyEmail}
                    className="border-slate-700 hover:border-cyan-300 text-zinc-300 hover:text-white bg-[#0a0f17] text-xs font-mono shrink-0 gap-1.5"
                  >
                    {copiedEmail ? <Check size={14} className="text-lime-300" /> : <Copy size={14} />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </Button>
                </div>
              </div>
            </MagneticTilt>

            {/* Location & Response Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-[#080d15]/80 text-xs">
                <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1">
                  <MapPin size={15} />
                  <span>Location</span>
                </div>
                <p className="text-zinc-400">Ahmedabad, Gujarat, India</p>
                <span className="text-[10px] text-zinc-600 uppercase font-bold">IST (UTC+5:30)</span>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#080d15]/80 text-xs">
                <div className="flex items-center gap-2 text-lime-300 font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  <span>Availability</span>
                </div>
                <p className="text-zinc-400">Full-Time / Immediate</p>
                <span className="text-[10px] text-zinc-600 uppercase font-bold">Typical response: &lt; 24h</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dual-Channel Terminal Console */}
          <MagneticTilt className="lg:col-span-7 rounded-xl">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-700/70 dev-glass dev-card shadow-[0_0_40px_rgba(59,226,255,0.08)] overflow-hidden font-mono"
            >
              {/* Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-slate-700/70 bg-[#0f1520] justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-300/60" />
                  <div className="w-3 h-3 rounded-full bg-cyan-300/60" />
                </div>
                
                <div className="flex items-center text-zinc-500 text-xs font-bold tracking-wider">
                  <Terminal size={12} className="mr-2" />
                  <span>{mode === "email" ? "mail_dispatcher.sh" : "whatsapp-cli.exe"}</span>
                </div>

                <div className="w-12" />
              </div>

              {/* Protocol Toggle Buttons */}
              <div className="grid grid-cols-2 border-b border-slate-800 bg-[#0a0f17]">
                <button
                  type="button"
                  onClick={() => setMode("email")}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                    mode === "email"
                      ? "bg-[#111927] text-white border-b-2 border-cyan-300"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-[#0d131f]"
                  }`}
                >
                  <Mail size={14} className={mode === "email" ? "text-cyan-300" : ""} />
                  <span>Email Dispatch</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMode("whatsapp")}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                    mode === "whatsapp"
                      ? "bg-[#111927] text-white border-b-2 border-[#25D366]"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-[#0d131f]"
                  }`}
                >
                  <MessageCircle size={14} className={mode === "whatsapp" ? "text-[#25D366]" : ""} />
                  <span>WhatsApp Instant</span>
                </button>
              </div>

              <div className="p-6 md:p-8">
                {mode === "email" ? (
                  /* Email Protocol Form */
                  <form onSubmit={handleSendEmail} className="space-y-4">
                    {/* Destination Client Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                          Route Destination Target:
                        </span>
                        <span className="text-[10px] text-cyan-300/80 font-bold">
                          {emailClient === "gmail" && "Browser Tab (mail.google.com)"}
                          {emailClient === "outlook" && "Browser Tab (outlook.live.com)"}
                          {emailClient === "system" && "System Application (mailto:)"}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 p-1 bg-[#070b12] border border-slate-800 rounded-lg">
                        <button
                          type="button"
                          onClick={() => setEmailClient("gmail")}
                          className={`py-1.5 px-2 rounded text-[11px] font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors ${
                            emailClient === "gmail"
                              ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Globe size={12} />
                          <span>Gmail Web</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setEmailClient("outlook")}
                          className={`py-1.5 px-2 rounded text-[11px] font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors ${
                            emailClient === "outlook"
                              ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Globe size={12} />
                          <span>Outlook Web</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setEmailClient("system")}
                          className={`py-1.5 px-2 rounded text-[11px] font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors ${
                            emailClient === "system"
                              ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Mail size={12} />
                          <span>Default App</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1.5">
                          Your Name / Company
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="e.g. Alex Morgan"
                          className="w-full bg-[#070b12] border border-slate-800 focus:border-cyan-300 text-white px-3 py-2 text-xs rounded font-mono shadow-inner outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1.5">
                          Your Return Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full bg-[#070b12] border border-slate-800 focus:border-cyan-300 text-white px-3 py-2 text-xs rounded font-mono shadow-inner outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1.5">
                        Subject Line
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Project Collaboration / Full-Time Engineering Opportunity"
                        className="w-full bg-[#070b12] border border-slate-800 focus:border-cyan-300 text-white px-3 py-2 text-xs rounded font-mono shadow-inner outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-message" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1.5">
                        Message Payload *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 text-zinc-600 select-none text-xs">&gt;</div>
                        <Textarea
                          id="email-message"
                          value={emailMessage}
                          onChange={(e) => setEmailMessage(e.target.value)}
                          rows={4}
                          className="w-full bg-[#070b12] border border-slate-800 focus:border-cyan-300 focus:ring-0 resize-none text-white pl-8 pt-2.5 text-xs rounded transition-colors font-mono shadow-inner"
                          placeholder="Describe your project or role details here..."
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-300 to-lime-300 text-black hover:from-cyan-200 hover:to-lime-200 uppercase font-bold text-xs tracking-wider rounded-none shadow-[0_0_15px_rgba(59,226,255,0.4)] hover:shadow-[0_0_25px_rgba(59,226,255,0.6)] cursor-pointer transition-all border border-cyan-100 mt-2"
                    >
                      <Send size={15} className="mr-2" />
                      {emailClient === "gmail" && "send: open in gmail (browser)"}
                      {emailClient === "outlook" && "send: open in outlook (browser)"}
                      {emailClient === "system" && "send: open in mail application"}
                    </Button>

                    {/* Instant Browser Fallbacks */}
                    <div className="pt-2 text-center">
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">
                        Quick Launch directly in browser:
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => dispatchEmail("gmail")}
                          className="px-2.5 py-1 rounded bg-[#0a0f17] border border-slate-800 hover:border-cyan-300 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-mono"
                        >
                          <ExternalLink size={11} className="text-cyan-300" />
                          <span>Gmail Web</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => dispatchEmail("outlook")}
                          className="px-2.5 py-1 rounded bg-[#0a0f17] border border-slate-800 hover:border-cyan-300 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-mono"
                        >
                          <ExternalLink size={11} className="text-cyan-300" />
                          <span>Outlook Web</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => dispatchEmail("system")}
                          className="px-2.5 py-1 rounded bg-[#0a0f17] border border-slate-800 hover:border-cyan-300 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-mono"
                        >
                          <Mail size={11} className="text-cyan-300" />
                          <span>Default Mailto</span>
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* WhatsApp Protocol Form */
                  <form onSubmit={handleSendWhatsapp} className="space-y-4">
                    <div className="p-3 bg-[#0a120c] border border-[#25D366]/30 rounded-lg text-xs text-zinc-300 flex items-center gap-2 mb-2">
                      <MessageCircle className="text-[#25D366] shrink-0" size={18} />
                      <span>Direct WhatsApp line (+91 6351027968) with instant delivery.</span>
                    </div>

                    <div>
                      <label htmlFor="whatsapp-message" className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1.5">
                        WhatsApp Message Payload *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 text-zinc-600 select-none text-xs">&gt;</div>
                        <Textarea
                          id="whatsapp-message"
                          value={whatsappMessage}
                          onChange={(e) => setWhatsappMessage(e.target.value)}
                          rows={5}
                          className="w-full bg-[#070b12] border border-slate-800 focus:border-[#25D366] focus:ring-0 resize-none text-white pl-8 pt-2.5 text-xs rounded transition-colors font-mono shadow-inner"
                          placeholder="Hey Darshan, I came across your portfolio and would like to chat about..."
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#25D366] text-black hover:bg-[#20bd5a] uppercase font-bold text-xs tracking-wider rounded-none shadow-[0_0_18px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] cursor-pointer transition-all border border-lime-200 mt-2"
                    >
                      <MessageCircle size={16} className="mr-2" />
                      whatsapp.send: open chat
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </MagneticTilt>
        </div>
      </div>
    </section>
  );
};

export default Contact;
