import Image from "next/image";
import Link from "next/link";
import { Variants, motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, type: "spring", bounce: 0.4 },
  },
};

const imageVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring", bounce: 0.5 },
  },
};

const textVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring", bounce: 0.5 },
  },
};

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#e0f2fe] to-[#fefce8] dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full filter blur-3xl animate-pulse -z-10" />

        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 py-4"
        >
          <ul className="flex justify-center gap-8 font-medium text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-green-700 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-green-700 transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-green-700 transition-colors"
              >
                Services
              </a>
            </li>
            {/* <li>
              <a
                href="#projects"
                className="hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="hover:text-green-700 transition-colors"
              >
                Contacts
              </a>
            </li>
          </ul>
        </motion.nav>

        <div className="mt-32 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-60 h-60 md:w-72 md:h-72 rounded-[1.25rem] overflow-hidden shadow-2xl border-4 border-blue-500/60 hover:scale-105 transition-transform duration-500"
          >
            <Image
              src="/baraka.jpeg"
              alt="Baraka Lukumay"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <p className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-400">
              Hi, my name is
            </p>
            <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Baraka Lukumay
            </h1>
            <h2 className="text-l md:text-3xl font-medium text-gray-700 dark:text-gray-300 mt-2">
              Software developer
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl">
              I'm a full-stack developer with a passion for designing intuitive,
              responsive apps. I specialize in creating high-performing
              web/mobile experiences using modern tools like Next.js, laravel,
              Flutter, and more.
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="#"
                download
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-2 border border-gray-700 dark:border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Let's Talk
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="mt-6 flex gap-5 justify-center md:justify-start text-2xl text-gray-700 dark:text-gray-300"
            >
              <a
                href="https://www.instagram.com/barakadewise?igsh=MXZkMmJ2aDNmcWR1dA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/_01dewise?t=trqrHGos2-kPnMDKSovYkQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://github.com/barakadewise"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
