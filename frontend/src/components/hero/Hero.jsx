import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hi, I'm <span className="text-[#58a6ff]">Aditya Raj</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl text-[#8b949e]"
        >
          <p>Full-stack developer - Java · Spring Boot · Microservices · HTML · CSS · JavaScript · React </p>
          <p>Ex-Amazon(1.3 years) | NIT Agartala (2019-23) </p>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex gap-4 pt-2"
        >
          <a
            href="https://drive.google.com/drive/u/0/folders/1PwsjwJeeYSZhmzGcQzCyTTacbh3umGq-"
            target="_blank"
            className="bg-[#58a6ff] text-[#0d1117] px-5 py-2 rounded-lg font-medium hover:bg-[#79b8ff] transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/adityaraj5200"
            target="_blank"
            className="border border-[#58a6ff] text-[#58a6ff] px-5 py-2 rounded-lg font-medium hover:bg-[#58a6ff] hover:text-[#0d1117] transition"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE — PHOTO WITH GLOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#58a6ff]/30 to-[#a371f7]/30 blur-2xl"></div>

        {/* Photo */}
        <img
          src={`${import.meta.env.BASE_URL}assets/photo.jpg`}
          alt="Aditya Raj alternative"
          className="relative rounded-2xl shadow-xl"
        />
      </motion.div>
    </div>
  );
}
