"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Immigration = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Title Animation using ScrollTrigger
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -200 }, // Initial state
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%", // Trigger when top of the section reaches 80% of the viewport height
            end: "bottom top", // End when the bottom of the section reaches the top of the viewport
            toggleActions: "play none none none", // Play the animation when in view
          },
        }
      );
    }
  }, []);

  const steps = [
    {
      number: "1",
      title: "Choose your visa type",
      description: "Determine the Visa type for your travel purpose.",
      color: "bg-orange-500",
    },
    {
      number: "2",
      title: "Contact our branches",
      description: "Start your transaction by applying to our branches.",
      color: "bg-green-500",
    },
    {
      number: "3",
      title: "Submit All Your Documents",
      description: "Collect all the required documents for the process.",
      color: "bg-blue-500",
    },
    {
      number: "4",
      title: "Passport delivery",
      description: "Receive your visa, which is finalized after application.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto relative">
        {/* Content Container */}
        <div className="relative z-10 flex flex-wrap items-start gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Title */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-snug"
            >
              Dependable and Trustworthy Visa & <br />
              <span className="text-gray-600">Immigration Guidance</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Our team of seasoned professionals understands the complexities of
              immigration laws and visa procedures.
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl relative border border-gray-200 shadow-sm"
                >
                  {/* Step Number */}
                  <div
                    className={`absolute -top-4 left-4 w-10 h-10 ${step.color} text-white font-bold flex items-center justify-center rounded-full`}
                  >
                    {step.number}
                  </div>
                  {/* Step Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 pl-12">
                    {step.title}
                  </h3>
                  {/* Step Description */}
                  <p className="text-gray-600 mt-2 text-base font-normal pl-12">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:block hidden bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('/about.png')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Immigration;
