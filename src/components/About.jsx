import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#00246B] font-semibold uppercase tracking-[3px]">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#1F2937]">
            Turning ideas into
            <span className="text-[#00246B]"> real products.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 mt-14">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-600 leading-8 text-lg">
            I'm <strong>Sreelakshmi Ramesh</strong>, a Bachelor of Computer Applications student passionate about building modern web applications and AI-powered solutions.

            <br />
            <br />
            I'm currently expanding my skills in Full Stack Development while creating projects that solve real-world problems.
            </p>

            <p className="text-gray-600 leading-8 text-lg mt-6">
            My goal is to build impactful digital products, continuously learn new technologies, and grow as a software engineer.
            </p>


          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#00246B]">3+</h3>
                <p className="mt-2 text-gray-600">
                  Projects
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#00246B]">
                  React
                </h3>
                <p className="mt-2 text-gray-600">
                  Frontend
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#00246B]">
                  AI
                </h3>
                <p className="mt-2 text-gray-600">
                  Projects
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#00246B]">
                  Full
                </h3>
                <p className="mt-2 text-gray-600">
                  Stack
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}