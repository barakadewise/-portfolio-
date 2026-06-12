// import Image from "next/image";

// import { Variants, motion } from "framer-motion";
// import { FaEnvelope, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const navVariants: Variants = {
//   hidden: { y: -50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.8, type: "spring", bounce: 0.4 },
//   },
// };

// const imageVariants: Variants = {
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 1, type: "spring", bounce: 0.5 },
//   },
// };

// const textVariants: Variants = {
//   hidden: { x: 100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 1, type: "spring", bounce: 0.5 },
//   },
// };

// export default function Hero() {
//   return (
//     <>
//       <section
//         id="hero"
//         className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#e0f2fe] to-[#fefce8] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
//       >
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full filter blur-3xl animate-pulse -z-10" />

//         <motion.nav
//           variants={navVariants}
//           initial="hidden"
//           animate="visible"
//           className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 py-4"
//         >
//           <ul className="flex justify-center gap-8 font-medium text-lg">
//             <li>
//               <a
//                 href="#about"
//                 className="hover:text-green-700 transition-colors"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 className="hover:text-green-700 transition-colors"
//               >
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="hover:text-green-700 transition-colors"
//               >
//                 Services
//               </a>
//             </li>
//             {/* <li>
//               <a
//                 href="#projects"
//                 className="hover:text-blue-600 transition-colors"
//               >
//                 Projects
//               </a>
//             </li> */}
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-green-700 transition-colors"
//               >
//                 Contacts
//               </a>
//             </li>
//           </ul>
//         </motion.nav>

//         <div className="mt-32 flex flex-col md:flex-row items-center gap-10">
//           <motion.div
//             variants={imageVariants}
//             initial="hidden"
//             animate="visible"
//             className="relative w-60 h-60 md:w-72 md:h-72 rounded-[1.25rem] overflow-hidden shadow-2xl border-4 border-blue-500/60 hover:scale-105 transition-transform duration-500"
//           >
//             <Image
//               src="/baraka.jpeg"
//               alt="Baraka Lukumay"
//               layout="fill"
//               objectFit="cover"
//             />
//           </motion.div>

//           <motion.div
//             variants={textVariants}
//             initial="hidden"
//             animate="visible"
//             className="text-center md:text-left"
//           >
//             <p className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-400">
//               Hi, my name is
//             </p>
//             <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
//               Baraka Lukumay
//             </h1>
//             <h2 className="text-l md:text-3xl font-medium text-gray-700 dark:text-gray-300 mt-2">
//               Software developer
//             </h2>

//             <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl">
//               I'm a full-stack developer with a passion for designing intuitive,
//               responsive apps. I specialize in creating high-performing
//               web/mobile experiences using modern tools like Next.js, laravel,
//               Flutter, and more.
//             </p>

