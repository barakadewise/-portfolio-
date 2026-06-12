
import { Variants, motion } from "framer-motion";
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: "easeOut" },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" },
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
  { Icon: SiTypescript, title: "TypeScript" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d1220] py-28 px-10 border-t border-white/5"
    >
      <div className="max-w-[1140px] mx-auto">

        {/* section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-4 h-px bg-blue-500" />
          <span className="font-mono text-[11px] uppercase tracking-[.15em] text-blue-400">
            About
          </span>
        </motion.div>

        {/* title */}
        <motion.h2
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[2rem] font-black tracking-tight text-slate-50 mb-3"
        >
          My Tech Stack
        </motion.h2>

        {/* subtitle */}
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm leading-[1.85] text-slate-500 max-w-[480px]
                     border-l-2 border-blue-500/30 pl-4"
        >
          I work across the full stack to build robust, accessible, and visually
          polished products. Here are the core tools and languages I use regularly.
        </motion.p>

        {/* grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
        >
          {icons.map(({ Icon, title }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              className="group flex flex-col items-center gap-2 py-5 px-3
                         bg-[#111827] border border-blue-500/10 rounded-xl
                         hover:border-blue-500/40 hover:bg-[#1a2540]
                         hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <Icon
                title={title}
                className="text-[1.75rem] text-blue-400 group-hover:text-blue-300 transition-colors"
              />
              <span className="font-mono text-[.65rem] text-slate-500 tracking-wide text-center">
                {title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}