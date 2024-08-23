'use client';

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
      <div className="flex mb-10 justify-center mx-2 mt-0 lg:mt-24">
        <div className={`px-2 py-1 sm:px-4 sm:py-2 min-w-64 max-w-64 min-h-64 sm:max-w-64 sm:max-h-fit md:m-w-64 md:max-h-fit rounded-2xl lg:px-6 md:py-4  lg:min-w-96 lg:max-h-fit lg:rounded-3xl border-solid mt-2 ${cardCn}`}>
          <Image className="size-12 sm:w-14 sm:h-14 lg:w-24 lg:h-24 ml-4 lg:ml-6 mt-6 lg:mt-8 xl:w-24 xl:h-24" src={imgSrc} alt="logo" width={160} height={160}/>
          <p className={`mx-4 mt-4 text-md lg:mx-6 lg:mt-8 font-medium lg:text-2xl lg:mb-5 ${pCn}`}>
            {content}
          </p>
          <Button className={`text-sm font-medium outline-none w-24 h-8 mt-4 mb-4 mx-4 sm:text-sm sm:w-24 sm:h-8 sm:mb-6 sm:mt-6 sm:mx-4 lg:w-32 lg:h-11 lg:mb-8 lg:mt-8 rounded-full border-none lg:mx-6 ${buttonCn}`}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
