'use client';

/**
 * This SearchBar component is used in the MainContent component.
 * It provides a search bar for tablet and web view, and separates
 * the search bar and the button for mobile view.
 */

import { Button, Form } from "react-aria-components";

const SearchBar = () => {
    return (
      <>
        {/* Search bar for tablet and web view */}
        <Form className="relative bg-zinc-100 rounded-full shadow-lg mx-auto lg:text-2xl lg:p-2 lg:h-[72px] lg:w-[643px]">
          <div className="hidden lg:flex lg:flex-row items-center">
            <input
              className="outline-none placeholder-gray-500 font-medium text-center text-slate-900 bg-zinc-100 rounded-full text-sm lg:text-lg h-12 lg:h-14 w-full lg:w-2/3 lg:p-4"
              type="email"
              placeholder="Enter your email to join the wait list"
            />
            {/* Get Susdev OS Button */}
            <Button
              className="mt-2 lg:mt-0 lg:ml-2 lg:mr-1 lg:absolute lg:right-1  px-2 lg:p-4 hover:bg-slate-800 lg:self-center block lg:h-14 lg:w-fit rounded-full font-medium bg-slate-900 text-sm lg:text-xl text-white"
              type="submit"
            >
              GET SUSDEV-OS
            </Button>
          </div>
        </Form>
        {/* Separate search bar and button for mobile view */}
        <Form className="block lg:hidden relative bg-zinc-100 rounded-full shadow-lg mx-auto p-1 lg:p-4 h-10 lg:w-[85%] w-56">
          <input
            className="outline-none placeholder-gray-500 font-medium text-center text-slate-900 bg-zinc-100 rounded-full text-xs lg:text-lg h-8 lg:h-14 w-full lg:w-2/3 lg:p-4"
            type="email"
            placeholder="Enter your email to join the wait list"
          />
        </Form>
        <div className="block lg:hidden mx-auto max-w-lg">
          <Button
            className="mt-2 w-full px-4 py-2 rounded-full font-medium bg-slate-900 text-sm lg:text-lg text-white hover:bg-slate-800"
            type="submit"
          >
            GET SUSDEV-OS
          </Button>
        </div>
      </>
    );
  };
  
  export default SearchBar;
  