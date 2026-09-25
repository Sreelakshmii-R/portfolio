import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "RescueAI",
    description:
      "An AI-powered emergency triage assistant that analyzes symptoms and provides first-aid guidance.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Supabase",
      "Groq LLM",
    ],
    github: "https://github.com/Sreelakshmii-R/RescueAI",
    demo: "https://rescue-ai-zeta.vercel.app/",
  },
  {
    title: "InterviewIQ",
    description:
      "An AI-powered interview simulator that generates personalized questions and provides automated interview feedback.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Supabase",
      "Groq AI",
    ],
    github: "https://github.com/Sreelakshmii-R/Interview-IQ",
    demo: "https://interview-iq-chi.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and development journey.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Sreelakshmii-R/portfolio",
    demo: "https://portfolio-lime-delta-91.vercel.app/",
  },
  {
    title: "Space Escape Runner",
    description:
      "A 2D arcade-style mobile game built with React Native and Expo featuring asteroid dodging, score tracking, collision detection, and persistent high scores.",
    tech: [
      "React Native",
      "Expo",
      "JavaScript",
      "AsyncStorage",
    ],
    github: "https://github.com/Sreelakshmii-R/SpaceEscapeRunner",
    demo: "https://github.com/user-attachments/assets/e7168b11-daf6-4c94-81ab-fbaf71f3a202",
  },
  {
    title: "AI Image Detector",
    description:
      "A web application that detects AI-generated images using machine learning techniques.",
    tech: ["React", "Flask", "Python"],
    github: "https://github.com/Sreelakshmii-R/ai-image-detector",
    demo: "",
  },
  {
    title: "Visora",
    description:
      "A modern web application focused on creating clean and engaging user experiences.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/Sreelakshmii-R/visora-vision-hub",
    demo: "https://visora-vision-hub.lovable.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#00246B] font-semibold text-sm sm:text-base">
            Other Projects
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 text-[#2E2E2E]">
            More Things I've Built
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-7">
            A collection of projects exploring full-stack development,
            artificial intelligence, mobile development, and modern web
            technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-5 sm:p-6 lg:p-7"
            >
              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#00246B] leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-7">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-[#00246B] border border-blue-100 px-2.5 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4 mt-auto pt-7">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#00246B] hover:text-blue-700 transition-colors"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#00246B] hover:text-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt />

                    {project.title === "Space Escape Runner"
                      ? "Demo Video"
                      : "Live Demo"}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}