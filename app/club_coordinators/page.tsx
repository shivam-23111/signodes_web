"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { coordinatorsData as initialData } from "./coordinators_data"; 



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
  branch: string;
  year: string;
}

 interface CoordinatorsData {
  [domain: string]: Coordinator[];
}

const ClubCoordinators: React.FC = () => {
  const [data, setData] = useState<CoordinatorsData | null>(null);

  useEffect(() => {
    setData(initialData); // Ensure data is set only on the client side
  }, []);

  if (!data) return <div>Loading...</div>; // Render a loading indicator until data is set

  return (
    <div className="py-16 w-full" id="members">
      <h1 className="heading text-center mb-10">
        Our <span className="text-purple">Club Coordinators</span> at{" "}
        <span className="text-purple">Signodes</span>
      </h1>

      <div className="w-full mt-10 space-y-16">
        {Object.keys(data).map((domain: string) => (
          <div key={domain}>
            <h2 className="text-2xl text-center text-white font-bold mb-8">
              {domain}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {data[domain].map((coordinator: Coordinator) => (
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
        ))}
      </div>
    </div>
  );
};

export default ClubCoordinators;
