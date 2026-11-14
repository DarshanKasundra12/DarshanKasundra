import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  maxOffset?: number;
}

const springConfig = { stiffness: 240, damping: 22, mass: 0.5 };

const MagneticTilt = ({
  children,
  className,
  maxTilt = 8,
  maxOffset = 14,
}: MagneticTiltProps) => {
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - py) * maxTilt * 2);
    x.set((px - 0.5) * maxOffset);
    y.set((py - 0.5) * maxOffset);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("transform-gpu", className)}
      style={{
        perspective: 900,
        x: springX,
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticTilt;
