"use client";

import React, { useState } from "react";
import Select, { components } from "react-select";

const visaOptions = [
  { value: "student_visa", label: "Student Visa" },
  { value: "work_visa", label: "Work Visa" },
  { value: "tourist_visa", label: "Tourist Visa" },
  { value: "business_visa", label: "Business Visa" },
];

// Custom Dropdown Indicator
const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src="/student_visa.svg" alt="Visa Icon" className="w-5 h-5" />
    </components.DropdownIndicator>
  );
};

const ContactSection = () => {
  const [selectedVisa, setSelectedVisa] = useState(null);

  const handleVisaChange = (selectedOption) => {
    setSelectedVisa(selectedOption);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20">
      <div className="container mx-auto bg-white rounded-3xl p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Form */}
          <div>
            <h2 className="text-lg font-semibold text-gray-500 uppercase mb-2">
              Contact Us
            </h2>
            <p className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
              Do you have questions or want more information?
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="relative">
                  <img
                    src="/user.svg"
                    alt="User Icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                {/* Email Input */}
                <div className="relative">
                  <img
                    src="mail.svg"
                    alt="Email Icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone Input */}
                <div className="relative">
                  <img
                    src="/call.svg"
                    alt="Phone Icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                {/* Visa Type Select */}
                <div>
                  <Select
                    options={visaOptions}
                    placeholder="Select Visa Type"
                    value={selectedVisa}
                    onChange={handleVisaChange}
                    components={{ DropdownIndicator: CustomDropdownIndicator }}
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderRadius: "0.75rem",
                        borderColor: "gray",
                        boxShadow: "none",
                        "&:hover": { borderColor: "blue" },
                      }),
                      dropdownIndicator: (base) => ({
                        ...base,
                        padding: "0 8px",
                      }),
                    }}
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <img
                  src="/message.svg"
                  alt="Message Icon"
                  className="absolute left-4 top-5 w-5 h-5 text-gray-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg py-3 px-6"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section: Map */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.986373689646!2d76.94320237505976!3d8.500703091541057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xabdef907d58a4cd3%3A0xf4fb31e38785628b!2sCanbridge%20Global%20Study%20Abroad!5e0!3m2!1sen!2sin!4v1733393326485!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
