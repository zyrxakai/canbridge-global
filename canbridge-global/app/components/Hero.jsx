"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MdOutlineCheck } from "react-icons/md";

const Hero = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRefs = useRef([]);
  const listItemsRef = useRef([]);

  useEffect(() => {
    // Ensure animations only run on the client side
    if (typeof window !== "undefined") {
      // Title Animation
      gsap.fromTo(
        titleRef.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      // Paragraph Animation
      gsap.fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );

      // Button Animations
      buttonRefs.current.forEach((btn, index) => {
        gsap.fromTo(
          btn,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 1 + index * 0.4, ease: "power3.out" }
        );
      });

      // List Item Animations (staggered)
      gsap.fromTo(
        listItemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          delay: 0.7,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="bg-gray-100 py-16 h-auto flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          {/* Title with animation */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6 md:mb-16"
          >
            Immigration Visa Consulting
          </h1>

          {/* Description with animation */}
          <p
            ref={paragraphRef}
            className="text-xl sm:text-2xl text-gray-600 mb-0"
            style={{ marginTop: "-20px" }}
          >
            Expert Guidance for a Seamless Immigration Journey
          </p>

          {/* List items with animation */}
          <ul className="list-none p-0 mt-6">
            <li
              ref={(el) => listItemsRef.current.push(el)}
              className="flex items-center text-lg text-black mb-4"
            >
              <MdOutlineCheck className="mr-3 text-xl" />
              Expert Legal Support
            </li>
            <li
              ref={(el) => listItemsRef.current.push(el)}
              className="flex items-center text-lg text-black mb-4"
            >
              <MdOutlineCheck className="mr-3 text-xl" />
              Meeting Your Unique Needs
            </li>
            <li
              ref={(el) => listItemsRef.current.push(el)}
              className="flex items-center text-lg text-black mb-4"
            >
              <MdOutlineCheck className="mr-3 text-xl" />
              Tailored Immigration Solutions
            </li>
          </ul>

          {/* Buttons with animation */}
          <div className="flex space-x-4">
            <button
              ref={(el) => (buttonRefs.current[0] = el)}
              className="bg-cad hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-transform duration-200"
            >
              Book Appointment
            </button>
            <button
              ref={(el) => (buttonRefs.current[1] = el)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-xl transition-transform duration-200"
            >
              Read Story
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="/hero.png"
            alt="hero"
            className="w-full h-auto object-contain md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
