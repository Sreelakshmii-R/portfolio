import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDownload,
} from "react-icons/fa";

import { SiJavascript, SiSupabase } from "react-icons/si";

import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#FBFBFB] flex items-center pt-28 sm:pt-32 lg:pt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Small heading */}
            <p className="text-sm sm:text-base uppercase tracking-[3px] sm:tracking-[4px] text-[#00246B] font-semibold">
              Welcome to my portfolio
            </p>

            {/* Greeting */}
            <p className="mt-6 sm:mt-7 text-base sm:text-lg text-gray-500">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="mt-2 text-[2.8rem] leading-[1.05] sm:text-5xl lg:text-7xl font-black text-[#2E2E2E] tracking-tight">
              Sreelakshmi
              <span className="text-[#00246B]"> R</span>
            </h1>

            {/* Typewriter */}
            <div className="mt-6 sm:mt-8 min-h-[32px]">
              <h2 className="text-xl sm:text-2xl text-[#00246B] font-semibold">
                <Typewriter
                  words={[
                    "Aspiring Software Engineer",
                    "Full Stack Developer",
                    "React Developer",
                    "AI Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={45}
                  delaySpeed={1800}
                />
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg mt-6 sm:mt-7 leading-7 sm:leading-8 max-w-xl">
              Passionate about building modern web applications with
              React, Node.js and AI. I enjoy transforming ideas into
              scalable, user-friendly digital experiences.
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00246B] text-white px-4 sm:px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition font-medium"
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="https://github.com/Sreelakshmii-R"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-400 px-4 sm:px-6 py-3 rounded-xl hover:border-[#00246B] hover:text-[#00246B] transition flex items-center justify-center gap-2 font-medium"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sreelakshmi62380/"
                target="_blank"
                rel="noreferrer"
                className="col-span-2 sm:col-span-1 border border-gray-400 px-4 sm:px-6 py-3 rounded-xl hover:border-[#00246B] hover:text-[#00246B] transition flex items-center justify-center gap-2 font-medium"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-14 max-w-md">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00246B]">
                  5+
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00246B]">
                  10+
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  Technologies
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00246B]">
                  2026
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  Graduate
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center mt-2 lg:mt-0"
          >
            {/* Floating React */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-0 left-2 sm:left-8 bg-white p-3 sm:p-4 rounded-2xl shadow-lg z-10"
            >
              <FaReact
                size={24}
                className="sm:w-7 sm:h-7"
                color="#61DBFB"
              />
            </motion.div>

            {/* Floating JS */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute right-2 sm:right-0 top-12 sm:top-20 bg-white p-3 sm:p-4 rounded-2xl shadow-lg z-10"
            >
              <SiJavascript
                size={24}
                className="sm:w-7 sm:h-7"
                color="#F7DF1E"
              />
            </motion.div>

            {/* Floating Node */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute left-0 sm:left-2 bottom-16 sm:bottom-20 bg-white p-3 sm:p-4 rounded-2xl shadow-lg z-10"
            >
              <FaNodeJs
                size={24}
                className="sm:w-7 sm:h-7"
                color="#3C873A"
              />
            </motion.div>

            {/* Floating Supabase */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute bottom-2 right-3 sm:right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-lg z-10"
            >
              <SiSupabase
                size={24}
                className="sm:w-7 sm:h-7"
                color="#3ECF8E"
              />
            </motion.div>

            {/* Profile Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-[30px] sm:rounded-[40px] shadow-2xl p-5 sm:p-8 border border-gray-100"
            >
              <img
                src={profile}
                alt="Sreelakshmi"
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-8 border-[#EAF1FF]"
              />

              <div className="text-center mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sreelakshmi Ramesh
                </h3>

                <p className="text-[#00246B] mt-2">
                  Aspiring Software Engineer
                </p>

                <span className="inline-block mt-4 sm:mt-5 px-4 sm:px-5 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold">
                  🟢 Open to work
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}