
"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    label: string;
    href: string;
    submenu?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
    {
        label: "Home",
        href: "#home"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Services",
        href: "#services"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Contact",
        href: "#contact"
    },
];

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (): void => {
        setOpen(false);
        setActiveSubmenu(null);
        setMobileActiveSubmenu(null);
    };

    const toggleMobileSubmenu = (label: string): void => {
        setMobileActiveSubmenu(mobileActiveSubmenu === label ? null : label);
    };

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3 border-b border-white/20"
                : "bg-white/90 backdrop-blur-lg py-5"
                }`}
            style={{
                background: scrolled
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)'
            }}
        >
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white py-2 px-4 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-xs sm:text-sm">🚀 Transform your business with cutting-edge solutions</span>
                    <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm">
                        <span>📧 contactus@prostheon.com</span>
                        <span>📞 +91 (922) 044-7473</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center gap-4 group"
                        onClick={handleNavClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* <div className="relative w-auto h-auto p-2 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:rotate-3">
              <Image
                src="/prostheon-logo.png"
                alt="Prostheon Logo"
                width={125}
                height={56}
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c4d9f]/20 to-[#2563b8]/20 group-hover:from-transparent group-hover:to-transparent transition-all duration-500" />
            </div> */}
                        <div className="flex flex-col">
                            <span className="text-2xl font-black bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] bg-clip-text text-transparent tracking-tight">
                                Prostheon
                            </span>
                            <span className="text-xs text-gray-500 font-medium tracking-wide">
                                Innovation Through Intelligence
                            </span>
                                 </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link: NavLink) => (
                            <div key={link.label} className="relative group">
                                <a
                                    href={link.href}
                                    className="flex items-center gap-1 px-4 py-3 text-[15px] font-semibold text-gray-700 hover:text-[#1c4d9f] transition-all duration-300 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-[#1c4d9f]/10 group"
                                >
                                    {link.label}
                                </a>
                                {/* Animated underline */}
                                <div className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] transition-all duration-300 group-hover:w-8" />
                            </div>
                        ))}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <motion.a
                            href="#contact"
                            className="bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white px-8 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-[#1c4d9f]/25 transition-all duration-300 transform hover:scale-105"
                            whileHover={{
                                scale: 1.05,
                                background: "linear-gradient(135deg, #153a75 0%, #1c4d9f 100%)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Free Trial
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="lg:hidden p-3 text-gray-700 hover:text-[#1c4d9f] transition-colors duration-300 rounded-2xl hover:bg-white hover:shadow-lg"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {open ? (
                            <FiX size={28} className="text-[#1c4d9f]" />
                        ) : (
                            <FiMenu size={28} />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation - Fixed Height Issues */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        onClick={() => setOpen(false)}
                    >
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 300,
                                mass: 0.8
                            }}
                            className="absolute top-0 right-0 w-full sm:w-96 h-screen bg-gradient-to-b from-white to-[#f7f7f7] shadow-2xl border-l border-white/20 flex flex-col"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            {/* Mobile Header - Fixed */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-white/80 sticky top-0 z-10">
                                <div className="flex items-center gap-4">
                                    {/* <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/prostheon-logo.png"
                      alt="Prostheon Logo"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div> */}
                                    <div className="flex flex-col">
                                        <span className="text-xl font-black bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] bg-clip-text text-transparent">
                                            Prostheon
                                        </span>
                                        <span className="text-xs text-gray-500 font-medium">
                                            Innovation Through Intelligence
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-2 text-gray-500 hover:text-[#1c4d9f] transition-colors"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="p-6">
                                    {/* Mobile Navigation Links - Improved Design */}
                                    <div className="flex flex-col space-y-3">
                                        {navLinks.map((link: NavLink, index: number) => (
                                            <motion.div
                                                key={link.label}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                            >
                                                {/* Main Navigation Item */}
                                                <button
                                                    onClick={() => handleNavClick()}
                                                    className="flex items-center justify-between w-full text-left p-4 text-base font-semibold text-gray-700 hover:text-[#1c4d9f] transition-all duration-300 hover:bg-white"
                                                >
                                                    <span>{link.label}</span>
                                                </button>

                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Mobile CTA Buttons - Improved */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="mt-8 space-y-4"
                                    >
                                        <a
                                            href="#contact"
                                            onClick={handleNavClick}
                                            className="block w-full text-center bg-gradient-to-r from-[#1c4d9f] to-[#2563b8] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        >
                                            Start Free Trial
                                        </a>
                                    </motion.div>

                                    {/* Contact Info - Improved */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="mt-8 p-6 bg-gradient-to-r from-[#1c4d9f]/5 to-[#2563b8]/5 rounded-2xl border border-[#1c4d9f]/10"
                                    >
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                                            Get In Touch
                                        </h4>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                                                <div className="w-10 h-10 bg-[#1c4d9f] rounded-lg flex items-center justify-center">
                                                    <span className="text-white text-lg">📧</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-600">Email</p>
                                                    <p className="text-[#1c4d9f] font-bold">contactus@prostheon.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                                                <div className="w-10 h-10 bg-[#2563b8] rounded-lg flex items-center justify-center">
                                                    <span className="text-white text-lg">📞</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-600">Phone</p>
                                                    <p className="text-[#1c4d9f] font-bold">+91 (922) 044-7473</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <p className="text-xs text-gray-500 text-center">
                                                We respond within 2 hours during business days
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}