import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "" }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        },
      }}
    >
      {children}
    </motion.div>
  );
}
