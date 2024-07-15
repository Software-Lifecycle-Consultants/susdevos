'use client'

import Image from 'next/image';
import { Button} from 'react-aria-components';

//Create main variable for creating card
interface CardProps {
  title: string;
  content: string;
  image: string;
  buttonLogic: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, image, buttonLogic }) => {
  return (
    //Adding top image in the card
    <div className="flex flex-col rounded-3xl border-2 border-gray-200 border-solid p-4 h-full bg-gray-50">
      <div className="flex justify-start rounded-full w-20 h-20 bg-[#2AD2C9] bg-opacity-64">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="p-4"
        />
      </div>

      {/*Adding Title and content of the card */}
      <div className="p-4">
        <h1 className="pt-6 text-xl font-bold mb-2 lg:min-h-36 xl:min-h-32 2xl:min-h-20">{title}</h1>
        <p className="pt-6 text-slate-400 subpixel-antialiased mb-4">
          {content}
        </p>
      </div>

      {/*Adding below button*/}
      <div className="flex justify-end items-end flex-grow">
        {buttonLogic && (
          <Button className="h-12 w-12 flex items-center justify-center rounded-full">
            <Image
              src="/Images/ButtonCard/CircledUpRight.png"
              alt="Button Image"
              width={50}
              height={50}
              className="rounded-full hover:bg-slate-300"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
