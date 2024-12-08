"use client";

import { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services do you offer?",
    answer: `
      We offer comprehensive immigration and visa consulting services, including:
      - Comprehensive Visa Assistance
      - Visa Category Expertise
      - Transparency and Communication
    `,
  },
  {
    question: "What is the consultation process like?",
    answer: `
      Our consultation process begins with a thorough understanding of your requirements, followed by personalized advice and a clear roadmap for your visa application journey.
    `,
  },
  {
    question: "How much do your services cost?",
    answer: `
      Our service costs vary depending on the type of visa and the complexity of your case. Contact us for a free initial consultation and a detailed breakdown of costs.
    `,
  },
  {
    question: "How do I get started with your services?",
    answer: `
      You can get started by reaching out to us through our website or by booking a free consultation call. We'll guide you every step of the way.
    `,
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
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
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24 w-full">
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Left: Title and Description */}
        <div className="lg:w-1/2 space-y-6">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug"
          >
            Common Questions <br />
            <span className="text-gray-600">Answered</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium">
            At the heart of our commitment to providing exceptional immigration
            solutions stands our trusted expertise.
          </p>
          <img
            className="mt-12 rounded-xl object-cover w-full max-h-72"
            src="/faq.png"
            alt="FAQ"
          />
        </div>

        {/* Right: FAQ Accordion */}
        <div className="lg:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className="rounded-xl transition-all"
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index}` ? (
                    <IconButton>
                      <RemoveIcon />
                    </IconButton>
                  ) : (
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                  )
                }
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
                className="bg-white transition p-4 rounded-xl"
              >
                <Typography className="text-lg md:text-xl font-medium text-black">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="p-4 text-gray-600 text-base md:text-lg leading-relaxed">
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
