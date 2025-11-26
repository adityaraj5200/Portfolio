import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchContent } from "../../lib/fetchContent";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetchContent("projects.json").then((data) => setProjects(data));
  }, []);

  if (!projects) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <div>
      <SectionHeader title="Projects" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {projects.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
