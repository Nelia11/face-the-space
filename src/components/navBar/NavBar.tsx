import { useState } from 'react';
import logo from '../../assets/logo.svg';
import MenuItem from '../menuItem/menuItem';

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState('00');

  return (
    <div className="flex items-center justify-center fixed h-[10rem] w-full max-w-[1440px]">
      <div className="flex items-center justify-between w-full pl-10">
        <img src={logo} alt="logo" />
        <div className="flex items-center relative">
          <div
            className="h-[.1rem] bg-white w-[30rem] absolute -left-1/2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
          ></div>
          <nav
            className="flex items-center h-[10rem]"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <div className="flex items-center justify-between list-none space-x-14 text-white uppercase mr-20 ml-40 text-[1.6rem]">
              <MenuItem
                index="00"
                text="home"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
              <MenuItem
                index="01"
                text="destination"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
              <MenuItem
                index="02"
                text="crew"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
              <MenuItem
                index="03"
                text="technology"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
