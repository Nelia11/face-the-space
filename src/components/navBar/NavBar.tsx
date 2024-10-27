import { useState } from 'react';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems: { id: string; label: string }[] = [
    { id: '00', label: 'home' },
    { id: '01', label: 'destination' },
    { id: '02', label: 'crew' },
    { id: '03', label: 'technology' }
  ];

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
              {menuItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center h-[10rem] ${activeIndex === index && 'border-b-2 border-white'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="cursor-pointer">
                    <span className="font-bold">{item.id} </span>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
