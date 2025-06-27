"use client";

import { projects } from "@/data";
import React from "react";
import Image from 'next/image';
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  const prefix = process.env.NODE_ENV === 'production' ? '/Node' : '';

  return (
    <div className="py-10" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              {/* Project Header with BG and Cover */}
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                
                {/* Background Image using fill layout */}
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image
                    src={`${prefix}/bg.png`}
                    alt="project background"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Cover Image */}
                <div className="absolute bottom-0 z-10 w-[300px] h-[200px] relative">
                  <Image
                    src={`${prefix}${img}`}
                    alt={`${title} cover`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              {/* Icons & CTA */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src={`${prefix}${icon}`}
                          alt={`tech-icon-${index}`}
                          fill
                          className="p-1 object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm">Live</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
