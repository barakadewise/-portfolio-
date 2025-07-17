import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaComments,
  FaLaptopCode,
  FaMobileAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
const services = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile App & UI Design",
    desc: "I design beautiful interfaces & build Flutter apps with a smooth user experience.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "I build fast and responsive web apps with React, Next.js, and modern backend tools.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Payment Integration",
    desc: "I connect apps with secure gateways like M-Pesa, PayPal, and Stripe for smooth transactions.",
  },
  {
    icon: <FaComments />,
    title: "ICT Consultation",
    desc: "Strategic tech planning, digital transformation, and ICT system architecture guidance.",
  },
  {
    icon: <FaClipboardList />,
    title: "Requirements Analysis",
    desc: "Translating ideas into technical specs that drive real business results.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white via-slate-100 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 text-sm uppercase tracking-wider font-semibold">
            What I Offer
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-3">
            My Services
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Each service is tailored to deliver value, speed, and digital impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-900 transition duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}