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
          className={`sm:px-2 sm:py-2 min-w-48 max-w-52 min-h-52 sm:max-w-64 sm:max-h-fit md:m-w-64 md:max-h-fit rounded-2xl lg:px-6 md:py-4  lg:min-w-96 lg:max-h-fit lg:rounded-3xl border-solid mt-2 ${cardCn}`}>
          
          <img
            className="sm:w-64 sm:h-64 lg:w-[550px] lg:h-[384px] sm:ml-2 sm:mt-2 lg:ml-6 lg:mt-6"
            src={imgSrc}
            alt="logo"
          />
          
          <p
            className={`mx-4 mt-4 text-xs lg:mx-6 lg:mt-8 font-medium lg:text-2xl lg:mb-5 font-s-[30px]  ${pCn}`}
          >
            {content}
          </p>

          <Button
            
            className={`bg-white lg:w-[164px] lg:h-[44px] lg:gap-[10px] lg:mt-6 sm:ml-2 lg:ml-6  justify-center  block rounded-md sm:px-4 sm:py-2 sm:mt-4 lg:px-6 lg:py-2  text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 py-5 px-4 ${buttonCn}`}>
 
            Read More 
            
            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
            

          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
