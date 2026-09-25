import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import lsdLogo from "../assets/lsd-logo.png";

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#00246B] font-semibold text-sm sm:text-base">
            Professional Experience
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 text-[#2E2E2E]">
            Experience
          </h2>

          <p className="text-gray-500 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-7">
            Practical experience contributing to real-world website
            development and software projects.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 sm:mt-12 lg:mt-14 bg-[#F8FAFC] rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-7 lg:p-10"
        >
          {/* Company Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-6">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2">
                <img
                  src={lsdLogo}
                  alt="LSD Productions"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2E2E] leading-tight">
                  Software Development Intern
                </h3>

                <p className="text-base sm:text-lg font-semibold text-[#00246B] mt-2">
                  LSD Productions
                </p>
              </div>
            </div>

            <span className="self-start px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold whitespace-nowrap">
              Currently Working
            </span>
          </div>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-7 text-sm sm:text-base text-gray-500">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#00246B] flex-shrink-0" />
              <span>Sep 2026 – Present</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#00246B] flex-shrink-0" />
              <span>Kochi, Kerala</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 sm:mt-8">
            <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base lg:text-lg">
              Working as a Software Development Intern, contributing to
              website development and improvement tasks while gaining
              practical experience in a professional software environment.
            </p>

            {/* Key Contributions */}
            <div className="mt-6 sm:mt-7">
              <h4 className="text-base sm:text-lg font-bold text-[#2E2E2E] mb-3 sm:mb-4">
                Key Contributions
              </h4>

              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#00246B] font-bold mt-0.5">•</span>
                  <span>
                    Developed and updated web pages based on project
                    requirements and design needs.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#00246B] font-bold mt-0.5">•</span>
                  <span>
                    Contributed to the development and improvement of the
                    PoshESalon website.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#00246B] font-bold mt-0.5">•</span>
                  <span>
                    Worked on updates and improvements to the LSD Productions
                    website.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#00246B] font-bold mt-0.5">•</span>
                  <span>
                    Collaborated on website development tasks and adapted
                    implementations based on project requirements.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Selected Work */}
          <div className="mt-8 sm:mt-10 pt-7 sm:pt-8 border-t border-gray-200">
            <h4 className="text-lg sm:text-xl font-bold text-[#2E2E2E] mb-5">
              Selected Work
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* PoshESalon */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h5 className="text-base sm:text-lg font-bold text-[#00246B]">
                  PoshESalon Website
                </h5>

                <p className="text-sm sm:text-base text-gray-600 leading-7 mt-3">
                  Contributed to the development and improvement of the
                  PoshESalon website, working on website updates and
                  implementation based on project requirements.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
                    Web Development
                  </span>

                  <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
                    UI Development
                  </span>
                </div>

                <a
                  href="https://poshesalon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm sm:text-base font-semibold text-[#00246B] hover:text-blue-700 transition-colors"
                >
                  Visit Website
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>

              {/* LSD Productions */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h5 className="text-base sm:text-lg font-bold text-[#00246B]">
                  LSD Productions Website
                </h5>

                <p className="text-sm sm:text-base text-gray-600 leading-7 mt-3">
                  Contributed to website updates and improvements,
                  implementing changes based on project requirements and
                  design needs.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
                    Web Development
                  </span>

                  <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
                    Website Improvement
                  </span>
                </div>

                <a
                  href="https://lsd.productions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm sm:text-base font-semibold text-[#00246B] hover:text-blue-700 transition-colors"
                >
                  Visit Website
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-7 sm:mt-8">
            <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
              Software Development
            </span>

            <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
              Web Development
            </span>

            <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
              UI Development
            </span>

            <span className="px-3 py-1.5 bg-[#EAF1FF] text-[#00246B] rounded-full text-xs sm:text-sm font-medium">
              AI-Assisted Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}