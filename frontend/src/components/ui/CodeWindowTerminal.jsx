import { motion } from "framer-motion";

export default function CodeWindowTerminal({ code = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0b0b0b] border border-[#161b22] rounded-xl overflow-hidden shadow-lg"
    >
      {/* Header with traffic lights */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-[#161f27]">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
      </div>

      {/* Code Body */}
      <div className="p-4 font-mono text-sm text-[#c9d1d9] space-y-1 code-font">
        {code.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
