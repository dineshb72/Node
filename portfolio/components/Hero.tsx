"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
  const words = [
    {
      text: "I",
    },
    {
      text: "Build",
    },
    {


      text: "Business",
    },
  
    {

      text: "Grade",
    },
    {
      text: "Full Stack",

      className: "text-purple dark:text-purple",
    },
    {
      text: "Platforms",
      className: "text-purple dark:text-purple",
    },
  ];

  return (
    <div id="home" className="pb-20 pt-36">

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
          fill="white"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10 my-20">
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] px-4 gap-10">

    {/* Left: Text */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mb-2">
        Dinesh Bukya
      </h2>
      <TypewriterEffect
        className="text-center md:text-left md:text-5xl lg:text-6xl my-5"
        words={words}
      />
      <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Full Stack Developer
      </p>
    </div>

    {/* Right: DP */}
    <div className="shrink-0">
     <img
  src={`${process.env.NODE_ENV === 'production' ? '/Node/bdp.png' : '/bdp.png'}`}
  alt="Dinesh profile"
  className="w-36 h-36 md:w-48 md:h-48 rounded-full border-[3px] border-white shadow-2xl object-cover"
/>
    </div>

  </div>
</div>
    </div>
  );
};

export default Hero;
