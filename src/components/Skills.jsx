import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact size={42} />,
    title: "React",
    desc: "Component-based UI development",
  },
  {
    icon: <SiJavascript size={42} />,
    title: "JavaScript",
    desc: "Modern ES6+ programming",
  },
 {
    icon: <FaNodeJs size={42} />,
    title: "Node.js",
    desc: "Backend APIs & server logic",
  },
  {
    icon: <SiExpress size={42} />,
    title: "Express",
    desc: "REST API development",
  },
  {
    icon: <SiSupabase size={42} />,
    title: "Supabase",
    desc: "Authentication & Database",
  },
  {
    icon: <FaPython size={42} />,
    title: "Python",
    desc: "Problem Solving & Scripting",
  },
  {
    icon: <FaGitAlt size={42} />,
    title: "Git",
    desc: "Version Control",
  },
  {
    icon: <FaGithub size={42} />,
    title: "GitHub",
    desc: "Code Collaboration",
  },
  {
    icon: <SiTailwindcss size={42} />,
    title: "Tailwind CSS",
    desc: "Modern UI Styling",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-[#F8FAFC]">
      
      {/* FIXED CONTAINER (MATCHES HERO) */}
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
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

          <h2 className="text-5xl font-bold mt-4">
            Tech Stack
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Technologies I use to design, build and deploy modern web applications.
          </p>
        </motion.div>

        {/* GRID */}
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
              <div className="text-[#00246B]">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {skill.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {skill.desc}
              </p>

              <div className="mt-6 text-yellow-400 text-xl">
                ★★★★★
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}