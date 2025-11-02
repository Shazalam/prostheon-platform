"use client";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiArrowUp, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = ["Home", "About", "Services", "Projects", "Contact"];
  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-[#1c4d9f]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-10 right-10 w-48 h-48 bg-[#2563b8]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-3xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Prostheon
            </motion.h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
              Empowering innovation through intelligent software solutions for a
              digital future. We build exceptional digital experiences that drive
              business growth and transform ideas into reality.
            </p>
            
            {/* Social Links - Mobile */}
            <div className="flex gap-4 mt-6 lg:hidden">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-[#1c4d9f] hover:to-[#2563b8] transition-all duration-300 border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1 h-1 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-full" />
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-[#1c4d9f] hover:to-[#2563b8] transition-all duration-300 border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon size={24} className="text-white" />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <p className="text-gray-300 text-sm">contactus@prostheon.com</p>
              <p className="text-gray-400 text-sm">Global Remote</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p 
            className="text-gray-400 text-sm flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            &copy; 2025 Prostheon. Crafted with{" "}
            <FiHeart className="text-red-500 inline mx-1" />{" "}
            for the digital future.
          </motion.p>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors hover:scale-105"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors hover:scale-105"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 border border-white/20 backdrop-blur-sm cursor-pointer"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </motion.button>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-2 h-2 bg-[#1c4d9f]/30 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-32 w-1 h-1 bg-[#2563b8]/30 rounded-full"
      />
    </footer>
  );
}