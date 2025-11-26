import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-[#0d1117]/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-semibold text-[#58a6ff] hover:opacity-80 transition"
        >
          Aditya Raj
        </a>

        {/* Nav Items */}
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[#c9d1d9] hover:text-[#58a6ff] transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/drive/u/0/folders/1PwsjwJeeYSZhmzGcQzCyTTacbh3umGq-"
          target="_blank"
          className="hidden md:block border border-[#58a6ff] text-[#58a6ff] px-4 py-1.5 rounded-lg text-sm hover:bg-[#58a6ff] hover:text-[#0d1117] transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
