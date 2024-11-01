import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import iconHamburger from '../../assets/icon-hamburger.svg';
import iconClose from '../../assets/icon-close.svg';
import MenuItemDesktop from '../menuItem/MenuItemDesktop.tsx';
import MenuItemMob from '../menuItem/MenuItemMobile.tsx';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState('');
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveIndex('00');
        break;
      case '/destination':
        setActiveIndex('01');
        break;
      case '/crew':
        setActiveIndex('02');
        break;
      case '/technology':
        setActiveIndex('03');
        break;
      default:
        setActiveIndex('');
    }
  }, [location.pathname, setActiveIndex]);

  return (
    <>
      {/* phone */}
      <div className="flex phone:hidden items-center justify-between h-[8.8rem] w-full absolute pl-5 pr-5 z-20">
        <img src={logo} alt="logo" className="h-[4rem]" />
        <img
          src={iconHamburger}
          onClick={toggleMenu}
          alt="icon-hamburger"
          className="cursor-pointer"
        />
      </div>

      {isMobMenuOpen && (
        <div className="phone:hidden flex-col h-[8.8rem] w-[15.875rem] absolute right-0 h-screen backdrop-blur-lg bg-gray-900 bg-opacity-10 z-20">
          <div className="flex h-[8.8rem] items-center justify-end w-full">
            <img src={iconClose} onClick={toggleMenu} alt="icon-close" className="mr-[2rem]" />
          </div>
          <div>
            <Link to="/">
              <MenuItemMob
                index="00"
                text="home"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Link>
            <Link to="/destination">
              <MenuItemMob
                index="01"
                text="destination"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Link>
            <Link to="/crew">
              <MenuItemMob
                index="02"
                text="crew"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Link>
            <Link to="/technology">
              <MenuItemMob
                index="03"
                text="technology"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Link>
          </div>
        </div>
      )}

      {/* tablet and desktop */}
      <div className="hidden phone:flex items-center justify-center absolute w-full max-w-[1440px] mt-[0.625rem] z-20">
        <div className="flex items-center justify-between w-full">
          <div className="hidden sm501:flex items-center justify-center w-[6.25rem] z-10">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center relative">
            <div
              className="flex hidden tablet:block h-[0.01rem] bg-white w-[45rem] absolute ml-[-38rem]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
            ></div>
            <nav
              className="flex items-center justify-center h-[6.125rem] tablet:w-[40rem]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="flex items-center justify-between list-none space-x-6 text-white uppercase mr-5 ml-5 text-[1.125rem]">
                <Link to="/">
                  <MenuItemDesktop
                    index="00"
                    text="home"
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </Link>
                <Link to="/destination">
                  <MenuItemDesktop
                    index="01"
                    text="destination"
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </Link>
                <Link to="/crew">
                  <MenuItemDesktop
                    index="02"
                    text="crew"
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </Link>
                <Link to="/technology">
                  <MenuItemDesktop
                    index="03"
                    text="technology"
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
