"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiGithub, FiArrowRight, FiCode, FiLayers } from "react-icons/fi";

const projects = [
  {
    title: "SaaS Analytics Platform",
    description: "Cloud-based dashboard for real-time business insights with advanced data visualization.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Chart.js", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    details: "Deployed on AWS, this comprehensive analytics platform visualizes KPIs, integrates AI-powered predictions, and provides actionable insights for business growth. Features include real-time data processing, customizable dashboards, and advanced reporting capabilities.",
    color: "from-blue-500 to-purple-600",
    gradient: "from-blue-500/20 to-purple-600/20",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI bot for customer support with natural language processing.",
    stack: ["React", "OpenAI", "Node.js", "Express", "WebSocket", "Redis"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    details: "Multilingual chatbot that handles FAQs, automates routine tasks, and learns from interactions. Integrates with CRM systems, provides 24/7 support, and reduces response time by 80%.",
    color: "from-green-500 to-teal-600",
    gradient: "from-green-500/20 to-teal-600/20",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fintech Mobile App",
    description: "Cross-platform digital banking solution with secure transactions and financial insights.",
    stack: ["React Native", "Redux", "TypeScript", "Firebase", "Plaid API"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    details: "Comprehensive fintech solution featuring biometric authentication, real-time transaction tracking, investment portfolio management, and AI-driven financial recommendations with bank-grade security.",
    color: "from-indigo-500 to-blue-600",
    gradient: "from-indigo-500/20 to-blue-600/20",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-Commerce Marketplace",
    description: "Full-featured online marketplace with vendor management and payment integration.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    details: "Scalable e-commerce platform with multi-vendor support, advanced search and filtering, inventory management, secure payment processing, and comprehensive analytics dashboard.",
    color: "from-orange-500 to-red-600",
    gradient: "from-orange-500/20 to-red-600/20",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Management System",
    description: "Integrated healthcare platform for patient management and telemedicine services.",
    stack: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "HIPAA"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    details: "HIPAA-compliant healthcare solution with electronic health records, appointment scheduling, video consultations, prescription management, and patient portal with secure messaging.",
    color: "from-pink-500 to-rose-600",
    gradient: "from-pink-500/20 to-rose-600/20",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace with task tracking, team communication, and workflow automation.",
    stack: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "Docker", "WebSockets"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    details: "Agile project management platform with Kanban boards, Gantt charts, time tracking, team collaboration tools, file sharing, and customizable workflows with extensive integrations.",
    color: "from-cyan-500 to-blue-600",
    gradient: "from-cyan-500/20 to-blue-600/20",
    liveUrl: "#",
    githubUrl: "#"
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
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
            <span className="text-sm font-semibold text-gray-700">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#1c4d9f] via-[#2563b8] to-[#153a75] bg-clip-text text-transparent">
              Projects
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
            Showcasing our expertise in building innovative digital solutions that drive business growth
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl overflow-hidden transition-all duration-500 border border-white/20 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              {/* Project Image with Gradient Overlay */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-70 transition-opacity z-10`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center transform group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] rounded-xl flex items-center justify-center mx-auto mb-2">
                      <FiLayers className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">View Details</span>
                  </motion.div>
                </div>

                {/* Tech Stack Badge */}
                <div className="absolute top-4 left-4 z-30">
                  <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">{project.stack[0]}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1c4d9f] transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-[#1c4d9f]/10 to-[#2563b8]/10 text-[#1c4d9f] text-xs font-medium rounded-lg border border-[#1c4d9f]/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                {/* View Project Button */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#1c4d9f] font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span>View Project</span>
                  <FiArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

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
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how we can bring your innovative ideas to life with cutting-edge technology.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-[#1c4d9f] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <FiArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div> */}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white/95 backdrop-blur-lg rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 md:h-80">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${projects[selectedProject].color} opacity-80 z-10`}
                />
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-colors shadow-lg"
                  aria-label="Close modal"
                >
                  <FiX size={20} className="text-gray-700" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {projects[selectedProject].description}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <motion.a
                      href={projects[selectedProject].liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white rounded-lg font-semibold text-sm"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={projects[selectedProject].githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Details */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FiCode className="w-5 h-5 text-[#1c4d9f]" />
                      Project Overview
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {projects[selectedProject].details}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FiLayers className="w-5 h-5 text-[#1c4d9f]" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-[#1c4d9f]/10 to-[#2563b8]/10 text-[#1c4d9f] font-medium rounded-lg border border-[#1c4d9f]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white font-bold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Close Project Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}