import Image from 'next/image';
import { Button } from 'react-aria-components';



import Card from './CCard';


const Case: React.FC = () => {
  const cardDataArray = [
    {
      imgSrc: '/Images/CaseCard/caseStudyCardImage1.webp',
      content: 'Development of a Industrial park', //Description of the case study
      cardCn: '', //Card class name
      pCn: 'text-slate-950 ', //Description (pCn: paragraph class name)
      buttonCn: 'text-black bg-white bg-slate-950', //Button  class name
    },
    {
      imgSrc: '/Images/CaseCard/caseStudyCardImage1.webp',
      content: 'Road extension through a city and forest area', //Description of the case study
      cardCn: '', //Card class name
      pCn: 'text-slate-950', //Description (pCn: paragraph class name)
      buttonCn: 'text-black bg-white bg-slate-950', //Button  class name
    },
    {
      imgSrc: '/Images/CaseCard/caseStudyCardImage3.webp',
      content: '100MW Solar & 500MW Wind power plants', //Description of the case study
      cardCn: '', //Card class name
      pCn: 'text-slate-950', //Description (pCn: paragraph class name)
      buttonCn: 'text-black bg-white bg-slate-950', //Button  class name
    },
  ];

  return (
    <>
      <div className="flex-none mx-auto justify-center mt-24">
        <h1 className="flex-none text-2xl lg:text-5xl font-s-[48px] text-center font-bold font-family:outfit">
      Case Studies 
        </h1>
        <p className="font-medium mb-10 mx-6 px-6 mt-6 md:px-8 lg:px-10 md:mt-8 lg:mt-10 md:mx-24 lg:mx-32 xl:mx-56 text-center lg:text-[24px]  sm:text-[24px] font-family:outfit">
     Exploring Real-World Success Stories: How SusDev-OS Drives Environmental Impact and Sustainability
        </p>

        <div className="grid grid-cols-1 2xl:grid-cols-3 mx-24 gap-6">
        {cardDataArray.map((cardData, index) => (
          <Card key={index} cardData={cardData} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Case;