//             <div className="mt-6 flex justify-center md:justify-start gap-4">
//               <a
//                 href="#"
//                 onClick={() => window.open('/resume.pdf', '_blank')}
//                 className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform"
//               >
//                 Download CV
//               </a>
//               <a
//                 href="#contact"
//                 className="px-6 py-2 border border-gray-700 dark:border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 Let's Talk
//               </a>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
//               className="mt-6 flex gap-5 justify-center md:justify-start text-2xl text-gray-700 dark:text-gray-300"
//             >
//               <a
//                 href="https://www.instagram.com/barakadewise?igsh=MXZkMmJ2aDNmcWR1dA=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://x.com/_01dewise?t=trqrHGos2-kPnMDKSovYkQ&s=08"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Twitter"
//               >
//                 <FaXTwitter />
//               </a>
//               <a
//                 href="https://github.com/barakadewise"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//               >
//                 <FaGithub />
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { Variants, motion } from "framer-motion";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight, HiDownload } from "react-icons/hi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: "easeOut" },
  }),
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const navVariants: Variants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stats = [
  { num: "3", suffix: "+", label: "Years exp." },
  { num: "10", suffix: "+", label: "Projects" },
  { num: "12", suffix: "+", label: "Tech stack" },
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

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col bg-[#080d1a] text-slate-200"
    >
      {/* ── Nav ── */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 h-16
                   bg-[#080d1a]/90 backdrop-blur-lg border-b border-white/5"
      >
        <span className="font-mono text-[13px] tracking-wide text-blue-400">
          <span className="text-slate-200">baraka</span>.dev
        </span>

        <ul className="flex gap-5 md:gap-10 list-none">
          {["About", "Experience", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-medium uppercase tracking-widest
                           text-slate-500 hover:text-slate-200 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* ── Hero body ── */}
      <div className="flex flex-1 flex-col-reverse md:flex-row items-center px-5 md:px-10 max-w-[1140px] mx-auto w-full gap-10 md:gap-20 py-12 md:py-16">

        {/* ── Left: text ── */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* availability tag */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center md:justify-start gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[.15em] text-blue-400">
              Available for new projects
            </span>
          </motion.div>

          {/* name */}
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2.8rem,5vw,4rem)] font-black leading-[1.05] tracking-tight text-slate-50 mb-2"
          >
            Baraka
            <span className="block bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400
                             bg-clip-text text-transparent">
              Lukumay
            </span>
          </motion.h1>

          {/* role */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base font-semibold text-slate-400 mb-8 tracking-wide"
          >
            Full-Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;Web &amp; Mobile
          </motion.p>

          {/* description */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm leading-[1.85] text-slate-500 max-w-[420px] mb-10
                       border-l-2 border-blue-500/30 pl-4 md:text-left"
          >
            I build fast, accessible web and mobile products using Next.js,
            Laravel, and Flutter — from idea to production.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center md:justify-start gap-4 mb-10"
          >
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="flex items-center gap-2 px-6 py-[.65rem] rounded-lg
                         bg-gradient-to-r from-blue-600 to-violet-700
                         text-white text-[.83rem] font-semibold tracking-wide
                         hover:opacity-90 hover:-translate-y-px transition-all"
            >
              <HiDownload className="text-[15px]" />
              Download CV
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-[.65rem] rounded-lg
                         border border-slate-700 text-slate-400 text-[.83rem] font-medium
                         hover:border-blue-500 hover:text-blue-400 transition-all"
            >
              Let's Talk
              <HiArrowRight className="text-[14px]" />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mr-1">
              Find me
            </span>
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center
                           text-slate-500 text-[15px]
                           hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5
                           transition-all"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: photo + stats ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0 flex flex-col items-center gap-5 w-full md:w-auto"
        >
          {/* photo frame */}
          <div className="relative w-full max-w-[300px] md:w-[300px] h-[300px] md:h-[360px]">
            {/* gradient background */}
            <div className="absolute inset-0 rounded-3xl
                            bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-cyan-500/8
                            border border-blue-500/20" />

            {/* corner accents */}
            {[
              "top-[-1px] left-[-1px] border-t-2 border-l-2 rounded-tl",
              "top-[-1px] right-[-1px] border-t-2 border-r-2 rounded-tr",
              "bottom-[-1px] left-[-1px] border-b-2 border-l-2 rounded-bl",
              "bottom-[-1px] right-[-1px] border-b-2 border-r-2 rounded-br",
            ].map((cls, i) => (
              <span
                key={i}
                className={`absolute w-4 h-4 border-blue-400 ${cls}`}
              />
            ))}

            {/* photo */}
            <div className="absolute inset-2 rounded-[18px] overflow-hidden bg-slate-900">
              <Image
                src="/baraka.jpeg"
                alt="Baraka Lukumay"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* stats row */}
          <div className="flex w-full rounded-xl overflow-hidden gap-px bg-slate-800/40">
            {stats.map(({ num, suffix, label }) => (
              <div
                key={label}
                className="flex-1 bg-[#0d1426] py-3 flex flex-col items-center"
              >
                <span className="font-mono text-xl font-extrabold text-slate-100 leading-none">
                  {num}
                  <span className="text-blue-400">{suffix}</span>
                </span>
                <span className="text-[.6rem] uppercase tracking-widest text-slate-500 mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}