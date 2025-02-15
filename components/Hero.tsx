import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="pb-14 pt-[6rem] lg:flex-row" id="home">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="flex justify-center relative my-10 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white rounded-xl p-2">
              <div className="flex space-x-4">
                <div className="w-28 md:w-28 p-2 flex items-center justify-center rounded-2xl ">
                  <Image
                    src="/logo5.png"
                    alt="Image 1"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-28 md:w-28 bg-white p-2 flex items-center justify-center rounded-2xl">
                  <Image
                    src="/logo3.png"
                    alt="Image 2"
                    width={300}
                    height={300}
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
            <TextGenerateEffect
              words="Welcoming to our Signodes club at NIET"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! We are Signodes club, a IoT based club which embrace both
              hardware and software based problems✨ .
            </p>
            <br />
            <a href="/events">
              <MagicButton
                title="Explore Events"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
