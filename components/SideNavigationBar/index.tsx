'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import LogOutButton from './LogOutButton';
import Settings from './Settings';
import SideNavigationBar from './SideNavigationBar';
import SearchField from './SearchField';

const Admin = () => {
  const NavigationBarData1 = [
    {
      title: 'Home',
      image: <i className="ri-home-5-line"></i>,
      alt: 'Home Image',
      button: true,
      link: '/admin/home',
    },
    {
      title: 'Dashboard',
      image: <i className="ri-bar-chart-line"></i>,
      alt: 'Dashboard Image',
      button: true,
      link: '/admin/home',
    },
    {
      title: 'Projects',
      image: <i className="ri-stack-line"></i>,
      alt: 'Projects Image',
      button: true,
      link: '/admin/home',
    },
    {
      title: 'Tasks',
      image: <i className="ri-edit-box-line"></i>,
      alt: 'Task Image',
      button: true,
      link: '/admin/home',
    },
    {
      title: 'Reporting',
      image: <i className="ri-flag-line"></i>,
      alt: 'Reporting Image',
      button: true,
      link: '/admin/home',
    },
    {
      title: 'Users',
      image: <i className="ri-group-line"></i>,
      alt: 'Users Image',
      button: true,
      link: '/admin/home',
    },
    // Add more card data objects as needed
  ];

  const NavigationBarData2 = [
    {
      title: 'Support',
      image: <i className="ri-lifebuoy-line"></i>,
      alt: 'Support Image',
      button: true,
      link: '/admin/support',
    },
    {
      title: 'Settings',
      image: <i className="ri-settings-5-line"></i>,
      alt: 'Settings Image',
      button: true,
      link: '/admin/support',
    },
    // Add more card data objects as needed
  ];

  const [selectedTitleDetails, setSelectedTitleDetails] = React.useState('');
  const [selectedTitleDetailsDisplay, setSelectedTitleDetailsDisplay] =
    React.useState<any>({ image: '', title: '' });

  const [windowWidth, setWindowWidth] = useState(0);
  const [isShowSidebar, setIsShowSidebar] = useState(windowWidth > 1024);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setIsShowSidebar(window.innerWidth > 1024);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const titleChangeHandler = (value: string) => {
    setSelectedTitleDetails(value);

    if (value !== '') {
      const selectedData: any = NavigationBarData1.filter(
        (sValue1: any) => sValue1.title === value,
      );
      setSelectedTitleDetailsDisplay(selectedData[0]);
      console.log('selected data', selectedData);
    }
  };
  const titleChangeHandler1 = (value: string) => {
    setSelectedTitleDetails(value);
    if (value !== '') {
      const selectedData: any = NavigationBarData2.filter(
        (sValue1: any) => sValue1.title === value,
      );
      setSelectedTitleDetailsDisplay(selectedData[0]);
      console.log('selected data', selectedData);
    }
  };

  return (
    <div>
      <div
        className={`${windowWidth < 1024 ? 'flex' : 'hidden'}`}
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        {isShowSidebar ? (
          <i className="ri-menu-line"></i>
        ) : (
          <i className="ri-menu-line"></i>
        )}
      </div>
      <div
        className={`p-1 h-screen z-20 top-0 w-[400px] ${isShowSidebar ? 'flex' : 'hidden'} items-start justify-start
        peer:transition ease-out delay-150 duration-200`}
      >
        <div
          className={`flex flex-col justify-start align-item-center  transition-all h-full  ${selectedTitleDetails !== '' ? 'w-1/5' : 'w-full'}  `}
        >
          <div className="flex flex-col justify-start align-item-center ">
            {' '}
            <div className='flex flex-row p-4 border-b border-gray-100'>
              <Image
                src="/Images/SideNavigationBar/UntitledUI.png"
                className="text-2xl text-gray-600 group-hover:text-white "
                // onClick={}
                alt="Button Image"
                width={40}
                height={20}
              />
              <h1 className={`text-base text-center cursor-pointer font-bold text-blue-900  w-full ${selectedTitleDetails !== '' ? 'hidden' : ''}`}
              >
                Untitled UI
              </h1>
            </div>
            <div className={`${selectedTitleDetails !== '' ? 'hidden' : ''}`}>
              <SearchField/>
            </div>
            <div className="flex flex-col my-4 border-b border-gray-100 pb-4 ">
              <div className={`flex flex-col gap-2  ${selectedTitleDetails !== '' ? 'items-center' : ''}`}>
                {NavigationBarData1.map((card, index) => (
                  <SideNavigationBar
                    key={index}
                    title={card.title}
                    alt={card.alt}
                    image={card.image}
                    button={card.button}
                    titleHandler={titleChangeHandler}
                    textLogic={selectedTitleDetails !== ''}
                    link={card.title}
                  />
                ))}
              </div>
            </div>
            {/* support & setting  */}
            <div className=" flex flex-col my-4 border-b border-gray-100 pb-4 ">
              <div className={`flex flex-col gap-2  ${selectedTitleDetails !== '' ? 'items-center' : ''}`}>
                {NavigationBarData2.map((card, index) => (
                  <SideNavigationBar
                    key={index}
                    title={card.title}
                    alt={card.alt}
                    image={card.image}
                    button={card.button}
                    titleHandler={titleChangeHandler1}
                    textLogic={selectedTitleDetails !== ''}
                    link={card.title}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* logout */}
          <div className=" my-4">
            <LogOutButton 
              titleHandler={titleChangeHandler1}
              textLogic={selectedTitleDetails !== ''} title={''}            />
          </div>
        </div>
        <div
          className={`w-1/2  h-full  ${selectedTitleDetails !== '' ? 'w-3/4' : 'w-0 opacity-0'}`}
          onClick={() => {
            setSelectedTitleDetails('');
          }}
        >
          {' '}
          <div className="flex gap-2 w-full  items-center">
            {selectedTitleDetailsDisplay.image}

            <h3>{selectedTitleDetailsDisplay.title}</h3>
          </div>
          {selectedTitleDetailsDisplay.title == 'Settings' && (
            <div className="">
              <Settings />
            </div>
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default Admin;
