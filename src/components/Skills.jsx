import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaServer,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiSupabase,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiRender,
  SiExpo,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <FaServer /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },

  {
    title: "AI & Application Integration",
    skills: [
      { name: "Groq API", icon: <FaPython /> },
      { name: "LLM APIs", icon: <FaPython /> },
      { name: "Web Speech API", icon: <FaReact /> },
    ],
  },

  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Expo", icon: <SiExpo /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },

  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[3px] text-[#00246B] font-semibold text-sm sm:text-base">
            Skills
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 text-[#2E2E2E]">
            Tech Stack
          </h2>

          <p className="text-gray-500 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Technologies and tools I use to build, integrate, and deploy
            modern web and AI-powered applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 mt-10 sm:mt-12 lg:mt-14">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6 lg:p-7 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#2E2E2E] mb-5">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-[#F8FAFC] border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-[#00246B] hover:text-[#00246B] transition-colors"
                  >
                    <span className="text-[#00246B] text-base sm:text-lg">
                      {skill.icon}
                    </span>

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}