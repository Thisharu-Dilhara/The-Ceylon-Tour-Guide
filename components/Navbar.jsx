"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1508]/85 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-8 py-3 flex items-center">

                {/* LEFT SPACE - Flex 1 */}
                <div className="flex-1 hidden md:block"></div>

                {/* CENTER MENU */}
                <div className="flex items-center gap-10 text-white/90 text-[13px] font-semibold uppercase tracking-[0.1em]">
                    <Link href="#" className="hover:text-yellow-500 transition-all duration-300">
                        Home
                    </Link>

                    <Link href="#" className="flex items-center gap-1.5 hover:text-yellow-500 transition-all duration-300 group">
                        Why Sri Lanka
                        <svg
                            className="w-3 h-3 transition-transform group-hover:translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>

                    <Link href="#" className="hover:text-yellow-500 transition-all duration-300">
                        Tour Packages
                    </Link>

                    <Link href="#" className="hover:text-yellow-500 transition-all duration-300">
                        Hotels
                    </Link>

                    <Link href="#" className="hover:text-yellow-500 transition-all duration-300">
                        About Us
                    </Link>
                </div>

                {/* RIGHT BUTTON - Flex 1 */}
                <div className="flex-1 flex justify-end">
                    <button className="bg-[#EAB308] text-[#0B1508] px-7 py-2 rounded-full font-black text-[12px] uppercase tracking-wider hover:bg-yellow-400 hover:scale-105 transition-all active:scale-95 shadow-lg shadow-yellow-500/20">
                        Contact Us
                    </button>
                </div>

            </div>
        </nav>
    );
}