import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorBubble = () => {
  // Bypassing React state entirely for the position to fix lag and guarantee 120fps+ smoothness
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Extremely snappy and smooth spring for the core dot
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Slightly softer floating spring for the trailing boundary circle
  const springConfigTrailing = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpringTrailing = useSpring(cursorX, springConfigTrailing);
  const cursorYSpringTrailing = useSpring(cursorY, springConfigTrailing);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Fired on every mouse move, directly writing to MotionValue (0 milliseconds delay)
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Initial bind
    const bindInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return interactiveElements;
    };

    let elements = bindInteractiveElements();

    // Since SPAs mount/unmount components continuously, let's attach a MutationObserver 
    // to track newly added or removed buttons/links to dynamically bind the cursor!
    const observer = new MutationObserver(() => {
      // Re-bind to ensure new elements work
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      elements = bindInteractiveElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[2px] border-white rounded-full pointer-events-none z-40 mix-blend-difference"
        style={{
          x: cursorXSpringTrailing,
          y: cursorYSpringTrailing,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CursorBubble;
