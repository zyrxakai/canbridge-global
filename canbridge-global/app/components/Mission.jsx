"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Mission = () => {

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const titleTwoRef = useRef(null);
  const paragraphTwoRef = useRef(null);

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
      gsap.fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%", // Trigger when top of the section reaches 80% of the viewport height
            end: "bottom top", // End when the bottom of the section reaches the top of the viewport
            toggleActions: "play none none none", // Play the animation when in view
          },
         }
      );

      gsap.fromTo(
        titleTwoRef.current,
        { opacity: 0, x: 200 }, // Initial state
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 30%", // Trigger when top of the section reaches 30% of the viewport height
            end: "bottom top", // End when the bottom of the section reaches the top of the viewport
            toggleActions: "play none none none", // Play the animation when in view
          },
        }
      );
      gsap.fromTo(
        paragraphTwoRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 30%", // Trigger when top of the section reaches 30% of the viewport height
            end: "bottom top", // End when the bottom of the section reaches the top of the viewport
            toggleActions: "play none none none", // Play the animation when in view
          },
         }
      );
    }
  }, []);

  return (
    <div>
      {/* First Section - Image on the Leftmost Side */}
      <section className="relative bg-gray-50 py-16 lg:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image Content */}
          <div className="relative flex-1 lg:w-1/2 xl:w-1/3">
            <Image
              src="/mission.jpg"
              alt="mission"
              width={500}
              height={200}
              className="rounded-3xl"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 ref={titleRef} className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Guiding Your Path with Our <br />
              <span className="text-gray-600">Immigration Mission</span>
            </h1>
            <p ref={paragraphRef} className="mt-6 text-xl text-gray-600 leading-relaxed">
              We're here to simplify immigration complexities, guiding you to
              success. Our mission is to unite families, open opportunities, and
              make your journey enriching. Your dreams are our focus on the path
              to a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section (Image on Left) */}
      <section className="relative bg-gray-50 py-16 lg:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 ref={titleTwoRef} className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Our Immigration <br />
              <span className="text-gray-600">Service history</span>
            </h1>
            <p ref={paragraphTwoRef} className="mt-6 text-xl text-gray-600 leading-relaxed">
              Our history began with a vision to make the immigration process <br />
              smoother and more accessible for individuals and families around <br />
              the world. With a deep understanding of the challenges that <br />
              accompany moving to a new country.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative flex-1 lg:w-1/2 xl:w-1/3">
            <Image
              src="/mission.jpg"
              alt="about us"
              width={500}
              height={200}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
