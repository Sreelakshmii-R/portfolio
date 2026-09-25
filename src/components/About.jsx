import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base text-[#00246B] font-semibold uppercase tracking-[3px]">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 text-[#1F2937] leading-tight">
            Turning ideas into
            <span className="text-[#00246B]"> real products.</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-10 sm:mt-14">

          {/* LEFT — About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg">
              I'm <strong>Sreelakshmi Ramesh</strong>, a Bachelor of
              Computer Applications student passionate about building
              modern web applications and AI-powered solutions.
            </p>

            <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mt-6">
              I'm currently expanding my skills in Full Stack Development
              while creating projects that solve real-world problems.
            </p>

            <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mt-6">
              My goal is to build impactful digital products,
              continuously learn new technologies, and grow as a
              software engineer.
            </p>
          </motion.div>

          {/* RIGHT — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">

              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00246B]">
                  3+
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Projects
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00246B]">
                  React
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Frontend
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00246B]">
                  AI
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Projects
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00246B]">
                  Full Stack
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Development
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}