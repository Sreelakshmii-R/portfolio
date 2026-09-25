import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 sm:py-24 lg:py-28 bg-[#00246B] text-white scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base uppercase tracking-[3px] sm:tracking-[4px] text-blue-200 font-semibold"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 leading-tight"
          >
            Let's Build Something Amazing Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-blue-100 text-base sm:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto"
          >
            I enjoy turning ideas into modern, intuitive, and impactful
            digital experiences. I'm always open to exciting collaborations,
            software engineering roles, internships, and opportunities to work
            on meaningful projects. If you'd like to build something together
            or simply connect, I'd love to hear from you.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-14 lg:mt-16">

          {/* Email */}
          <motion.a
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="mailto:sreelakshmiramesh296@gmail.com"
            className="bg-white text-[#00246B] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 flex items-center gap-4 sm:gap-5 shadow-xl hover:shadow-2xl transition"
          >
            <FaEnvelope className="text-2xl sm:text-3xl flex-shrink-0" />

            <div className="text-left min-w-0">
              <h3 className="font-bold text-lg sm:text-xl">
                Email
              </h3>

              <p className="text-gray-600 text-sm sm:text-base break-all mt-1">
                sreelakshmiramesh296@gmail.com
              </p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="https://www.linkedin.com/in/sreelakshmi62380/"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#00246B] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 flex items-center gap-4 sm:gap-5 shadow-xl hover:shadow-2xl transition"
          >
            <FaLinkedin className="text-2xl sm:text-3xl flex-shrink-0" />

            <div className="text-left">
              <h3 className="font-bold text-lg sm:text-xl">
                LinkedIn
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Connect with me
              </p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="https://github.com/Sreelakshmii-R"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#00246B] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 flex items-center gap-4 sm:gap-5 shadow-xl hover:shadow-2xl transition"
          >
            <FaGithub className="text-2xl sm:text-3xl flex-shrink-0" />

            <div className="text-left">
              <h3 className="font-bold text-lg sm:text-xl">
                GitHub
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mt-1">
                View my projects
              </p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-[#00246B] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 flex items-center gap-4 sm:gap-5 shadow-xl"
          >
            <FaMapMarkerAlt className="text-2xl sm:text-3xl flex-shrink-0" />

            <div className="text-left">
              <h3 className="font-bold text-lg sm:text-xl">
                Location
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Palakkad, Kerala, India
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}