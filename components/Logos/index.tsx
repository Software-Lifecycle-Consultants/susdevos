// @react/hooks/
'use client';

import Image from 'next/image';
import React from 'react';

// local imports
import Logo from './Logo';

// @react/hooks/

const logos = [
  {
    src: '/Images/Logos/logo_1.png',
    alt: 'Logo 1',
  },
  {
    src: '/Images/Logos/logo_2.png',
    alt: 'Logo 2',
  },
  {
    src: '/Images/Logos/logo_3.png',
    alt: 'Logo 2',
  },
  {
    src: '/Images/Logos/logo_4.png',
    alt: 'Logo 2',
  },
  // Add more logos here
];

const Logos = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % logos.length);
  };
  const prevImage = () => {
    setCurrentImage((currentImage > 0 ? currentImage - 1 : 3) % logos.length);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center">
        <div className="hidden sm:flex flex-row">
          {logos.map((logo, index) => (
            <Logo key={index} {...logo} />
          ))}
        </div>
      </div>
      <div className="flex mt-20 sm:hidden gap-6 p-2 w-[375px] mx-auto items-center h-[200px]">
        <Image
          src="/Images/Logos/arrow-left-s-fill.png"
          className="h-10 w-10"
          onClick={prevImage}
          alt="Button Image"
          width={50}
          height={50}
        />
        <Image
          src={logos[currentImage].src}
          alt={logos[currentImage].alt}
          width={250}
          height={150}
          className="inline"
        />
        <Image
          src="/Images/Logos/arrow-right-s-fill.png"
          className="h-10 w-10"
          onClick={nextImage}
          alt="Button Image"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Logos;
