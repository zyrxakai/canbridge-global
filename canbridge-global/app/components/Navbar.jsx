"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarDropdown, setSidebarDropdown] = useState(null);

  // Dropdown options for each nav link, now with individual links for each dropdown item
  const dropdownOptions = {
    Home: [
      { name: "Immigration", link: "/home/immigration" },
      { name: "Student Visa", link: "/home/student-visa" },
      { name: "Travel Agency", link: "/home/travel-agency" },
    ],
    Pages: [
      { name: "Services", link: "/pages/services" },
      { name: "Service Details", link: "/pages/service-details" },
      { name: "Coaching", link: "/pages/coaching" },
      { name: "Coaching Details", link: "/pages/coaching-details" },
      { name: "Visa", link: "/pages/visa" },
      { name: "Visa Details", link: "/pages/visa-details" },
      { name: "Team", link: "/pages/team" },
      { name: "Team Details", link: "/pages/team-details" },
      { name: "Testimonial", link: "/pages/testimonial" },
      { name: "FAQ", link: "/pages/faq" },
    ],
    Country: [
      { name: "Country", link: "/country/country" },
      { name: "Country Details", link: "/country/country-details" },
    ],
    Blog: [
      { name: "Blog", link: "/blog" },
      { name: "Blog Details", link: "/blog/blog-details" },
    ],
  };

  const handleMouseEnter = (item) => {
    setOpenDropdown(item);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarDropdown = (item) => {
    if (sidebarDropdown === item) {
      setSidebarDropdown(null);
    } else {
      setSidebarDropdown(item);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 w-full">
      <div className="w-full">
        {/* Top Section */}
        <div className="bg-gray-100 flex justify-between items-center text-sm text-black px-4 py-4 w-full">
          <div className="flex items-center gap-6">
            <span>
              <strong>HELP DESK:</strong> 1213245678
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-clock"></i> Monday – Friday 09:00 am – 05:00 pm
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-map-marker-alt"></i> Canbridge Global
            </span>
          </div>
        </div>

        {/* Navbar Section */}
        <div className="flex justify-between items-center px-4 py-6 relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/clogo.png" alt="Logo" className="w-40" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden text-2xl text-gray-800"
            onClick={toggleSidebar}
          >
            <AiOutlineMenu />
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9 justify-center mx-auto">
            {["Home", "Pages", "About us", "Country", "Blog", "Contact"].map(
              (item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`px-3 py-1 w-24 border rounded-md shadow-sm cursor-pointer text-center`}
                  >
                    <Link
                      href={
                        item === "Home"
                          ? "/" // Home page
                          : item === "About us"
                          ? "/about" // About us page
                          : item === "Pages"
                          ? "/pages" // Pages section
                          : item === "Country"
                          ? "/country" // Country page
                          : item === "Blog"
                          ? "/blog" // Blog page
                          : "/contact" // Contact page
                      }
                      className="text-gray-700 text-sm font-medium"
                    >
                      {item} {dropdownOptions[item] ? "+" : ""}
                    </Link>
                  </div>

                  {/* Dropdown */}
                  {dropdownOptions[item] && openDropdown === item && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: -10 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute w-48 bg-white border shadow-lg py-2 z-10 rounded-md"
                      style={{ top: "calc(100% + 10px)" }}
                    >
                      {dropdownOptions[item].map((option, idx) => (
                        <Link
                          key={idx}
                          href={option.link}  // Use the individual link from the dropdownOptions
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {option.name}  {/* Display the name of the dropdown option */}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              )
            )}
          </nav>
        </div>

        {/* Sidebar and Overlay */}
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-10"
              onClick={toggleSidebar} // Close sidebar on clicking the overlay
            ></motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-20 overflow-y-auto"
            >
              <div className="p-6 relative">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-2xl text-gray-800"
                  onClick={toggleSidebar}
                >
                  <AiOutlineClose />
                </button>

                {/* Sidebar Links */}
                <ul className="space-y-4 mt-8">
                  {["Home", "Pages", "About us", "Country", "Blog", "Contact"].map(
                    (item, index) => (
                      <li key={index}>
                        <div className="relative border-b border-gray-300 pb-3">
                          <div
                            className="cursor-pointer flex justify-between items-center text-lg font-medium"
                            onClick={() => toggleSidebarDropdown(item)}
                          >
                            <span>{item}</span>
                            {sidebarDropdown === item ? (
                              <AiOutlineUp />
                            ) : (
                              <AiOutlineDown />
                            )}
                          </div>
                          {sidebarDropdown === item &&
                            dropdownOptions[item] && (
                              <div className="ml-4 mt-3 space-y-2">
                                {dropdownOptions[item].map((option, idx) => (
                                  <Link
                                    key={idx}
                                    href={option.link}
                                    className="block py-2 text-gray-700"
                                  >
                                    {option.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
