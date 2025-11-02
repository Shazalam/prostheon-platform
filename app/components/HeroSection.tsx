"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay, FiStar, FiAward, FiUsers, FiGlobe } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center pt-35 pb-16 px-4 relative overflow-hidden bg-gradient-to-br from-white via-[#f7f7f7] to-white"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-5% w-80 h-80 bg-[#1c4d9f]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-10% w-96 h-96 bg-[#2563b8]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20% w-64 h-64 bg-[#153a75]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(28,77,159,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(28,77,159,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 hidden xl:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex items-center gap-2 text-[#1c4d9f]">
            <FiAward className="w-5 h-5" />
            <span className="text-sm font-semibold">Award Winning</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 hidden lg:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex items-center gap-2 text-[#1c4d9f]">
            <FiUsers className="w-5 h-5" />
            <span className="text-sm font-semibold">500+ Clients</span>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full opacity-30">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="url(#waveGradient)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,218.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1c4d9f" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2563b8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center z-10 space-y-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 shadow-2xl"
        >
          <div className="flex items-center gap-1 text-yellow-500">
            <FiStar className="w-4 h-4 fill-current" />
            <FiStar className="w-4 h-4 fill-current" />
            <FiStar className="w-4 h-4 fill-current" />
            <FiStar className="w-4 h-4 fill-current" />
            <FiStar className="w-4 h-4 fill-current" />
          </div>
          <span className="text-sm font-semibold text-gray-700">Rated 5.0 by 500+ Clients</span>
          <FiGlobe className="w-4 h-4 text-[#1c4d9f]" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight">
            <span className="block">Empowering</span>
            <span className="block bg-gradient-to-r from-[#1c4d9f] via-[#2563b8] to-[#153a75] bg-clip-text text-transparent">
              Innovation
            </span>
            <span className="block">Through Intelligence</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your business with cutting-edge{" "}
            <span className="font-semibold text-[#1c4d9f]">SaaS solutions</span> and{" "}
            <span className="font-semibold text-[#2563b8]">AI-powered applications</span>
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From concept to deployment, we build scalable digital products that drive growth and innovation
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-8"
        >
          <motion.a
            href="#contact"
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center gap-3 min-w-[200px] overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(135deg, #153a75 0%, #1c4d9f 100%)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>

          <motion.a
            href="#projects"
            className="group px-10 py-5 rounded-2xl border-2 border-[#1c4d9f] text-[#1c4d9f] font-bold text-lg bg-white/80 backdrop-blur-sm hover:bg-[#1c4d9f] hover:text-white transition-all duration-500 flex items-center justify-center gap-3 min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <FiPlay className="w-5 h-5" />
              View Our Work
            </span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-2xl mx-auto"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support" },
            { number: "5.0", label: "Rating" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
            >
              <div className="text-2xl font-black text-[#1c4d9f]">{stat.number}</div>
              <div className="text-sm font-medium text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-[#1c4d9f]">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#1c4d9f]/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#1c4d9f] rounded-full mt-2" />
          </div>
        </div>
      </motion.div>

      {/* Trusted By Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
      >
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechCorp", "InnovateLabs", "FutureSoft", "NexusAI", "CloudScale"].map((company) => (
              <div key={company} className="text-gray-400 font-bold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}