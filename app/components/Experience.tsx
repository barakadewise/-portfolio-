import { Variants, motion } from "framer-motion";
import { FaBriefcase, FaCodeBranch, FaLaptopCode } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: "easeOut" },
  }),
};

const experiences = [
  {
    icon: <FaLaptopCode />,
    role: "Software Developer",
    company: "Mainstream group Limited",
    period: "july- 2026 – current",
    description:
      "Building heigher perfomance  REST API's with laravel .Developed cross-platform mobile apps using Flutter ",
    current: true,
  },
  {
    icon: <FaLaptopCode />,
    role: "Software Developer",
    company: "Bluetick Technologies Limited",
    period: "Jan 2024 –june 2026",
    description:
      "Built responsive and accessible UIs using HTML, Tailwind CSS, and Laravel. Collaborated with cross-functional teams to deliver scalable web apps.",
    current: false,
  },
  {
    icon: <FaBriefcase />,
    role: "Mobile Developer",
    company: "Freelancer",
    period: "Jun 2022 – Dec 2022",
    description:
      "Developed cross-platform mobile apps using Flutter. Integrated REST APIs and Firebase for real-time data handling.",
    current: false,
  },
  {
    icon: <FaCodeBranch />,
    role: "Backend Intern",
    company: "Code Block Company Limited",
    period: "Mar 2021 – May 2022",
    description:
      "Worked on backend systems using Node.js and Laravel. Gained experience with PostgreSQL and RESTful API design.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#080d1a] py-28 px-10 border-t border-white/5"
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
            Experience
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
          My Work Journey
        </motion.h2>

        {/* subtitle */}
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm leading-[1.85] text-slate-500 max-w-[480px]
                     border-l-2 border-blue-500/30 pl-4 mb-14"
        >
          A timeline of roles where I've shipped real products and grown as an
          engineer.
        </motion.p>

        {/* timeline */}
        <div className="relative pl-8">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-blue-500/15" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={0.1 + index * 0.15}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* dot */}
              <span
                className={`absolute -left-8 top-5 w-[14px] h-[14px] rounded-full border-2 border-[#080d1a]
                  ${
                    exp.current
                      ? "bg-emerald-400 shadow-[0_0_12px_#34d399]"
                      : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,.5)]"
                  }`}
              />

              {/* card */}
              <div
                className="bg-[#0d1426] border border-blue-500/10 rounded-2xl p-6
                           hover:border-blue-500/30 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    {exp.current && (
                      <span
                        className="inline-block mb-2 font-mono text-[.65rem] font-semibold
                                       uppercase tracking-widest text-emerald-400
                                       bg-emerald-400/10 px-2.5 py-1 rounded-full"
                      >
                        ● Current
                      </span>
                    )}
                    <h3 className="text-[1rem] font-bold text-slate-100 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-[.8rem] font-medium text-blue-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="font-mono text-[.72rem] text-slate-500
                                   bg-slate-800/60 px-3 py-1.5 rounded-full whitespace-nowrap"
                  >
                    {exp.period}
                  </span>
                </div>

                <p className="text-[.84rem] leading-[1.8] text-slate-500 border-l-2 border-blue-500/20 pl-3">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
