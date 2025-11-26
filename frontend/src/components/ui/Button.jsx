export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  target = "_self",
}) {
  const baseStyles =
    "px-5 py-2 rounded-lg font-medium transition inline-block";

  const variants = {
    primary:
      "bg-[#58a6ff] text-[#0d1117] hover:bg-[#79b8ff]",
    outline:
      "border border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff] hover:text-[#0d1117]",
    ghost:
      "text-[#c9d1d9] hover:text-[#58a6ff]",
  };

  return (
    <a
      href={href}
      target={target}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
