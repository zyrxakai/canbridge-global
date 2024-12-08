"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const companyLogos = [
  "/clogo.png",
  "/clogo.png",
  "/clogo.png",
  "/clogo.png",
  "/clogo.png",
  "/clogo.png",
  "/clogo.png",
];

const MarqueeSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover events to stop/resume marquee
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="my-8">
      {/* Title with Lines */}
      <div className="w-100 flex items-center h-[150px]">
        <div className="flex items-center w-full justify-center relative">
          {/* Line before the title */}
          {/* <div className="absolute left-4 w-[50px] h-[2px] bg-gray-400 hidden lg:block"></div> */}
          
          <h1 className="font-medium text-xl text-gray-700 text-center px-4">
            We're proud to work with our preferred partners
          </h1>

          {/* Line after the title */}
          {/* <div className="absolute right-4 w-[50px] h-[2px] bg-gray-400 hidden lg:block"></div> */}
        </div>
      </div>

      {/* Marquee with logos */}
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex items-center space-x-6">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center bg-transparent p-6 rounded-xl opacity-75 transform transition-all duration-300 hover:scale-110 hover:opacity-100 hover:bg-gray-200"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="max-w-[150px] h-auto object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
