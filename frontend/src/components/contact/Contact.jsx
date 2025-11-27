import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchContent } from "../../lib/fetchContent";
import SectionHeader from "../ui/SectionHeader";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";


export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContent("contact.json").then((data) => setContact(data));
  }, []);

  if (!contact) return null;

  const contactItems = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <FiMail size={28} />,
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: contact.linkedin,
      icon: <FiLinkedin size={28} />,
    },
    {
      label: "GitHub",
      value: "GitHub Profile",
      href: contact.github,
      icon: <FiGithub size={28} />,
    },
    {
      label: "LeetCode",
      value: "LeetCode Profile",
      href: contact.leetcode,
      icon: <SiLeetcode size={28} />,
    },
    {
      label: "CodeChef",
      value: "CodeChef Profile",
      href: contact.codechef,
      icon: <SiCodechef size={28} />,
    },
    {
      label: "Codeforces",
      value: "Codeforces Profile",
      href: contact.codeforces,
      icon: <SiCodeforces size={28} />,
    },
  ];

  return (
    <div className="text-center">
      <SectionHeader title="Contact / Profiles" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[#8b949e] max-w-xl mx-auto mb-10"
      >
        Feel free to reach out if you'd like to discuss opportunities,
        projects, or collaboration.
      </motion.p>

      {/* Contact Icons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-6 px-2">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-[#c9d1d9] hover:text-[#58a6ff] transition"
          >
            <div className="p-4 bg-[#161b22] border border-[#1f2530] rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(88,166,255,0.25)] transition">
              {item.icon}
            </div>
            <span className="mt-3 text-sm">{item.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
