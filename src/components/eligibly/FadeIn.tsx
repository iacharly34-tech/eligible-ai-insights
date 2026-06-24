import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

export const FadeIn = ({ children, className, delay = 0, as = "div" }: FadeInProps) => {
  const Comp = as === "section" ? motion.section : motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
};