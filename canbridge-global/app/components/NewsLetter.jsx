import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for the image

const NewsLetter = () => {
  return (
    <section className="bg-white border border-gray-200 py-12 rounded-2xl w-full max-w-7xl mx-auto mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side Content */}
          <div className="text-center lg:text-left mx-auto lg:ml-0">
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide mb-2">
              Newsletter
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 leading-snug mb-6">
              Subscribe to the free newsletter to receive the latest news & case studies!
            </h2>
            <form className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full lg:w-[400px] h-16 rounded-xl px-5 py-3 text-base text-gray-700 focus:outline-none focus:border-gray-500 transition-all bg-gray-100"
              />
              {/* Subscribe Button */}
              <button
                type="submit"
                className="bg-cad hover:bg-blue-600 text-white font-medium py-3 px-10 h-16 rounded-xl text-base transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Right Side Image */}
          <div className="lg:ml-auto mt-8 lg:mt-0 hidden lg:block">
            <Image
              src="/plane.png" 
              alt="Newsletter Image"
              layout="responsive"
              width={400}
              height={300}
              className="mx-auto lg:mx-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
