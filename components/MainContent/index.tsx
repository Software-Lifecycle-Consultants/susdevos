'use client'

import SearchBar from '@/components/MainContent/SearchBar'

export default function MainContent() {
  return (
    <div className="container py-20 lg:px-20 lg:py-28 mx-auto">
      {/* Main Content Container */}
      <div className="flex flex-col justify-center px-12 lg:px-20 bg-white">
        {/* Main Heading */}
        <h1 className="text-2xl lg:text-[54px] text-slate-900 text-center font-bold leading-7 lg:leading-[61px]">
          Open-Source Web-OS for Managing{' '}
          <span className="text-teal-500">Development</span> Projects aligned
          with UN SDGs, Paris Agreement NDCs, SBTi and Sendai Frameworks
        </h1>
        {/* Sub Heading */}
        <h2 className="text-md lg:text-2xl text-slate-900 font-semibold text-center py-10 lg:py-20 px-8 lg:px-36">
          Empower Climate-Smart Development with Real-Time Data, AI, and GIS for
          Public and Private Sector Projects.
        </h2>
        <SearchBar />
      </div>
    </div>
  );
}
