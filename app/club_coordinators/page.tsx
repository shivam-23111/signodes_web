"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Added FaEnvelope for email
import { coordinatorsData as initialData } from "./coordinators_data"; // Adjust the path based on your project structure

interface SocialLinks {
  linkedin?: string;
  github?: string;
  email?: string;
}

interface Coordinator {
  id: number;
  name: string;
  position: string;
  bio: string;
  photo: string;
  socials: SocialLinks;
  email: string;
  branch: string;
  year: string;
}

type CoordinatorsData = Coordinator[]; // Assuming it's an array

const ClubCoordinators: React.FC = () => {
  const [data, setData] = useState<CoordinatorsData | null>(null);

  useEffect(() => {
    console.log("Initial Data:", initialData); // Debugging the structure of initialData
    if (Array.isArray(initialData)) {
      setData(initialData); // Only set data if it’s an array
    } else {
      console.error("Data is not an array or is undefined.");
    }
  }, []);

  if (!data) return <div>Loading...</div>; // Add a loading message while data is not available

  return (
    <div className="py-16 w-full" id="members">
      <h1 className="heading text-center mb-10">
        Our <span className="text-purple">Club Coordinators</span> at{" "}
        <span className="text-purple">Signodes</span>
      </h1>

      <div className="w-full mt-10 space-y-16">
        <div className="flex flex-wrap justify-center gap-8">
          {data.map((coordinator: Coordinator) => (
            <div
              key={coordinator.id}
              className="group flex flex-col items-center text-black dark:text-white border-[1px] border-transparent p-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-[#04071d] to-[#0c0e23] hover:bg-gradient-to-r hover:from-[#6a0dad] hover:to-[#8a2be2] shadow-lg"
              style={{
                boxShadow: "0px 4px 20px rgba(106, 45, 173, 0.2)",
              }}
            >
              <img
                src={coordinator.photo}
                alt={coordinator.name}
                className="lg:w-48 lg:h-48 md:w-40 md:h-40 w-32 h-32 rounded-full mb-4 shadow-md object-cover group-hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
              />
              <h3 className="text-xl font-semibold text-white mb-1">
                {coordinator.name}
              </h3>
              <p className="text-sm text-white opacity-80 mb-2">
                {coordinator.year} | {coordinator.branch}
              </p>
              <p className="mt-2 text-center text-white text-sm font-light opacity-90">
                {coordinator.bio}
              </p>
              <div className="flex mt-4 space-x-4">
                {coordinator.socials.linkedin && (
                  <a
                    href={coordinator.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin
                      size={28}
                      className="text-blue-600 hover:text-blue-400"
                    />
                  </a>
                )}
                {coordinator.socials.github && (
                  <a
                    href={coordinator.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub
                      size={28}
                      className="text-black dark:text-white hover:text-gray-600"
                    />
                  </a>
                )}
                {coordinator.socials.email && (
                  <a
                    href={`mailto:${coordinator.socials.email}`}
                    className="transition-all duration-300 hover:scale-110"
                  >
                    <FaEnvelope
                      size={28}
                      className="text-red-500 hover:text-red-400"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubCoordinators;
