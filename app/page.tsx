"use client";

import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-12 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>

      {/* New Robosoccer Event Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-gray-900 via-cyan-900 to-black rounded-xl p-8 max-w-2xl w-full relative shadow-2xl border border-cyan-400"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-cyan-300 hover:text-cyan-100 transition duration-300"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            {/* Robosoccer Poster */}
            <img
              src="/Robo Soccer.png" // Apna poster yahan add kar
              alt="Signodes Robosoccer Event"
              className="w-full max-h-80 h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              onClick={() => router.push("/events")}
            />

            {/* Event Title */}
            <h2 className="text-2xl font-bold text-center mt-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Signodes Robosoccer 2025
            </h2>

            {/* Event Description */}
            <p className="text-center text-gray-300 mt-2 text-sm">
              Join the ultimate robotic showdown at Signodes Techfest! Compete, score, and dominate the leaderboard.
            </p>

            {/* Register Button */}
            <div className="flex justify-center mt-6">
              <a href="/events">
                <MagicButton
                  title="Join the Battle"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
};

export default Home;