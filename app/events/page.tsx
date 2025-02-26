"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        {/*<div className="mt-10">
          <h3 className="text-2xl font-mono font-bold text-pink-700">
            No Ongoing Events , Right Now
          </h3>
          <h4>
            Currently, there are no ongoing events at Signodes Club. Stay tuned
            for upcoming activities, workshops, and events designed to engage
            and inspire students. Keep an eye on this page for future updates!
          </h4>
        </div>*/}
        <button className="mt-10">
          <a
            href="/previous-events"
            className="text-white bg-pink-700 hover:bg-pink-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-pink-700 dark:hover:bg-pink-500 focus:outline-none dark:focus:ring-pink-800"
          >
            View Past Events
          </a>
        </button>
      </div>
    </TracingBeam>
  );
}

const EventsData = [
  {
    title: "NEXUS 2.0",
    description: (
      <>
        <div>
          <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              NEXUS 2.0
            </span>{" "}
          </h4>
          <p className="text-md md:text-lg">
            Signodes Club is back with NEXUS 2.0, an exclusive workshop
            designed to take your IoT and emerging technology knowledge to the
            next level! Whether you are a tech enthusiast, an aspiring innovator,
            or simply curious about how IoT is revolutionizing industries, this
            event is for you.NEXUS 2.0 is an exclusive workshop by Signodes
            Club, designed to equip tech enthusiasts with hands-on experience in
            Internet of Things (IoT) and emerging technologies. This event will
            cover key concepts such as sensor integration, data transmission
            protocols (MQTT, HTTP), cloud connectivity, and real-time data
            processing.Through interactive sessions and live demonstrations,
            participants will explore how IoT devices communicate, analyze data,
            and integrate with AI for automation. If you are looking to boost
            your technical skills and stay ahead in the ever-evolving tech
            landscape, NEXUS 2.0 is the perfect opportunity to learn, innovate,
            and connect with experts in the field!
          </p>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h5 className="text-xl dark:text-purple">
                    Selection Creteria
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-center text-sm md:text-lg text-white text-justify font-mono">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      First Come First Serve
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/*<Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h5 className="text-xl dark:text-purple">Agenda of Workshop</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-center text-sm md:text-lg text-white text-justify font-mono">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Line Folowing Car
                    </li>
                    <li className="flex items-center text-md md:text-lg text-white">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Weather Montitoring System
                    </li>
                    <li className="flex items-center text-md md:text-lg text-white">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Sustainabale Development Goals
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>*/}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">Workshop Agenda</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      <li className=" text-md md:text-lg text-white ">
                        Introduction to basic Electronic Components for IOT
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        Hands on Project Demonstration
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        Future Scope and Career Opportunities in IOT
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">Certifications</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className=" space-y-1 text-pink-300 ">
                      <li className=" text-md md:text-lg text-white">
                        🥇Certificates of participation will be provided to
                        everyone.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">
                    Faculty Cordinators
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-pink-300 ">
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Mayank Deep Khare
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          HOD,CSE-IoT
                        </p>
                      </li>
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Aditee Mattoo
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          DEPUTY HOD,CSE M.TECH-INTEGRATED
                        </p>
                      </li>
                      </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">
                    Student Cordinator
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-pink-300 ">
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Prashant Kumar Singh
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          President
                        </p>
                      </li>
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Sumesh Sarkar
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          Vice-President(9557028599)
                        </p>
                      </li>
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Rishi Ranjan
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          Vice-President(8580149535)
                        </p>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">Date and Time</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      <li className=" text-md md:text-lg text-white ">
                        tIM:-9:30 AM Onwards
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        Date:-TBD
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">Venue</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      <li className=" text-md md:text-lg text-white ">
                       TBD
                      </li>
                      
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <br />
          </div>
          <br />
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-10 md:space-y-0">
            <Link
              href="https://forms.office.com/r/3uvMhZiSxx"
              target="_blank"
              className=" text-center px-6 py-3.5 text-black-100 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg"
            >
              Register Now
            </Link>
          </div>

          <br />
          <br />
        </div>
      </>
    ),
    badge: "Ongoing",
    image: "/NEXUS 2.0.png",
    badgeclassName:
      "bg-green-900 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-[#90EE90]",
  },
];
