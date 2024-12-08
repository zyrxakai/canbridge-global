"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CommittedSection = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

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
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="bg-white mt-16 py-16 lg:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Text Content */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Title on the Left */}
          <div className="flex-1 lg:text-right text-center lg:-ml-28"> {/* Added margin-left for slight left shift */}
            <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Committed to Your Visa <br />
              <span className="text-gray-600">Success – About us</span>
            </h1>
          </div>

          {/* Paragraph on the Right */}
          <div className="flex-1 ml-0 sm:ml-0 md:ml-0 lg:ml-48 lg:text-left text-center">
            <p ref={paragraphRef} className="mt-4 lg:mt-0 text-xl text-gray-600 leading-relaxed">
              We deliver budget-friendly visa solutions, removing <br /> 
              financial barriers from your journey. Our goal is to provide <br />
              quality services at reasonable rates.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-[full] lg:w-4/5 xl:w-3/4 2xl:w-2/3 mx-auto mt-12"> {/* Increased container size for larger appearance */}
          <Image
            src="/about_img.jpg"
            alt="about_img"
            width={1200}  // Larger width for the image
            height={900}  // Larger height for the image
            className="rounded-xl mx-auto w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CommittedSection;
