import Image from 'next/image';
import React from 'react';

const SusDev: React.FC = () => {
  return (
    <div className=" flex flex-col sm:flex-row sm:w-full h-80 mb-28 mx-2">
      {/* Left Content */}
      <div className="w-full md:w-1/2 xl:w-1/3 h-full xl:ml-28 xl:mr-2">
        <div className="sm:h-1/2">
          <h3 className="pt-6 text-center xl:text-left md:text-center text-xl font-bold mb-2 sm:h-20">
            Realtime data from development projects
          </h3>
          <p className="text-center xl:text-left md:text-center">
            Projects location, ESG, resource footprint data digitized.
          </p>
        </div>
        <div className="sm:h-1/2">
          <h3 className="pt-6 text-center xl:text-left md:text-center text-xl font-bold mb-2 sm:h-20">
            Tangible climate reporting
          </h3>
          <p className="text-center xl:text-left md:text-center">
            Manage and streamline work towards tangible sustainable development.
          </p>
        </div>
      </div>
      {/* Middle Image  */}
      <div className="hidden xl:block w-1/3 h-full">
        <Image
          src="/Images/SusDevOsMain/Group.png"
          alt="SusDev Image"
          width={1000}
          height={1000}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      {/* Right Content */}
      <div className="w-full md:w-1/2 xl:w-1/3 h-full xl:mr-28 xl:ml-2">
        <div className="sm:h-1/2">
          <h3 className="text-center xl:text-left md:text-center pt-6 text-xl font-bold mb-2 sm:h-20 ">
            Workflow lifecycle management
          </h3>
          <p className="text-center xl:text-left md:text-center">
            Projects and their sub-projects workflow is automated across
            stakeholders.
          </p>
        </div>
        <div className="sm:h-1/2">
          <h3 className="text-center xl:text-left md:text-center pt-6 text-xl font-bold mb-2 sm:h-20">
            Collaborative, Node mesh & AI
          </h3>
          <p className="text-center xl:text-left md:text-center">
            Data shared with SaaS/ self hosted nodes on demand. AI Q&A -
            suggestions support work. API integration with othe IS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SusDev;
