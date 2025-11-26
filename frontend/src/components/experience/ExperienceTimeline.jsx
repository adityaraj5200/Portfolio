import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchContent } from "../../lib/fetchContent";
import SectionHeader from "../ui/SectionHeader";

export default function ExperienceTimeline() {
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    fetchContent("experience.json").then((data) => setExperience(data));
  }, []);

  if (!experience) return null;

  return (
    <div>
      <SectionHeader title="Experience" />

      <div className="relative border-l border-[#2d333b] ml-4">
        {experience.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-12 ml-8"
          >
            {/* Timeline Dot */}
            <div className="w-4 h-4 bg-[#58a6ff] rounded-full absolute -left-[10px] mt-1.5 border-2 border-[#0d1117]"></div>

            {/* Card */}
            <div className="bg-[#161b22] border border-[#1f2530] p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(88,166,255,0.15)] transition">
              <h3 className="text-xl font-semibold text-[#c9d1d9]">
                {exp.position}
              </h3>

              <p className="text-[#58a6ff] font-medium mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-[#8b949e] mt-1">
                {exp.duration} · {exp.location}
              </p>

              <ul className="mt-4 space-y-2 text-[#c9d1d9]">
                {exp.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm leading-relaxed text-[#8b949e]"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
