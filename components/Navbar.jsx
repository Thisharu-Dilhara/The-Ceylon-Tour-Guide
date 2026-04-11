"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "#" },
        { name: "Why Sri Lanka", href: "#" },
        { name: "Tour Packages", href: "#" },
        { name: "Hotels", href: "#" },
        { name: "About Us", href: "#" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1508]/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex-1">
                    <Link href="/" className="text-white font-bold text-xl tracking-tighter">
                        CEYLON<span className="text-[#EAB308]">.</span>
                    </Link>
                </div>

                {/* DESKTOP MENU (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center gap-10 text-white/90 text-[13px] font-semibold uppercase tracking-wider">
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href} className="hover:text-yellow-500 transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* RIGHT BUTTON & MOBILE TOGGLE */}
                <div className="flex-1 flex justify-end items-center gap-4">
                    <button className="hidden md:block bg-[#EAB308] text-[#0B1508] px-6 py-2 rounded-full font-bold text-[12px] uppercase hover:bg-yellow-400 transition-all">
                        Contact Us
                    </button>

                    {/* HAMBURGER ICON (Visible only on Mobile) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU LIST (AnimatePresence for smooth slide) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0B1508] border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg font-medium border-b border-white/5 pb-2 hover:text-yellow-500"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="bg-[#EAB308] text-[#0B1508] py-3 rounded-xl font-bold uppercase mt-2">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}