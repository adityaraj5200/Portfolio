import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchContent } from "../../lib/fetchContent";
import CodeWindowTerminal from "../ui/CodeWindowTerminal";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchContent("about.json").then((data) => setAbout(data));
  }, []);

  if (!about) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      {/* LEFT SIDE — ABOUT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeader title="About Me" />

        <h2 className="text-3xl font-semibold mb-4">
          {about.name}
        </h2>

        <p className="text-[#8b949e] leading-relaxed text-lg">
          {about.description}
        </p>
      </motion.div>

      {/* RIGHT SIDE — TERMINAL CODE WINDOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <CodeWindowTerminal
          code={[
            "📁  controllers/AboutController.java",
            "",
            "@GetMapping(\"/api/v1/about\")",
            "public About getAbout() {",
            "    return contentService.getAbout();",
            "}",
            "",
            "// Java + Spring Boot Backend",
            "// powering my portfolio data",
          ]}
        />
      </motion.div>
    </div>
  );
}
