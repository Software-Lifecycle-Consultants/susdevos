'use client';
// Importing necessary modules
import React, { useState } from 'react';

// The NavBar Component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white"> {/* Navigation bar container */}
      {/* Container for logo and other elements */}
      <div className="max-w-7xl xl:mx-10 px-4 sm:px-6 lg:px-8">
        {/* Flex container for alignment */}
        <div className="flex items-center justify-between h-20">
          {/* Flex container for logo */}
          <div className="flex items-center">
            {/* Container for logo text */}
            <div className="flex-shrink-0 mr-4">
              {/* Logo text */}
              <span className="text-lg bg-teal-500 rounded-full p-2 font-semibold">SusDev OS</span>
            </div>
          </div>
          <div className="-mr-2 flex xl:hidden">
            {/* Button for toggling menu */}
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 focus:text-white">
              {/* SVG icon for closed menu */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
               {/* SVG icon for open menu */}
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Container for buttons and email link on web view */}
          <div className="hidden xl:block absolute right-0 mr-4 xl:mr-24">
            {/* Flex container for alignment */}
            <div className="ml-4 flex items-center md:ml-6">
              {/* Email Title */}
              <h2 className="text-lg font-semibold mr-6">
                <a href="#">👋 get@susdevos.com</a> {/* Email link */}
              </h2>
              {/* Grid container for buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="h-12 w-32 border-solid border-1 outline outline-2 outline-slate-900 text-slate-900 rounded-lg bg-white hover:bg-slate-200">Sign In</button>
                <button className="h-12 w-32 border-solid border-1 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Container for mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} xl:hidden`}>
        {/* Padding and space for mobile menu items */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <h2 className="text-lg font-semibold"> {/* Email Title */}
            <a href="#">👋 get@susdevos.com</a>{/* Email link */}
          </h2>
          {/* Grid container for buttons */}
          <div className="grid grid-cols-1 gap-2">
            <button className="h-12 w-full border-solid border-1 outline outline-2 outline-slate-900 text-slate-900 rounded-lg bg-white hover:bg-slate-200">Sign In</button>
            <button className="h-12 w-full border-solid border-1 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

