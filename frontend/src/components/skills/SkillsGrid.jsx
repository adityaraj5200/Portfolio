import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchContent } from "../../lib/fetchContent";
import SectionHeader from "../ui/SectionHeader";

export default function SkillsGrid() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetchContent("skills.json").then((data) => setSkills(data));
  }, []);

  if (!skills) return null;

  const skillCategories = [
    { title: "Backend", list: skills.backend },
    { title: "Frontend", list: skills.frontend },
    // { title: "Databases", list: skills.database },
    { title: "Computer Science Fundamentals", list: skills.csFundamentals },
    { title: "Tools", list: skills.tools },
    { title: "System Design", list: skills.systemDesign }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <SectionHeader title="Skills" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.4 }}
            className="bg-[#161b22] border border-[#1f2530] p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(88,166,255,0.15)] transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#58a6ff]">
              {cat.title}
            </h3>

            <ul className="space-y-2 text-[#c9d1d9]">
              {cat.list.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-[#1e2633] px-3 py-1 rounded-lg text-sm text-[#8b949e] border border-[#2a3442]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
