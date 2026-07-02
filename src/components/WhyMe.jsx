import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const qualities = [
  {
    icon: <FaLaptopCode size={32} />,
    title: "Full-Stack Development",
    text: "I enjoy building responsive web applications from frontend interfaces to backend APIs.",
  },
  {
    icon: <FaRocket size={32} />,
    title: "Fast Learner",
    text: "I quickly adapt to new technologies and enjoy continuously improving my skills.",
  },
  {
    icon: <FaLightbulb size={32} />,
    title: "Problem Solver",
    text: "I love breaking complex problems into simple, practical solutions.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Team Collaboration",
    text: "Comfortable working with Git, GitHub, and collaborating on software projects.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-28 bg-[#F8FAFC] px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#00246B] font-semibold">
            Why Choose Me
          </p>

          <h2 className="text-5xl font-bold mt-4 text-[#2E2E2E]">
            What I Bring
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {qualities.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
            >

              <div className="text-[#00246B] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}