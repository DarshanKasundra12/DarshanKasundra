import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const labels = {
  cyber: "Cyber",
  matrix: "Matrix",
  cobalt: "Cobalt",
} as const;

const ThemeVariantSwitch = () => {
  const { themeVariant, cycleThemeVariant } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={cycleThemeVariant}
      className="theme-outline inline-flex items-center gap-2 rounded-md border bg-[#0b111b]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
      title="Switch developer palette"
      aria-label="Switch developer palette"
    >
      <Palette size={12} className="theme-accent-text" />
      <span className="hidden sm:inline">Theme</span>
      <span className="theme-accent-soft">{labels[themeVariant]}</span>
    </motion.button>
  );
};

export default ThemeVariantSwitch;
