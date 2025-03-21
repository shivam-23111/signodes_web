"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-10">
      <div className="max-w-2xl mx-auto antialiased py-4 relative ">
        {EventsData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <br />
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
    title: "NEXUS 2.0",
    description: (
      <>
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            NEXUS 2.0
          </span>{" "}
        </h4>
        <p className="text-lg text-justify">
          Signodes Club proudly presents NEXUS 2.0, a hands-on workshop crafted
          to empower participants with foundational skills in basic electronics
          and IoT components! Whether you’re a beginner eager to dive into the
          world of circuits or a tech enthusiast looking to master Internet of
          Things (IoT) essentials, this event is your gateway to practical
          learning. At NEXUS 2.0, we’re breaking down the fundamentals of
          electronics—from resistors and LEDs to sensors and
          microcontrollers—while introducing you to the building blocks of IoT
          systems. Through interactive training sessions and real-world
          demonstrations, you’ll learn how to design, connect, and control
          electronic circuits and IoT devices. This workshop is your chance to
          gain hands-on experience, spark your creativity, and lay the
          groundwork for a future in innovative technologies!
        </p>
        <br />
        <br />
      </>
    ),
    badge: "Past Event",
    image: "/NEXUS 2.0.jpg",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
  {
    title: "IoTRON 3.0",
    description: (
      <>
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            IoTRON 3.0
          </span>{" "}
        </h4>
        <p className="text-lg text-justify">
          Organized by Signodes, it is an annual themed hardware project
          exhibition and competition that attracts participants from diverse
          branches it empowers students to develop unique & impactful ideas and
          showcase them to a broad audience. Focused on innovation within
          specific themes, the event encourages students to develop IoT-based
          solutions using key technologies such as sensors, microcontrollers,
          and cloud platforms. Participants will showcase their projects,
          applying real-world IoT concepts to address challenges. Winners will
          receive exciting prizes and the opportunity to pitch their ideas at
          higher levels, promoting creativity, technical expertise, and
          problem-solving skills.
        </p>
        <br />
        <br />
      </>
    ),
    badge: "Past Event",
    image: "/iotron3.jpg",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
  {
    title: "XMBLE is a summer event focused on advancing hardware innovation",
    description: (
      <>
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            XMBLE
          </span>{" "}
        </h4>
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
        <br />
        <br />
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
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            IoT NEXUS
          </span>{" "}
        </h4>
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
        <br />
        <br />
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
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            IoTRON
          </span>{" "}
        </h4>
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
        <br />
        <br />
      </>
    ),
    badge: "Past Event",
    image: "/iotron.png",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
];
