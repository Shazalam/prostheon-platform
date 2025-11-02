"use client";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCogs, FaPencilRuler, FaCloud, FaRobot, FaShieldAlt, FaRocket } from "react-icons/fa";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Web Development",
    description: "Modern front-end & full-stack solutions using React, Next.js, and the MERN stack for exceptional user experiences.",
    features: ["React & Next.js", "MERN Stack", "Progressive Web Apps", "Performance Optimization"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: "App Development",
    description: "Full-stack, API-driven mobile and web app engineering with a cloud-first approach for maximum scalability.",
    features: ["Cross-platform", "API Integration", "Cloud Native", "Real-time Features"],
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: "Product Engineering",
    description: "End-to-end SaaS and AI solution development for startups and enterprises, from concept to deployment.",
    features: ["SaaS Architecture", "AI/ML Integration", "DevOps & CI/CD", "Microservices"],
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3
  },
  {
    icon: <FaPencilRuler className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-first, minimalistic interfaces built for engagement, accessibility, and seamless user journeys.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-orange-500 to-red-500",
    delay: 0.4
  },
  {
    icon: <FaCloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies for high-performance applications.",
    features: ["AWS & Azure", "Serverless", "Containerization", "Auto-scaling"],
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.5
  },
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: "AI Integration",
    description: "Intelligent automation and machine learning solutions to transform your business processes.",
    features: ["Machine Learning", "Chatbots", "Predictive Analytics", "Computer Vision"],
    gradient: "from-teal-500 to-green-500",
    delay: 0.6
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Security & DevOps",
    description: "Robust security practices and streamlined development operations for enterprise-grade applications.",
    features: ["Security Audits", "CI/CD Pipelines", "Monitoring", "Compliance"],
    gradient: "from-gray-600 to-gray-800",
    delay: 0.7
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Comprehensive strategy and implementation to modernize your digital infrastructure and processes.",
    features: ["Strategy Consulting", "Legacy Modernization", "Digital Roadmap", "Change Management"],
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.8
  }
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-20 md:py-32 px-4 relative overflow-hidden bg-gradient-to-br from-white via-[#f7f7f7] to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#1c4d9f]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563b8]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(28,77,159,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(28,77,159,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 shadow-2xl mb-8"
          >
            <div className="w-2 h-2 bg-[#1c4d9f] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Our Expertise</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#1c4d9f] via-[#2563b8] to-[#153a75] bg-clip-text text-transparent">
              Digital Services
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            End-to-end digital solutions tailored to transform your business and drive growth
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: service.delay, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl p-8 transition-all duration-500 border border-white/20 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
              
              {/* Icon with Gradient Background */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1c4d9f] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: service.delay + featureIndex * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheck className="w-3 h-3 text-white" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <FiArrowRight className="w-4 h-4" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#1c4d9f]/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#2563b8]/20 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full translate-x-20 translate-y-20" />
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Ready to Transform Your Digital Presence?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our comprehensive services can help you build the next generation of digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-[#1c4d9f] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#1c4d9f] transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.a>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}