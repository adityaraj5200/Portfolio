import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function ProjectCard({ project }) {
  const { name, techStack, description, github, liveLink } = project;

  // Based on project name, map architecture SVG path
  const architectureMap = {
    "URL Shortener Service": "/assets/arch-url-shortener.svg",
    "E-Commerce Backend System": "/assets/arch-ecommerce.svg",
  };

  const architectureImage = architectureMap[name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      variants={{ visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#161b22] border border-[#1f2530] rounded-xl overflow-hidden shadow-lg group"
    >
      {/* CARD CONTENT */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-[#c9d1d9]">{name}</h3>

        <p className="text-sm text-[#8b949e]">{description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-[#1e2633] border border-[#2a3442] rounded-lg text-[#8b949e]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="pt-4">
          <Button href={github} target="_blank" variant="outline">
            View GitHub
          </Button>
        </div>

        {/* liveLink Button */}
        {liveLink && (
          <div className="pt-4">
            <Button href={liveLink} target="_blank" variant="outline">
              View Live
            </Button>
          </div>
        )}
      </div>

      {/* HOVER ARCHITECTURE OVERLAY (SLIDE-UP EFFECT) */}
      {architectureImage && (
        <motion.div
          initial={{ y: "100%" }}
          whileHover={{ y: "0%" }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#0d1117]/95 flex flex-col items-center justify-center p-6 text-center
                     border-t border-[#58a6ff]/40 group-hover:shadow-[0_0_25px_rgba(88,166,255,0.3)]"
        >
          <h4 className="text-lg font-semibold text-[#58a6ff] mb-4">
            Architecture Preview
          </h4>

          <img
            src={architectureImage}
            alt="Architecture Diagram"
            className="w-full h-auto max-h-48 object-contain rounded-lg shadow-lg mb-4"
          />

          <Button
            href={github}
            target="_blank"
            variant="primary"
            className="mt-2"
          >
            View Full Architecture
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
