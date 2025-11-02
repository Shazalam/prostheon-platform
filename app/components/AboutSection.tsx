"use client";
import { motion } from "framer-motion";
import { FiCode, FiCloud, FiCpu, FiUsers, FiTarget, FiAward, FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: FiCode },
    { number: "99%", label: "Client Satisfaction", icon: FiUsers },
    { number: "24/7", label: "Support Available", icon: FiCloud },
    { number: "5.0", label: "Average Rating", icon: FiAward },
  ];

  const values = [
    {
      icon: FiTarget,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: FiCpu,
      title: "AI-Powered",
      description: "Leveraging artificial intelligence to create intelligent applications"
    },
    {
      icon: FiCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code for long-term success"
    }
  ];

  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 px-4 relative overflow-hidden bg-gradient-to-br from-white via-[#f7f7f7] to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-[#1c4d9f]/5 rounded-full blur-3xl"
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
          className="absolute bottom-10 left-10 w-80 h-80 bg-[#2563b8]/5 rounded-full blur-3xl"
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
            <span className="text-sm font-semibold text-gray-700">About Our Company</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Building The Future Of{" "}
            <span className="bg-gradient-to-r from-[#1c4d9f] via-[#2563b8] to-[#153a75] bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] mx-auto mb-8 rounded-full"
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center -mb-1 md:-mb-15">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
            >
              Prostheon is driven by a vision to become a global SaaS leader, 
              delivering <span className="font-semibold text-[#1c4d9f]">next-generation software</span> and 
              digital transformation for ambitious businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Our expertise spans the{" "}
              <span className="font-semibold text-[#1c4d9f]">MERN stack, Next.js, cloud platforms,</span> and{" "}
              <span className="font-semibold text-[#2563b8]">AI-integrated applications</span> to create 
              products that are scalable, reliable, and future-proof.
            </motion.p>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid gap-6 pt-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1c4d9f] to-[#2563b8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1c4d9f]/10 to-[#2563b8]/10 rounded-full -translate-y-16 translate-x-16" />
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
              >
                Our Impact in Numbers
              </motion.h3>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1c4d9f] to-[#2563b8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#1c4d9f] mb-1">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-[#1c4d9f]/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#2563b8]/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
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
              Ready to Transform Your Business?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our expertise can help you build the next generation of digital products.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-[#1c4d9f] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
              <FiArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}