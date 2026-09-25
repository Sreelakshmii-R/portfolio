import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import dashboard from "../assets/dashboard-codedoctor.png";
import repository from "../assets/codedoctor-repository.png";

const features = [
  "AI GitHub Repository Analysis",
  "Code Quality Review",
  "Bug Detection",
  "Security Vulnerability Analysis",
  "AI Code Insights",
];

const techStack = [
  "React",
  "FastAPI",
  "PostgreSQL",
  "Groq AI",
  "Docker",
  "Tailwind CSS",
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm sm:text-base uppercase tracking-[3px] sm:tracking-[4px] text-[#00246B] font-semibold">
            Featured Work
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 text-[#2E2E2E]">
            CodeDoctor AI
          </h2>

          <p className="mt-4 sm:mt-5 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            AI-powered repository intelligence platform that analyzes
            GitHub repositories for code quality, bugs, security issues,
            and best-practice recommendations.
          </p>
        </motion.div>

        {/* ================= MAIN SCREENSHOT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
            <img
              src={dashboard}
              alt="CodeDoctor AI Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* ================= FEATURES + TECH ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 sm:mt-14 lg:mt-16">

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-5 sm:mb-6">
              Key Features
            </h3>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 items-start"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />

                  <span className="text-sm sm:text-base text-gray-700 leading-6">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TECH + LINKS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-5 sm:mb-6">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#EAF1FF] text-[#00246B] px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-8">
              <a
                href="https://code-doctor-ai-orcin.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#00246B] text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition font-medium"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href="https://github.com/Sreelakshmii-R/CodeDoctor-AI"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto border border-gray-300 px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:border-[#00246B] hover:text-[#00246B] transition font-medium"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= REPOSITORY PREVIEW ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-[#1F2937] mb-6 sm:mb-8">
            Repository Analysis Preview
          </h3>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
            <img
              src={repository}
              alt="CodeDoctor AI Repository Analysis"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}