"use client";

import { motion } from "framer-motion";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative w-full flex flex-col mt-20">

            {/* Top Background */}
            <div className="h-32 md:h-48 bg-[#F3F4F6] w-full"></div>

            {/* Bottom Section */}
            <div className="bg-[#161D27] w-full pt-40 pb-16 px-6 md:px-12 relative">

                {/* FLOATING NEWSLETTER CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl bg-white rounded-[40px] shadow-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10"
                >
                    <h2 className="text-4xl md:text-6xl font-medium text-gray-500 tracking-tight">
                        Our Newsletter
                    </h2>

                    <div className="w-full lg:w-auto flex flex-col gap-2">
                        <label className="text-gray-500 font-medium ml-2">Email</label>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[#F8F6F0] text-gray-800 px-6 py-4 rounded-xl w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-[#9B7300]"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#9B7300] hover:bg-yellow-700 text-white font-medium px-10 py-4 rounded-xl transition-all"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* FOOTER CONTENT */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-white/90">

                    {/* Copyright */}
                    <div className="lg:col-span-1 flex lg:items-end">
                        <p className="text-xs text-white/60">
                            Copyright © Tour Guide 2026 All rights reserved
                        </p>
                    </div>

                    {/* Menu */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Menu</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Explore</a></li>
                            <li><a href="#" className="hover:text-white">Travel</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Information</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><a href="#" className="hover:text-white">Destinations</a></li>
                            <li><a href="#" className="hover:text-white">Supports</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Privacy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Info</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li>+123 456 789</li>
                            <li>info@TourGuide.com</li>
                            <li>Colombo, Sri Lanka</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Follow us on</h4>
                        <div className="flex gap-4 text-white/80">
                            <a href="#" className="hover:text-[#9B7300]">
                                <FaFacebook size={22} />
                            </a>
                            <a href="#" className="hover:text-[#9B7300]">
                                <FaLinkedin size={22} />
                            </a>
                            <a href="#" className="hover:text-[#9B7300]">
                                <FaInstagram size={22} />
                            </a>
                            <a href="#" className="hover:text-[#9B7300]">
                                <FaTwitter size={22} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}