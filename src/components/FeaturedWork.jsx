import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import home from "../assets/interview-home.png";
import dashboard from "../assets/interview-dashboard.png";

const features = [
  "AI Resume Analysis",
  "AI Mock Interviews",
  "Speech Recognition",
  "Instant AI Feedback",
  "Performance Dashboard",
];

const techStack = [
  "React",
  "Node.js",
  "Express",
  "Supabase",
  "Groq AI",
  "Tailwind CSS",
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-[#00246B] font-semibold">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold mt-3 text-[#2E2E2E]">
            Interview IQ
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base leading-7">
            AI-powered interview preparation platform that analyzes
            resumes, generates personalized interview questions,
            conducts mock interviews and provides intelligent
            feedback to improve interview performance.
          </p>
        </motion.div>

        {/* Main Screenshot */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={home}
          alt="Interview IQ"
          className="mt-10 rounded-2xl shadow-xl max-h-[420px] object-cover mx-auto"
        />

        {/* Features + Tech */}
        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Key Features
            </h3>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 items-center"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech + Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#EAF1FF] text-[#00246B] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://interview-iq-chi.vercel.app/"
                className="bg-[#00246B] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:scale-105 transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href="https://github.com/Sreelakshmii-R/Interview-IQ"
                target="_blank"
                rel="noreferrer"
                className="border px-5 py-2.5 rounded-lg flex items-center gap-2 hover:border-[#00246B] transition"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Dashboard Preview
          </h3>

          <img
            src={dashboard}
            alt="Dashboard"
            className="rounded-2xl shadow-lg max-h-[400px] object-cover mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}