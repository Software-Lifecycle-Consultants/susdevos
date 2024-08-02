'use client';
import React from 'react';
import SideNavigationBar from '@/components/SideNavigationBar/SideNavigationBar';


const Setting = () => {
  const SettingData = [
    {
      title: 'Account Settings',
      image: <i className="ri-account-circle-line"></i>,
      alt: 'Home Image',
      button: true,
      link: '/admin/home'
    },
    {
      title: 'Company Settings',
      image: <i className="ri-building-line"></i>,
      alt: 'Dashboard Image',
      button: true,
      link: '/admin/home'
    },
    {
      title: 'User Management',
      image: <i className="ri-group-line"></i>,
      alt: 'Projects Image',
      button: true,
      link: '/admin/home'
    },
    {
      title: 'Role Management',
      image: <i className="ri-toggle-line"></i>,
      alt: 'Task Image',
      button: true,
      link: '/admin/home'
    },
    // Add more card data objects as needed
  ];

  const [selectedTitleDetails, setSelectedTitleDetails] = React.useState('');
  const [selectedTitleDetailsDisplay, setSelectedTitleDetailsDisplay] = React.useState('');

  const titleChangeHandler = (title: string) => {
    setSelectedTitleDetails(title); 
    if(title !==""){
     const selectedData:any =  SettingData.filter((sValue1:any)=>
        sValue1.title === title
      ) 
      setSelectedTitleDetailsDisplay(selectedData[0]);
      console.log("selected data",selectedData)
    }
  };

  return (
    <div className=" flex flex-col my-4 border-b border-gray-100 pb-4 ">
    <div className="flex flex-col justify-between items-left gap-2">
      {SettingData.map((card, index) => (
        <SideNavigationBar
          key={index}
          title={card.title}
          alt={card.alt}
          image={card.image}
          titleHandler={titleChangeHandler}
          button={card.button}
          link={card.title}
          textLogic={selectedTitleDetails !== ''}
          extraStyle='h-[25px]'
        />
      ))}
    </div>
  </div>
  )

};

export default Setting;
