"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-10">
      <div className="max-w-2xl mx-auto antialiased py-4 relative ">
        {EventsData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className={item.badgeclassName}>{item.badge}</h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const EventsData = [
  {
    title: "Ongoing event title",
    description: (
      <>
        <div>
          <p className="text-lg text-justify">This is the description</p>
          <br />
          <button>
            <Link
              href="#"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register Now
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </button>
        </div>
      </>
    ),
    badge: "Ongoing",
    image: "/collaboration.jpg",
    badgeclassName:
      "bg-green-900 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-[#90EE90]",
  },
  {
    title: "XMBLE is a summer event focused on advancing hardware innovation",
    description: (
      <>
        <p className="text-lg text-justify">
          XMBLE is a summer event focused on advancing hardware innovation,
          challenging students to push the boundaries of technology through
          hands-on project development. The event begins with an opening
          ceremony that introduces the themes, followed by team registration
          open to students from all disciplines. Participants engage in
          technical workshops to build skills in hardware design and prototyping
          before entering an intensive project development phase that includes
          regular check-ins and progress reviews. The culmination of the event
          is Demo Day, where teams showcase their prototypes to judges and
          attendees, followed by an award ceremony that recognizes outstanding
          projects and innovative solutions.
        </p>
      </>
    ),
    badge: "Past Event",
    image: "/xmble.png",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
  {
    title: "IoT NEXUS The Introduction to IoT workshop",
    description: (
      <>
        <p className="text-lg text-justify">
          IoT NEXUS The Introduction to IoT workshop, held at NIET College, was
          an 40-hour hands-on session for 2nd-year engineering students. The
          event covered the fundamentals of IoT, including key components like
          sensors, actuators, and microcontrollers. Students learned to program
          Arduino, explored circuit simulation using Tinkercad, and developed
          basic IoT projects. The workshop provided a practical understanding of
          how IoT works, equipping participants with the skills to create their
          own IoT solutions.
        </p>
      </>
    ),
    badge: "Past Event",
    image: "/nexus.jpeg",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
  {
    title: "IoTRON is an annual winter event designed to foster creativity",
    description: (
      <>
        <p className="text-lg text-justify">
          IoTRON is an annual winter event designed to foster creativity and
          innovation among students from diverse disciplines in the field of
          hardware development, centered around the Internet of Things (IoT).
          The event kicks off with a workshop introducing themes, tools, and
          technologies, followed by team formation that encourages
          interdisciplinary collaboration. Participants gain access to
          mentorship from academia and industry as they work on their projects
          over several weeks. The event culminates in a final presentation where
          teams showcase their work to a panel of judges, leading to an awards
          ceremony that recognizes outstanding projects across various
          categories.
        </p>
      </>
    ),
    badge: "Past Event",
    image: "/iotron.png",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
];
