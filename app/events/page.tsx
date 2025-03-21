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
            <Link href="https://leaderboard-chi-eight.vercel.app/">
              <button className="px-6 py-3 text-black bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 rounded-lg font-semibold shadow-lg border border-gray-400">
                Check the Live Leaderboard
              </button>
            </Link>
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
    title: "RoboSoccer - The Ultimate Bot Showdown",
    description: (
      <>
        <div>
          <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              RoboSoccer - The Ultimate Bot Showdown
            </span>{" "}
          </h4>
          <p className="text-md md:text-lg">
            Step onto the robotic football field at RoboSoccer, organized by
            Signodes at the techfest! No need to bring your own bot—we’ve got
            that covered! Just grab the controller, strategize, and score as
            many goals as possible in the shortest time. This 1v1 robotic soccer
            match will test your reflexes and game sense. The player with the
            most goals at the end of the match wins! Think you have what it
            takes to be the RoboSoccer champion? Get ready to play, compete, and
            have fun!
          </p>
          <div>
           


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
                  <h5 className="text-xl dark:text-purple">
                    Details of the Event
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      <li className=" text-md md:text-lg text-white ">
                        Game Mode: 1v1 Robo Soccer
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        Bots: Provided by organizers (No personal bots allowed)
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        Match Duration: [Specify time per match]
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
                  <h5 className="text-xl dark:text-purple">Winning Criteria</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className=" space-y-1 text-pink-300 ">
                      <li className=" text-md md:text-lg text-white">
                        🥇{" "}
                        <span className="text-[#85a7ff]">
                          Most goals scored in the least time
                        </span>{" "}
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
                  <h5 className="text-xl dark:text-purple">Bot Control</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className=" space-y-1 text-pink-300 ">
                      <li className=" text-md md:text-lg text-white">
                        
                        <span className="text-[#85a7ff]">
                          Remote-controlled (controllers provided)
                        </span>{" "}
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
                  <h5 className="text-xl dark:text-purple">Eligibility</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className=" space-y-1 text-pink-300 ">
                      <li className=" text-md md:text-lg text-white">
                       
                        <span className="text-[#85a7ff]">
                          Open to all students (individual participation)
                        </span>{" "}
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/*<Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">Certifications</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className=" space-y-1 text-pink-300 ">
                      <li className=" text-md md:text-lg text-white">
                        🥇{" "}
                        <span className="text-[#85a7ff]">
                          certificate of achievement
                        </span>{" "}
                        will be awarded to the winner.
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        🥇Certificates of participation will be provided to
                        everyone.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>*/}
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
                          Vice-President
                        </p>
                      </li>
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Rishi Ranjan
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          Vice-President
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
                        9:30 AM Onwards
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        22 March 2025
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
                        Plot 19
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        22 March,2025
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <br />
          </div>
          <br />
          

          <br />
          <br />
        </div>
      </>
    ),
    badge: "Ongoing",
    image: "/Robo Soccer.png",
    badgeclassName:
      "bg-green-900 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-[#90EE90]",
  },
];
