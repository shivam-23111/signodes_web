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

      {/* Event Poster Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 max-w-2xl w-full relative shadow-lg border border-purple-600"
          >
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-300 hover:text-white transition duration-300"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <img
              src="/NEXUS 2.0.png"
              alt="Event Poster"
              className="w-full max-h-96 h-auto rounded-lg cursor-pointer shadow-md hover:shadow-purple-500/50 transition-all duration-300"
              onClick={() => router.push("/events")}
            />
            <div className="flex justify-center mt-10">
              <a href="/events">
                <MagicButton
                  title="Register Now"
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
