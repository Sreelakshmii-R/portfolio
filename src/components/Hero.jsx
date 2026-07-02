import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDownload,
} from "react-icons/fa";
import { SiJavascript, SiSupabase } from "react-icons/si";

import profile from "../assets/profile.png";
import resume from "../assets/myResume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#FBFBFB] flex items-center pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[4px] text-[#00246B] font-semibold">
          WELCOME TO MY PORTFOLIO
          </p>

          <p className="mt-6 text-lg text-gray-500">
          Hi, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-3 leading-tight text-[#2E2E2E]">
          Sreelakshmi R
          <br />
          
          </h1>

          <h2 className="text-2xl mt-8 text-[#00246B] font-semibold h-10">

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

          <p className="text-gray-600 text-lg mt-8 leading-8 max-w-xl">
            Passionate about building modern web applications with
            React, Node.js and AI. I enjoy transforming ideas into
            scalable, user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href={resume}
              className="bg-[#00246B] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="https://github.com/Sreelakshmii-R"
              target="_blank"
              rel="noreferrer"
              className="border px-6 py-3 rounded-xl hover:border-[#00246B] hover:text-[#00246B] transition flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sreelakshmi62380/"
              target="_blank"
              rel="noreferrer"
              className="border px-6 py-3 rounded-xl hover:border-[#00246B] hover:text-[#00246B] transition flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          {/* Stats */}

          <div className="flex gap-12 mt-14">

            <div>
              <h3 className="text-3xl font-bold text-[#00246B]">
                3+
              </h3>

              <p className="text-gray-500">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#00246B]">
                10+
              </h3>

              <p className="text-gray-500">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#00246B]">
                2026
              </h3>

              <p className="text-gray-500">
                Graduate
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative flex justify-center"
        >

          {/* Floating Icons */}

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-0 left-8 bg-white p-4 rounded-2xl shadow-lg"
          >
            <FaReact size={28} color="#61DBFB" />
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute right-0 top-20 bg-white p-4 rounded-2xl shadow-lg"
          >
            <SiJavascript size={28} color="#F7DF1E" />
          </motion.div>

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-2 bottom-20 bg-white p-4 rounded-2xl shadow-lg"
          >
            <FaNodeJs size={28} color="#3C873A" />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute bottom-4 right-6 bg-white p-4 rounded-2xl shadow-lg"
          >
            <SiSupabase size={28} color="#3ECF8E" />
          </motion.div>

          {/* Profile */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-[40px] shadow-2xl p-8 border border-gray-100"
          >

            <img
              src={profile}
              alt="Sreelakshmi"
              className="w-80 h-80 object-cover rounded-full border-8 border-[#EAF1FF]"
            />

            <div className="text-center mt-8">

              <h3 className="text-2xl font-bold">
                Sreelakshmi R
              </h3>

              <p className="text-[#00246B] mt-2">
                Aspiring Software Engineer
              </p>

              <span className="inline-block mt-5 px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                🟢 Open to work
              </span>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}