"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const technologies = [
  { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express", color: "#000000" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaAws />, name: "AWS", color: "#FF9900" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  { icon: <FaPython />, name: "Python", color: "#3776AB" },
];

export default function TechIcons() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div
            className="text-5xl md:text-6xl transition-all"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </div>
          <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-prostheon-blue transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
