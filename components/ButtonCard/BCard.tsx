import React from 'react';
import Image from 'next/image';

//Create main variable for creating card
interface CardProps {
  title: string;
  content: string;
  image: string;
  buttonLogic: boolean;
}

const Card: React.FC<CardProps> = ({ title, content,image,buttonLogic }) => {
  return (
    //Adding top image in the card
    <div className="rounded-3xl border-2 border-gray-200 border-solid  p-4 h-full  bg-gray-50"> 
    <div className="relative rounded-full overflow-hidden h-20 w-20 bg-[#2AD2C9] bg-opacity-64 basis-1/6">
      <Image
          src={image}
          alt={title}
          width={50}
          height={50}
          className="rounded-t-xl p-4"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      {/*Adding Title and contaent of the card */}
      <div className="p-4 h-fit">
        <h1 className="pt-6 text-xl font-bold mb-2 h-20">{title}</h1>
        <p className="pt-6 text-slate-400 subpixel-antialiased mb-4 h-40">{content}</p>
      </div>
      {/*Adding below button*/}
      <div className="flex justify-end">
        {buttonLogic  && (<button  className=" h-12 w-12  flex items-center justify-center rounded-full">
          <Image
            src="/Images/ButtonCard/CircledUpRight.png"
            alt="Button Image"
            width={50}
            height={50}
            className="rounded-full hover:bg-slate-300"
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
          </button>)}
          
      </div>
      
    </div>
  );
};

export default Card;