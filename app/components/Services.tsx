

import { Variants, motion } from "framer-motion";
import {
  FaClipboardList,
  FaComments,
  FaLaptopCode,
  FaMobileAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

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
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile App & UI Design",
    desc: "Beautiful interfaces and Flutter apps built with a focus on smooth, intuitive user experiences.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Fast, responsive web apps built with React, Next.js, and modern backend tools.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Payment Integration",
    desc: "Secure gateway integrations — M-Pesa, PayPal, and Stripe — for smooth transactions.",
  },
  {
    icon: <FaComments />,
    title: "ICT Consultation",
    desc: "Strategic tech planning, digital transformation, and ICT system architecture guidance.",
  },
  {
    icon: <FaClipboardList />,
    title: "Requirements Analysis",
    desc: "Translating ideas and business goals into clear, actionable technical specifications.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            What I Offer
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
          My Services
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
          Each service is tailored to deliver value, speed, and digital impact.
        </motion.p>

        {/* grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="group relative bg-[#111827] border border-blue-500/10 rounded-2xl p-6
                         hover:border-blue-500/30 hover:-translate-y-1
                         transition-all duration-200 overflow-hidden"
            >
              {/* top accent line reveals on hover */}
              <span
                className="absolute inset-x-0 top-0 h-[2px]
                           bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />

              {/* icon chip */}
              <div
                className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20
                           flex items-center justify-center text-blue-400 text-lg mb-5
                           group-hover:bg-blue-500/15 transition-colors"
              >
                {service.icon}
              </div>

              <h3 className="text-[.95rem] font-bold text-slate-100 mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[.82rem] leading-[1.75] text-slate-500">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}