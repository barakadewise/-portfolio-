import { motion, Variants } from "framer-motion";
import { DiDjango, DiMysql, DiPostgresql } from "react-icons/di";
import {
  FaGithub,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
const iconVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const icons = [
  { Icon: FaHtml5, title: "HTML5" },
  { Icon: FaFlutter, title: "Flutter" },
  { Icon: FaReact, title: "React" },
  { Icon: FaNodeJs, title: "Node.js" },
  { Icon: FaPython, title: "Python" },
  { Icon: FaGithub, title: "Git" },
  { Icon: FaLaravel, title: "Laravel" },
  { Icon: DiPostgresql, title: "PostgreSQL" },
  { Icon: DiMysql, title: "MySQL" },
  { Icon: RiTailwindCssFill, title: "Tailwind CSS" },
  { Icon: DiDjango, title: "Django" },
  { Icon: SiTypescript, title: "Typescript" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-white dark:bg-gray-950 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-widest text-blue-500 font-semibold"
      >
        About
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2"
      >
        My Tech Stack
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto mt-3 text-gray-600 dark:text-gray-400"
      >
        I enjoy working across the full stack to build robust, accessible, and
        visually pleasing apps. Here are the core tools and languages I use
        regularly:
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 text-4xl text-blue-500 dark:text-blue-400 justify-items-center mx-auto"
      >
        {icons.map(({ Icon, title }, i) => (
          <motion.div key={title} custom={i} variants={iconVariants}>
            <Icon title={title} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
