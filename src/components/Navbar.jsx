import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "work" }, // FeaturedWork section
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between">
        {/* Logo */}

        <motion.a
          href="#home"
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-[#00246B] text-white flex items-center justify-center font-bold text-lg shadow-md">
            SR
          </div>

          <span className="font-bold text-xl text-[#1F2937]">
            Portfolio
          </span>
        </motion.a>

        {/* Links */}

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition duration-300 font-medium ${
                active === link.id
                  ? "text-[#00246B] scale-110"
                  : "text-gray-500 hover:text-[#00246B] hover:scale-110"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}