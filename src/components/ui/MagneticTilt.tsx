import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  maxOffset?: number;
}

const MagneticTilt = ({
  children,
  className,
  maxTilt = 8,
  maxOffset = 14,
}: MagneticTiltProps) => {
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });

  const spring = useMemo(
    () => ({ type: "spring", stiffness: 240, damping: 22, mass: 0.5 }),
    []
  );

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;
    const x = (px - 0.5) * maxOffset;
    const y = (py - 0.5) * maxOffset;

    setState({ rotateX, rotateY, x, y });
  };

  const onMouseLeave = () => {
    setState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("transform-gpu", className)}
      style={{ perspective: 900 }}
      animate={{
        x: state.x,
        y: state.y,
        rotateX: state.rotateX,
        rotateY: state.rotateY,
      }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
};

export default MagneticTilt;
