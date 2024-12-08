"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "e.visa made my immigration journey stress-free. Their expertise and personalized guidance were remarkable, guiding me from application to approval. Now happily settled in the UK.",
      name: "MARINDA DILENDIRA",
      stars: 5,
    },
    {
      id: 2,
      quote:
        "From start to finish, evisa made my visa application a breeze. Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
      name: "GOLADRIA GOMEZ",
      stars: 5,
    },
    {
      id: 3,
      quote:
        "Thanks to e.visa, I secured my visa without stress. Their professionalism and attention to detail were extraordinary.",
      name: "JAMES HOLLOWAY",
      stars: 5,
    },
    {
      id: 4,
      quote:
        "e.visa truly exceeded my expectations, simplifying every step of my application process with precision and care.",
      name: "ALEXIS ROGERS",
      stars: 5,
    },
  ];

  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const isActive = index === currentIndex;

      // Responsive y-axis adjustment
      const yPosition =
        window.innerWidth >= 768
          ? isActive
            ? "0%"
            : "100%" // Push inactive cards to the bottom
          : isActive
          ? "0%"
          : "120%"; // Stack on smaller screens

      const xPosition = isActive ? "0%" : "50%";
      const scale = isActive ? 1 : 0.85;
      const zIndex = isActive ? 10 : 5;
      const opacity = isActive ? 1 : 0.8;

      gsap.to(card, {
        x: xPosition,
        y: yPosition,
        scale,
        zIndex,
        opacity,
        duration: 1.2,
        ease: "power3.out",
      });

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
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-gray-100 w-full py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 ref={titleRef} className="text-4xl font-bold text-gray-800 leading-snug mb-6">
            Happy Clients Reflect on Their Journey with Us
          </h1>
          <p className="text-gray-600 mb-8">
            Embark on a global exploration: experience joy in 190+ countries and
            across the world.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative overflow-hidden flex justify-center h-full">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute bg-white rounded-3xl shadow-xl p-8 text-center w-full max-w-md"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="mb-4">
                <img
                  src="/trustpilot.png"
                  alt="Trustpilot Logo"
                  className="mx-auto w-16"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <p className="text-gray-800 font-semibold text-xl">
                {testimonial.name}
              </p>
              <div className="mt-4 flex justify-center space-x-1">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
