"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle } from "react-icons/fi";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Open default mail client
      const mailtoLink = `mailto:contactus@prostheon.com?subject=New Inquiry from ${encodeURIComponent(
        form.name
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoLink;
      
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 px-4 relative overflow-hidden bg-gradient-to-br from-white via-[#f7f7f7] to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#1c4d9f]/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#2563b8]/5 rounded-full blur-3xl"
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
            <span className="text-sm font-semibold text-gray-700">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Let's Create{" "}
            <span className="bg-gradient-to-r from-[#1c4d9f] via-[#2563b8] to-[#153a75] bg-clip-text text-transparent">
              Together
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
            Have a project in mind? We'd love to hear from you. Let's build something exceptional together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Get in <span className="text-[#1c4d9f]">Touch</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you and starting our journey together.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:contactus@prostheon.com"
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group border border-white/20"
              >
                <div className="p-4 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FiMail className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Email</h4>
                  <p className="text-[#1c4d9f] font-medium">contactus@prostheon.com</p>
                  <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="p-4 bg-gray-100 rounded-xl">
                  <FiPhone className="text-2xl text-[#1c4d9f]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Phone</h4>
                  <p className="text-gray-600 font-medium">Coming Soon</p>
                  <p className="text-gray-600 text-sm mt-1">Voice support launching soon</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="p-4 bg-gray-100 rounded-xl">
                  <FiMapPin className="text-2xl text-[#1c4d9f]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Location</h4>
                  <p className="text-gray-600 font-medium">Global Remote</p>
                  <p className="text-gray-600 text-sm mt-1">Serving clients worldwide</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 space-y-6 border border-white/20"
              noValidate
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-lg">
                  <FiMessageCircle className="text-xl text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Send us a Message</h3>
              </div>

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 rounded-xl border-2 ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } focus:border-[#1c4d9f] focus:ring-4 focus:ring-[#1c4d9f]/20 outline-none transition-all bg-white/50 backdrop-blur-sm`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-3"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 rounded-xl border-2 ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } focus:border-[#1c4d9f] focus:ring-4 focus:ring-[#1c4d9f]/20 outline-none transition-all bg-white/50 backdrop-blur-sm`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-4 rounded-xl border-2 ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  } focus:border-[#1c4d9f] focus:ring-4 focus:ring-[#1c4d9f]/20 outline-none transition-all bg-white/50 backdrop-blur-sm resize-none`}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-xl backdrop-blur-sm"
                  >
                    <p className="text-green-700 text-sm font-medium">
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <p className="text-center text-gray-600 text-sm mt-4">
                We typically respond within 2-4 business hours
              </p>
            </form>
          </motion.div>
        </div>

        {/* Additional CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how we can bring your innovative ideas to life with cutting-edge technology and exceptional design.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-[#1c4d9f] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <FiSend className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}