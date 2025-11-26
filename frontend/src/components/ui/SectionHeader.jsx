import { motion } from "framer-motion";

export default function SectionHeader({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-6 text-[#c9d1d9]"
    >
      <span className="border-b-2 border-[#58a6ff] pb-1">
        {title}
      </span>
    </motion.h2>
  );
}
