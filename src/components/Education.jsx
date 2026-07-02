import { motion } from "framer-motion";

const education = [
  {
    year: "2023 – 2026",
    title: "Bachelor of Computer Applications (BCA)",
    place: "Sree Narayana Guru College, Coimbatore",
    description:
      "Pursued a Bachelor's degree with a strong focus on full-stack web development, AI-powered applications, databases, and software engineering.",
  },
  {
    year: "2021 – 2023",
    title: "Higher Secondary Education",
    place: "Bio-Science Stream",
    description:
      "Completed Higher Secondary Education with 94.4%, developing strong analytical and problem-solving skills before transitioning into computer science.",
  },
  {
    year: "2020 – 2021",
    title: "SSLC",
    place: "Secondary School Education",
    description:
      "Graduated with Full A+ in all subjects, demonstrating consistent academic excellence and dedication.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 bg-white px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-[#00246B] font-semibold">
            Education
          </p>

          <h2 className="text-5xl font-bold text-[#2E2E2E] mt-4">
            My Journey
          </h2>
        </div>

        <div className="relative border-l-4 border-[#00246B] ml-6">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-16 ml-8 relative"
            >
              <div className="absolute -left-[46px] top-2 w-6 h-6 rounded-full bg-[#00246B] border-4 border-white shadow-lg"></div>

              <span className="text-[#00246B] font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 font-medium">
                {item.place}
              </p>

              <p className="text-gray-500 mt-3 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}