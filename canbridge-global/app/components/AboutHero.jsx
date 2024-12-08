import React from "react";

const AboutHero = () => {
  return (
    <div className="relative w-full h-[50vh]"> {/* Reduced height */}
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="about_hero.jpg" // Replace with your image URL
          alt="About Hero"
        />
      </div>

      {/* Overlay with Title */}
      <div className="relative flex items-center h-full bg-opacity-50">
        <h1
          className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-6 max-w-[90%] 
          text-left sm:max-w-[70%] md:ml-12 lg:ml-20 md:px-0"
        >
          About
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
