import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaServer,
  FaGithub,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiSupabase,
  SiTailwindcss,
  SiPostgresql,
  SiSqlite,
  SiPostman,
  SiVercel,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact size={42} />,
    title: "React",
    desc: "Building modern, responsive user interfaces",
  },
  {
    icon: <SiJavascript size={42} />,
    title: "JavaScript",
    desc: "ES6+ programming",
  },
  {
    icon: <SiTailwindcss size={42} />,
    title: "Tailwind CSS",
    desc: "Modern UI styling",
  },
  {
    icon: <FaNodeJs size={42} />,
    title: "Node.js",
    desc: "Backend development",
  },
  {
    icon: <SiExpress size={42} />,
    title: "Express",
    desc: "REST API development",
  },
  {
    icon: <FaPython size={42} />,
    title: "FastAPI",
    desc: "High-performance Python APIs",
  },
  {
    icon: <FaPython size={42} />,
    title: "Python",
    desc: "Backend & scripting",
  },
  {
    icon: <FaServer size={42} />,
    title: "Render",
    desc: "Backend deployment",
  },
  {
    icon: <SiPostgresql size={42} />,
    title: "PostgreSQL",
    desc: "Relational database",
  },
  {
    icon: <SiSqlite size={42} />,
    title: "SQLite",
    desc: "Lightweight database",
  },
  {
    icon: <SiMongodb size={42} />,
    title: "MongoDB",
    desc: "NoSQL database",
  },
  {
    icon: <SiSupabase size={42} />,
    title: "Supabase",
    desc: "Authentication & database",
  },
  {
    icon: <FaDocker size={42} />,
    title: "Docker",
    desc: "Containerization",
  },
  {
    icon: <FaLinux size={42} />,
    title: "Linux",
    desc: "Command line & development",
  },
  {
    icon: <FaGitAlt size={42} />,
    title: "Git",
    desc: "Version control",
  },
  {
    icon: <FaGithub size={42} />,
    title: "GitHub",
    desc: "Code collaboration",
  },
  {
    icon: <SiPostman size={42} />,
    title: "Postman",
    desc: "API testing",
  },
  {
    icon: <SiVercel size={42} />,
    title: "Vercel",
    desc: "Frontend deployment",
  },
  {
    icon: <FaPython size={42} />,
    title: "LLM APIs",
    desc: "OpenAI & Groq integration",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[3px] text-[#00246B] font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">Tech Stack</h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Technologies I use to design, build and deploy modern web
            applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition duration-300 border border-transparent hover:border-[#00246B]"
            >
              <div className="text-[#00246B]">{skill.icon}</div>

              <h3 className="text-2xl font-bold mt-6">{skill.title}</h3>

              <p className="text-gray-500 mt-4">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
