"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisaSection = () => {
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Cards animation
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
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
      });
    }
  }, []);

  return (
    <section className="relative bg-gray-50 py-16 h-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section (Title, Paragraph, and Cards) */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Title */}
          <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Visa Types and Eligibility Assessment
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-600">
            Discover a range of visa options tailored to your needs. Learn about
            eligibility, requirements, and benefits for your next journey.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Tourist Visa",
              "Commercial Visa",
              "Student Visa",
              "Working Visa",
              "Residence Visa",
            ].map((title, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full bg-${
                      index % 2 === 0 ? "orange" : "purple"
                    }-200 text-${index % 2 === 0 ? "orange" : "purple"}-600`}
                  >
                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25m0 0h3.75M15.75 5.25l-4.5 4.5m0 0h-4.5m4.5 0L9 19.5m3-3.75H5.25m3.75 0V15"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-800">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {title === "Tourist Visa"
                    ? "Visit new places to discover with a Tourist Visa."
                    : "Develop your trade, set up new opportunities, or study abroad."}
                </p>
                <div className="mt-auto">
                  {/* You can add more content here */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2">
          <div
            className="w-full h-64 sm:h-80 md:w-[550px] md:h-[650px] bg-cover bg-center rounded-3xl lg:block hidden"
            style={{
              backgroundImage: `url('/demo.png')`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection;
