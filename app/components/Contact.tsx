
import { Variants, motion } from "framer-motion";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone } from "react-icons/hi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: "easeOut" },
  }),
};

const contactItems = [
  {
    icon: <HiPhone className="text-xl text-blue-400" />,
    label: "Phone",
    value: "+255 763 993 194",
    href: "tel:+255763993194",
  },
  {
    icon: <HiMail className="text-xl text-blue-400" />,
    label: "Email",
    value: "barakadewise@gmail.com",
    href: "mailto:barakadewise@gmail.com",
  },
];

const socials = [
  {
    href: "https://www.instagram.com/barakadewise?igsh=MXZkMmJ2aDNmcWR1dA==",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://x.com/_01dewise?t=trqrHGos2-kPnMDKSovYkQ&s=08",
    label: "Twitter",
    icon: <FaXTwitter />,
  },
  {
    href: "https://github.com/barakadewise",
    label: "GitHub",
    icon: <FaGithub />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#080d1a] py-28 px-5 border-t border-white/5 "
    >
      <div className="max-w-[1140px] mx-auto flex flex-col items-center">

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
            Let's Connect
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
          Contact Me
        </motion.h2>

        {/* subtitle */}
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm leading-[1.85] text-slate-500 max-w-[440px]
                     border-l-2 border-blue-500/30 pl-4 mb-14"
        >
          Have a project in mind or want to work together? I'm always open to a
          conversation — reach out through any of the channels below.
        </motion.p>

        {/* contact card */}
        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0d1426] border border-blue-500/10 rounded-2xl p-8
                     max-w-[540px] flex flex-col gap-4"
        >
          {contactItems.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 px-5 py-4 rounded-xl
                         border border-slate-800 text-slate-400
                         hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5
                         transition-all duration-200 group"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10
                               flex items-center justify-center
                               group-hover:bg-blue-500/15 transition-colors">
                {icon}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[.65rem] uppercase tracking-widest text-slate-600 mb-0.5">
                  {label}
                </span>
                <span className="text-[.9rem] font-medium">{value}</span>
              </div>
            </a>
          ))}

          {/* divider */}
          <div className="flex items-center gap-3 pt-2">
            <span className="flex-1 h-px bg-slate-800" />
            <span className="font-mono text-[.65rem] uppercase tracking-widest text-slate-600">
              or find me on
            </span>
            <span className="flex-1 h-px bg-slate-800" />
          </div>

          {/* socials */}
          <div className="flex gap-3">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                           border border-slate-800 text-slate-500 text-sm
                           hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5
                           transition-all duration-200"
              >
                {icon}
                <span className="text-[.78rem] font-medium">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* footer */}
      <motion.div
        custom={0.5}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1140px] mx-auto mt-24 pt-8 border-t border-white/5
                   flex items-center justify-between flex-wrap gap-4"
      >
        <span className="font-mono text-[11px] text-slate-600 tracking-wide">
          <span className="text-slate-500">baraka</span>.dev
        </span>
        <span className="font-mono text-[11px] text-slate-700">
          © 2026 Baraka Lukumay · All rights reserved
        </span>
      </motion.div>
    </section>
  );
}