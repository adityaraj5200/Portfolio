import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchContent } from "../../lib/fetchContent";
import SectionHeader from "../ui/SectionHeader";

export default function Achievements() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchContent("achievements.json").then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <div>
      <SectionHeader title="Achievements" />

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4 max-w-3xl"
      >
        {data.achievements.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-[#161b22] border border-[#1f2530] rounded-lg p-4 text-[#8b949e] hover:shadow-[0_0_20px_rgba(88,166,255,0.15)] transition"
          >
            • {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
