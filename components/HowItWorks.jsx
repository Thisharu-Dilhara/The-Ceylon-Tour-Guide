"use client";

import { motion } from "framer-motion";
import { PhoneCall, briefcaseBusiness, PlaneTakeoff } from "lucide-react"; // Icons

const steps = [
    {
        id: "01",
        title: "Consultation",
        desc: "Tell us your travel dates, interests, and budget. Whether you prefer beaches, wildlife, culture, or adventure — we help you choose the perfect Sri Lankan experience.",
        icon: <PhoneCall className="w-8 h-8 text-white" />,
    },
    {
        id: "02",
        title: "Booking",
        desc: "We create a personalized travel plan including hotels, transport, guided tours, and activities. Once approved, we handle all bookings for a smooth journey.",
        icon: <briefcaseBusiness className="w-8 h-8 text-white" />,
    },
    {
        id: "03",
        title: "Enjoy Journey",
        desc: "Arrive in Sri Lanka and relax while we manage everything. From airport pickup to guided tours, our team ensures a safe, comfortable, and unforgettable trip.",
        icon: <PlaneTakeoff className="w-8 h-8 text-white" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-[#F3F4F6] pb-24">
            {/* TOP IMAGE SECTION */}
            <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden">
                <img
                    src="/images/stilt-fishermen.jpg"
                    className="w-full h-full object-cover"
                    alt="How it Works Background"
                />
                <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay */}

                {/* White Box Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 -translate-y-1/2 left-6 md:left-20 bg-white/95 p-8 md:p-12 rounded-[30px] max-w-lg shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-6 uppercase tracking-tighter">
                        How it <span className="text-[#B48F00]">Works</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                        We believe meaningful travel begins with genuine connections. We take the time to understand each client's interests and rely on well-established local partnerships to create private, carefully tailored itineraries that balance comfort with thoughtful exploration.
                    </p>
                </motion.div>
            </div>

            {/* STEPS SECTION */}
            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            {/* Circular Icon */}
                            <div className="w-20 h-20 bg-[#B48F00] rounded-full flex items-center justify-center shadow-xl mb-6 border-8 border-white">
                                {step.icon}
                            </div>

                            <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-1">
                                Step {step.id}:
                            </h3>
                            <h4 className="text-3xl font-black text-[#B48F00] uppercase tracking-tighter mb-4">
                                {step.title}
                            </h4>
                            <p className="text-gray-600 text-[15px] leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}