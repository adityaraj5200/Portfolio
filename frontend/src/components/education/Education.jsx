import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchContent } from "../../lib/fetchContent";
import SectionHeader from "../ui/SectionHeader";

export default function Education() {
  const [education, setEducation] = useState(null);

  useEffect(() => {
    fetchContent("education.json").then((data) => setEducation(data));
  }, []);

  if (!education) return null;

  return (
    <div>
      <SectionHeader title="Education" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#161b22] border border-[#1f2530] rounded-xl p-8 shadow-lg max-w-3xl"
      >
        <h3 className="text-xl font-semibold text-[#c9d1d9]">
          {education.degree}
        </h3>

        <p className="text-[#58a6ff] font-medium mt-1">
          {education.institution}
        </p>

        <p className="text-sm text-[#8b949e] mt-1">
          {education.year}
        </p>

        <p className="mt-4 text-[#8b949e] leading-relaxed">
          {education.details}
        </p>
      </motion.div>
    </div>
  );
}
