import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Do you have questions or want more information? Contact us
              </h3>
              <br />
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="bg-white text-green-500 rounded-full p-2">
                    <img src="/call.svg" alt="phone" />
                  </div>
                  <span className="text-black font-semibold text-xl">+91123456789</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="bg-white text-blue-500 rounded-full p-2">
                    <img src="/mail.svg" alt="email" />
                    
                  </div>
                  <span className="text-black font-semibold text-xl">e.visa@gmail.com</span>
                </li>
              </ul>
            </div>
    
            {/* Explore Link Section */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Explore Links</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li className='cursor-pointer hover:text-black'>About Us</li>
                <li className='cursor-pointer hover:text-black'>Blog</li>
                <li className='cursor-pointer hover:text-black'>Testimonials</li>
                <li className='cursor-pointer hover:text-black'>Terms & Conditions</li>
                <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
              </ul>
            </div>
    
            {/* Services Section */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Services</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li className='cursor-pointer hover:text-black'>About Us</li>
                <li className='cursor-pointer hover:text-black'>Blog</li>
                <li className='cursor-pointer hover:text-black'>Testimonials</li>
                <li className='cursor-pointer hover:text-black'>Terms & Conditions</li>
                <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
              </ul>
            </div>
    
            {/* Our Branches Section */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Our Branches</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li className='cursor-pointer hover:text-black'>About Us</li>
                <li className='cursor-pointer hover:text-black'>Blog</li>
                <li className='cursor-pointer hover:text-black'>Testimonials</li>
                <li className='cursor-pointer hover:text-black'>Terms & Conditions</li>
                <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
              </ul>
            </div>
          </div>
    
          <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2024 e.visa All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <img src="/card.png" alt="Paypal" className="w-full h-full" />
            </div>
          </div>
        </footer>
      );
    }

export default Footer
