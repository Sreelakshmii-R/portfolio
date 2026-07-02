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
      className="py-32 bg-[#00246B] text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[4px] text-blue-200"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mt-5"
        >
          Let's Build Something Amazing Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-8 text-blue-100 text-lg leading-8 max-w-3xl mx-auto"
        >

          I enjoy turning ideas into modern, intuitive, and impactful digital experiences. I'm always open to exciting collaborations, software engineering roles, internships, and opportunities to work on meaningful projects. If you'd like to build something together or simply connect, I'd love to hear from you.

          
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <motion.a
            whileHover={{ y: -5 }}
            href="mailto:YOUR_EMAIL"
            className="bg-white text-[#00246B] rounded-3xl p-8 flex items-center gap-5 shadow-xl"
          >
            <FaEnvelope size={30} />

            <div className="text-left">
              <h3 className="font-bold text-xl">
                Email
              </h3>

              <p className="text-gray-600">
                sreelakshmiramesh296@gmail.com
              </p>
            </div>

          </motion.a>

          <motion.a
            whileHover={{ y: -5 }}
            href="https://www.linkedin.com/in/sreelakshmi62380/"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#00246B] rounded-3xl p-8 flex items-center gap-5 shadow-xl"
          >
            <FaLinkedin size={30} />

            <div className="text-left">
              <h3 className="font-bold text-xl">
                LinkedIn
              </h3>

              <p className="text-gray-600">
                Connect with me
              </p>
            </div>

          </motion.a>

          <motion.a
            whileHover={{ y: -5 }}
            href="https://github.com/Sreelakshmii-R"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#00246B] rounded-3xl p-8 flex items-center gap-5 shadow-xl"
          >
            <FaGithub size={30} />

            <div className="text-left">
              <h3 className="font-bold text-xl">
                GitHub
              </h3>

              <p className="text-gray-600">
                View my projects
              </p>
            </div>

          </motion.a>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white text-[#00246B] rounded-3xl p-8 flex items-center gap-5 shadow-xl"
          >
            <FaMapMarkerAlt size={30} />

            <div className="text-left">
              <h3 className="font-bold text-xl">
                Location
              </h3>

              <p className="text-gray-600">
                Palakkad, Kerala, India
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}