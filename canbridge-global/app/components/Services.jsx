"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import NewsLetter from "./NewsLetter";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    category: "Consulting",
    image: "/lady.png",
    title: "Your Comprehensive Guide to \nSuccessfully Pursuing",
    date: "22 December 2023",
    description: "Read the article",
  },
  {
    category: "Immigration",
    image: "/man.png",
    title: "Application Arsenal: Your \nEssential Toolkit",
    date: "22 December 2023",
    description: "Read the article",
  },
  {
    category: "Consulting",
    image: "/lady2.png",
    title: "Elevating Your Visa Application \nSuccess Rate",
    date: "22 December 2023",
    description: "Read the article",
  },
];

const Services = () => {
  const cardRefs = useRef([]);
  const titleRef = useRef([]);

  useEffect(() => {
    // Add hover animations
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const image = card.querySelector(".card-image");
      const description = card.querySelector(".card-description");
      const titleUnderlineTop = card.querySelector(".title-underline-top");
      const titleUnderlineBottom = card.querySelector(".title-underline-bottom");
      const titleTop = card.querySelector(".title-top");
      const titleBottom = card.querySelector(".title-bottom");

      const hoverIn = () => {
        const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power3.out" } });

        tl.to(card, { y: -10 }, 0) // Lift card
          .to(image, { scale: 1 }, 0) // Shrink image
          .to(titleUnderlineTop, { width: `${titleTop.offsetWidth}px` }, 0) // Animate underline for first line
          .to(titleUnderlineBottom, { width: `${titleBottom.offsetWidth}px` }, 0.2); // Animate underline for second line
      };

      const hoverOut = () => {
        const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power3.out" } });

        tl.to(card, { y: 0 }, 0) // Reset card
          .to(image, { scale: 1.1 }, 0) // Reset image
          .to(titleUnderlineTop, { width: "0%" }, 0) // Collapse top underline
          .to(titleUnderlineBottom, { width: "0%" }, 0); // Collapse bottom underline
      };

      card.addEventListener("mouseenter", hoverIn);
      card.addEventListener("mouseleave", hoverOut);

      return () => {
        card.removeEventListener("mouseenter", hoverIn);
        card.removeEventListener("mouseleave", hoverOut);
      };
    });
  }, []);

  useEffect(() => {
    // Title animation on scroll
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-24 w-full">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1
          ref={titleRef}
          className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
        >
          Cast Your Eyes Upon Our <br />
          <span className="text-gray-600">Newest Articles</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-500">
          Explore the most recent addition to our informative articles
        </p>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white rounded-xl shadow-md transform transition-transform duration-300 overflow-hidden cursor-pointer hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden h-48">
              <img
                src={article.image}
                alt={article.title}
                className="card-image w-full h-full object-cover scale-110 transition-transform duration-300"
              />
              <span className="absolute bottom-3 left-3 bg-cad text-white text-sm px-3 py-1 rounded-lg">
                {article.category}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-6">
              <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
                <img src="user.svg" alt="User" className="w-4 h-4" />
                <span>By admin</span>
                <span>•</span>
                <img src="calendar.svg" alt="Calendar" className="w-4 h-4" />
                <span>{article.date}</span>
              </p>

              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 relative">
                <span className="title-top">{article.title.split("\n")[0]}</span>
                <span className="title-underline-top absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800"></span>
              </h2>
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 relative">
                <span className="title-bottom">{article.title.split("\n")[1]}</span>
                <span className="title-underline-bottom absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800"></span>
              </h2>

              <div className="flex items-center text-gray-700 text-lg gap-2 mt-4 card-description opacity-80">
                <span>{article.description}</span>
                <img src="right_arrow.svg" alt="Arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16">
        <NewsLetter />
      </div>
    </section>
  );
};

export default Services;
