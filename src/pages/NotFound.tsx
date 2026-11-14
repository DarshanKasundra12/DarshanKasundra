import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Terminal, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060a] text-white p-4 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141d2a_1px,transparent_1px),linear-gradient(to_bottom,#141d2a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />
      
      <div className="w-full max-w-lg rounded-xl border border-slate-700/70 dev-glass dev-card shadow-[0_0_50px_rgba(59,226,255,0.12)] overflow-hidden relative z-10">
        <div className="flex items-center px-4 py-3 border-b border-slate-700/70 bg-[#0f1520]">
          <div className="flex space-x-1.5 flex-1">
            <div className="w-3 h-3 rounded-full bg-rose-400/60" />
            <div className="w-3 h-3 rounded-full bg-amber-300/60" />
            <div className="w-3 h-3 rounded-full bg-cyan-300/60" />
          </div>
          <div className="flex items-center text-zinc-500 text-xs font-mono font-bold tracking-wider">
            <Terminal size={12} className="mr-2" />
            <span>error_handler.sh — 404</span>
          </div>
          <div className="flex-1" />
        </div>

        <div className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl sm:text-7xl font-black text-white tracking-tighter">
              4<span className="text-cyan-300">0</span>4
            </h1>
            <p className="text-rose-400 text-sm uppercase tracking-widest font-bold">
              [Status: ERR_ROUTE_NOT_FOUND]
            </p>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed">
            The target route <code className="text-cyan-300 px-2 py-0.5 bg-[#0a0f17] border border-slate-700 rounded">{location.pathname}</code> does not exist in this environment.
          </p>

          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-300 to-lime-300 text-black hover:from-cyan-200 hover:to-lime-200 font-mono uppercase text-xs font-bold tracking-wider rounded-none shadow-[0_0_15px_rgba(59,226,255,0.4)]"
            >
              <Link to="/">
                <ArrowLeft size={16} className="mr-2" /> Return to Base Console
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
