export default function Footer() {
  return (
    <footer className="mt-32 py-10 border-t border-[#161b22] bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-[#8b949e]">
          © {new Date().getFullYear()} Aditya Raj | Built with{" "}
          <span className="text-[#58a6ff]">React</span> &{" "}
          <span className="text-[#58a6ff]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
