import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const qualities = [
  {
    icon: <FaLaptopCode />,
    title: "Software Development",
    text: "I enjoy building practical software solutions, from responsive web applications and backend APIs to AI-powered applications.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Development",
    text: "I enjoy building responsive web applications from frontend interfaces to backend APIs.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Learner",
    text: "I quickly adapt to new technologies and enjoy continuously improving my skills.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    text: "I love breaking complex problems into simple, practical solutions.",
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration",
    text: "Comfortable working with Git, GitHub, and collaborating on software projects.",
  },
];

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#00246B] font-semibold text-sm sm:text-base">
            Why Choose Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 text-[#2E2E2E]">
            What I Bring
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base leading-7">
            A combination of technical skills, curiosity, adaptability, and
            a practical approach to building software.
          </p>
        </motion.div>

        {/* Quality Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {qualities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
              }}
              className="flex flex-col bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EAF1FF] flex items-center justify-center text-[#00246B] text-xl sm:text-2xl mb-5 sm:mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#2E2E2E] leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-7">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}