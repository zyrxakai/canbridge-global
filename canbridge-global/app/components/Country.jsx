"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Full country data
const countriesData = {
  Europe: [
    { name: "Belgium", flag: "/us_flag.png" },
    { name: "Denmark", flag: "/us_flag.png" },
    { name: "France", flag: "/us_flag.png" },
    { name: "Germany", flag: "/us_flag.png" },
    { name: "Greece", flag: "/us_flag.png" },
    { name: "Iceland", flag: "/us_flag.png" },
    { name: "Ireland", flag: "/us_flag.png" },
    { name: "Italy", flag: "/us_flag.png" },
    { name: "Luxembourg", flag: "/us_flag.png" },
    { name: "Netherlands", flag: "/us_flag.png" },
    { name: "Spain", flag: "/us_flag.png" },
    { name: "Sweden", flag: "/us_flag.png" },
  ],
  "North America": [
    { name: "Canada", flag: "/us_flag.png" },
    { name: "United States", flag: "/us_flag.png" },
    { name: "Mexico", flag: "/us_flag.png" },
    { name: "Guatemala", flag: "/us_flag.png" },
    { name: "Cuba", flag: "/us_flag.png" },
    { name: "Honduras", flag: "/us_flag.png" },
    { name: "Panama", flag: "/us_flag.png" },
    { name: "Jamaica", flag: "/us_flag.png" },
    { name: "Trinidad and Tobago", flag: "/us_flag.png" },
    { name: "Dominican Republic", flag: "/us_flag.png" },
    { name: "Belize", flag: "/us_flag.png" },
    { name: "Saint Lucia", flag: "/us_flag.png" },
  ],
  Asia: [
    { name: "China", flag: "/us_flag.png" },
    { name: "India", flag: "/us_flag.png" },
    { name: "Japan", flag: "/us_flag.png" },
    { name: "South Korea", flag: "/us_flag.png" },
    { name: "Indonesia", flag: "/us_flag.png" },
    { name: "Pakistan", flag: "/us_flag.png" },
    { name: "Bangladesh", flag: "/us_flag.png" },
    { name: "Russia", flag: "/us_flag.png" },
    { name: "Turkey", flag: "/us_flag.png" },
    { name: "Vietnam", flag: "/us_flag.png" },
    { name: "Thailand", flag: "/us_flag.png" },
    { name: "Philippines", flag: "/us_flag.png" },
  ],
  "Latin America": [
    { name: "Argentina", flag: "/us_flag.png" },
    { name: "Brazil", flag: "/us_flag.png" },
    { name: "Chile", flag: "/us_flag.png" },
    { name: "Peru", flag: "/us_flag.png" },
    { name: "Colombia", flag: "/us_flag.png" },
    { name: "Mexico", flag: "/us_flag.png" },
    { name: "Costa Rica", flag: "/us_flag.png" },
    { name: "Ecuador", flag: "/us_flag.png" },
    { name: "Panama", flag: "/us_flag.png" },
    { name: "Uruguay", flag: "/us_flag.png" },
    { name: "Paraguay", flag: "/us_flag.png" },
    { name: "Bolivia", flag: "/us_flag.png" },
  ],
  Oceania: [
    { name: "Australia", flag: "/us_flag.png" },
    { name: "New Zealand", flag: "/us_flag.png" },
    { name: "Fiji", flag: "/us_flag.png" },
    { name: "Papua New Guinea", flag: "/us_flag.png" },
    { name: "Samoa", flag: "/us_flag.png" },
    { name: "Tonga", flag: "/us_flag.png" },
    { name: "Vanuatu", flag: "/us_flag.png" },
    { name: "Solomon Islands", flag: "/us_flag.png" },
    { name: "Kiribati", flag: "/us_flag.png" },
    { name: "Tuvalu", flag: "/us_flag.png" },
    { name: "Nauru", flag: "/us_flag.png" },
    { name: "Marshall Islands", flag: "/us_flag.png" },
  ],
  Africa: [
    { name: "Nigeria", flag: "/us_flag.png" },
    { name: "Egypt", flag: "/us_flag.png" },
    { name: "South Africa", flag: "/us_flag.png" },
    { name: "Kenya", flag: "/us_flag.png" },
    { name: "Ethiopia", flag: "/us_flag.png" },
    { name: "Uganda", flag: "/us_flag.png" },
    { name: "Algeria", flag: "/us_flag.png" },
    { name: "Sudan", flag: "/us_flag.png" },
    { name: "Morocco", flag: "/us_flag.png" },
    { name: "Angola", flag: "/us_flag.png" },
    { name: "Tanzania", flag: "/us_flag.png" },
    { name: "Ghana", flag: "/us_flag.png" },
  ],
  Antarctica: [
    { name: "Antarctica", flag: "/us_flag.png" },
  ],
};

// Tab keys
const tabs = Object.keys(countriesData);

const Country = () => {
  const [activeTab, setActiveTab] = useState("Europe");

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

  return (
    <section className="w-full py-12 bg-gray-50 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-5xl font-semibold text-black ml-4 md:ml-12 lg:ml-16"
        >
          Make Your Choice <br />
          <span className="text-gray-600">for the Preferred Nation</span>
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl text-center max-w-lg mt-4 md:mt-0 mr-4 md:mr-12 lg:mr-16">
          Choosing the ideal destination for immigration is a <br />
           pivotal decision
          that can shape the trajectory of your
        </p>
      </div>

      {/* Tab Section with Background and Height */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-4 bg-gray-200 p-4 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-gray-300 text-black"
                  : "bg-white text-black hover:bg-blue-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Country Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-7xl mx-auto"
        >
          {countriesData[activeTab].map((country) => (
            <motion.div
              key={country.name}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex items-center p-4 cursor-pointer"
            >
              <Image
                src={country.flag}
                alt={`${country.name} Flag`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-base sm:text-lg font-medium ml-4">{country.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Country;
