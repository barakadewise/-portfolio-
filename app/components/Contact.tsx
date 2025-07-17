import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-24 px-6 border-t border-gray-300 dark:border-gray-700"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
          Let's Connect
        </h2>
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h3>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200 text-lg">
            <FiPhone className="text-blue-600 text-2xl" />
            <span>+255 763 993 194</span>
          </div>

          <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200 text-lg">
            <FiMail className="text-blue-600 text-2xl" />
            <a
              href="mailto:barakadewise@gmail.com"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              barakadewise@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
