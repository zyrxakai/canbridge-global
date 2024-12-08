"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Success = () => {
  const statsRef = useRef(null);
  const titleRef = useRef(null);

  const stats = [
    { icon: "/plane.png", value: 20000, label: "Visa Categories", borderColor: "border-l-4 border-red-500" },
    { icon: "/hero.png", value: 30000, label: "Visa Process", borderColor: "border-l-4 border-green-500" },
    { icon: "/hero.png", value: 40000, label: "Successful Projects", borderColor: "border-l-4 border-blue-500" },
    { icon: "/plane.png", value: 180000, label: "Pro Consultants", borderColor: "border-l-4 border-yellow-500" }, // Added yellow border
  ];

  const formatNumber = (number) => {
    return number >= 1000 ? `${(number / 1000).toFixed(0)}K` : number;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      onEnter: () => {
        statsRef.current.querySelectorAll(".stat-value").forEach((element, index) => {
          const statValue = stats[index].value;
          gsap.to(element, {
            duration: 2,
            innerText: statValue,
            roundProps: "innerText",
            ease: "power3.out",
            modifiers: {
              innerText: (value) => formatNumber(parseInt(value)),
            },
          });
        });

        gsap.fromTo(
          titleRef.current,
          { opacity: 0, x: -200 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none none",
            },
          }
        );
      },
    });
  }, []);

  return (
    <section className="relative bg-gray-50 py-16 px-6 sm:px-12 lg:px-20 w-full" ref={statsRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/banner.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
        {/* Title */}
        <div ref={titleRef} className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Discovering Our Biggest Successes
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 mt-2">
            The Stories Behind Our Great Achievements
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Embarking on a journey to reunite families, we recently had the
          privilege of assisting a couple in securing their spouse's visa.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 bg-white shadow-lg rounded-3xl p-6 lg:p-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center space-y-4 ${stat.borderColor}`} // No border-bottom
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                <img src={stat.icon} alt={stat.label} className="w-10 h-10" />
              </div>
              <h3 className="text-5xl sm:text-5xl font-semibold text-gray-800">
                <span className="stat-value">0</span>
              </h3>
              <p className="text-lg font-regular text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
