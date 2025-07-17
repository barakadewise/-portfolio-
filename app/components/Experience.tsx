import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import { FaLaptopCode, FaBriefcase, FaCodeBranch } from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    role: "Software Developer",
    company: "Bluetick technologies limited",
    period: "Jan 2024 - Present",
    description:
      "Built responsive and accessible UIs using Html, Tailwind CSS, and Laravel. Collaborated with cross-functional teams to deliver scalable web apps.",
  },
  {
    icon: <FaBriefcase />,
    role: "Mobile Developer",
    company: "Freelncer",
    period: "Jun 2022 - Dec 2022",
    description:
      "Developed cross-platform mobile apps using Flutter. Integrated REST APIs and Firebase for real-time data handling.",
  },
  {
    icon: <FaCodeBranch />,
    role: "Backend Intern",
    company: "Code block company limited",
    period: "Mar 2021 - May 2022",
    description:
      "Worked on backend systems using Node.js and Laravel. Gained experience with PostgreSQL and RESTful API design.",
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 bg-gray-50 dark:bg-gray-900 text-center"
      
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-widest text-blue-500 font-semibold"
      >
        Experience
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2"
      >
        My Work Journey
      </motion.h3>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-left border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
          >
            <div className="text-4xl text-blue-500 mb-4">{exp.icon}</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {exp.role}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {exp.company} &middot; {exp.period}
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
