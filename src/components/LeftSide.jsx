import React, { useState } from 'react';
import { GoHome } from "react-icons/go";
import { PiSquaresFourBold } from "react-icons/pi";
import { GoTasklist } from "react-icons/go";
import { PiCirclesThreeBold } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { PiFediverseLogoFill } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

const LeftSide = () => {
  const [active, setActive] = useState('home');

  const handleClick = (section) => {
    setActive(section);
    // Add navigation logic here
  };

  return (
    <div className='flex flex-col py-10 px-6 gap-16'>
      <div className='font-bold text-2xl flex'>
        <PiFediverseLogoFill />
        <span className='-mt-1.5 mx-2'>Logip</span>
      </div>
      <div className='flex flex-col gap-4'>
        {['home', 'projects', 'tasks', 'team', 'settings'].map((section) => (
          <div
            key={section}
            className={`flex text-xl cursor-pointer items-center px-4  rounded-lg transition-colors ${
              active === section
                ? ' text-black'
                : ' text-gray-400 hover:text-black hover:bg-white'
            }`}
            onClick={() => handleClick(section)}
          >
            {section === 'home' && <GoHome size={"20px"} />}
            {section === 'projects' && <PiSquaresFourBold size={"20px"} />}
            {section === 'tasks' && <GoTasklist size={"20px"} />}
            {section === 'team' && <PiCirclesThreeBold size={"20px"} />}
            {section === 'settings' && <MdOutlineSettings size={"20px"} />}
            <span className='-mt-1.5 mx-2'>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          </div>
        ))}
      </div>
      <div>
        <div className='bg-gradient-to-b from-gray-200 to-white h-40 w-40 flex flex-col justify-center items-center p-4 rounded-2xl'>
          <div className='font-bold'>Upgrade To Pro</div>
          <div className='text-sm'>Get one month free and unlock</div>
          <div>
            <button className='rounded-2xl bg-[#70aff7] px-6 py-2 mt-4 text-white'>Upgrade</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div
          className='flex items-center px-4 py-2 rounded-lg cursor-pointer bg-white text-gray-400 hover:text-black hover:bg-white'
        >
          <IoIosInformationCircleOutline size={"20px"} />
          <span className='-mt-1.5 mx-2'>Help & Information</span>
        </div>
        <div
          className='flex items-center px-4 py-2 rounded-lg cursor-pointer bg-white text-gray-400 hover:text-black hover:bg-white'
        >
          <CiCircleMinus size={"20px"} />
          <span className='-mt-1.5 mx-2'>Log out</span>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
