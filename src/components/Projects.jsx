import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills and development journey.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "",   // or null
  },  
  {
    title: "AI Image Detector",
    description:
      "A web application that detects AI-generated images using machine learning techniques.",
    tech: ["React", "Flask", "Python"],
    github: "https://github.com/Sreelakshmii-R/ai-image-detector",
    demo: "",   // or null
  },
  {
    title: "Visora",
    description:
      "A modern web application focused on creating clean and engaging user experiences.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/Sreelakshmii-R/visora-vision-hub",
    demo: "",   // or null
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#F8FAFC] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#00246B] font-semibold">
            Other Projects
          </p>

          <h2 className="text-5xl font-bold mt-4 text-[#2E2E2E]">
            More Things I've Built
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-md p-8 border border-gray-100 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-[#00246B]">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-[#00246B] px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#00246B] hover:underline"
                >
                    <FaGithub />
                    GitHub
                </a>

                {project.demo && (
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#00246B] hover:underline"
                    >
                    <FaExternalLinkAlt />
                    Demo
                    </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}