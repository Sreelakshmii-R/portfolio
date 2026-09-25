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
    <section
      id="education"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm sm:text-base uppercase tracking-[3px] sm:tracking-[4px] text-[#00246B] font-semibold">
            Education
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mt-3 sm:mt-4">
            My Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">

          {/* Timeline line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[3px] bg-[#00246B]" />

          <div className="space-y-10 sm:space-y-14 lg:space-y-16">

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#00246B] border-4 border-white shadow-md" />

                {/* Content */}
                <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition">

                  <span className="inline-block text-sm sm:text-base text-[#00246B] font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold mt-2 text-[#1F2937] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 font-medium text-sm sm:text-base">
                    {item.place}
                  </p>

                  <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}