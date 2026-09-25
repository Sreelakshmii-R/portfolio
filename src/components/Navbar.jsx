import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "work" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-white/70 backdrop-blur-md"
        }
      `}
    >
      {/* NAVBAR CONTAINER */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={() => handleLinkClick("home")}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-[#00246B] text-white flex items-center justify-center font-bold text-lg shadow-md">
              SR
            </div>

            <span className="font-bold text-xl text-[#1F2937]">
              Portfolio
            </span>
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`
                  relative
                  font-medium
                  text-sm lg:text-base
                  transition-all duration-300
                  ${
                    active === link.id
                      ? "text-[#00246B]"
                      : "text-gray-500 hover:text-[#00246B]"
                  }
                `}
              >
                {link.name}

                {/* ACTIVE UNDERLINE */}
                {active === link.id && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00246B] rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-xl flex items-center justify-center text-[#00246B] hover:bg-[#EAF1FF] transition"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FaTimes size={22} />
            ) : (
              <FaBars size={22} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg"
          >
            <nav className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex flex-col">

                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`
                      py-4
                      px-3
                      rounded-xl
                      font-medium
                      transition-all duration-200
                      ${
                        active === link.id
                          ? "bg-[#EAF1FF] text-[#00246B]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#00246B]"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                ))}

              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}