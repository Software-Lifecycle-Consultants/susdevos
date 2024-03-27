import Image from 'next/image';
import React from 'react';
import { Button } from 'react-aria-components';


interface CardProps {
  cardData: {
    imgSrc: string;
    content: string;
    cardCn: string;
    pCn: string;
    buttonCn: string;
  };
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { imgSrc, content, cardCn, pCn, buttonCn } = cardData;

  return (
    <div>
      <div className="flex mb-10 justify-center">
        <div
          className={`sm:px-2 sm:py-2 min-w-64 max-w-52  sm:max-w-64 sm:max-h-100 md:m-w-64 md:max-h-fit rounded-2xl lg:px-6 md:py-4  lg:min-w-96 lg:max-h-fit lg:rounded-3xl border-solid mt-2 ${cardCn}`}>
          
          <Image 
            className="rounded-2xl align-middle"
            src={imgSrc}
            alt="logo"
            width={400}
            height={550}
          />
          
          <p
            className={`mt-4 text-xs lg:mx-6
            lg:mt-8 font-medium lg:text-2xl lg:mb-5 font-s-[30px] ${pCn}`}>
            {content}
          </p>

        <button type="button" className="text-black border-[2px] bg-W  focus:ring-2 focus:outline-none  font-medium rounded-[100px] text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white hover:bg-teal-500 border-black mt-4 ">
             Read More
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" strokeLinecap ="round" strokeLinejoin="round" strokeWidth="2" d="m1 20.5 18-16m0 0H9.25m9.80 0v10.25"/>
          </svg>
        </button>

        </div>
      </div>
    </div>
  );
};
export default Card;