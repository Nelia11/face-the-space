import { FC } from 'react';

interface MenuItemMobProps {
  index: string;
  text: string;
  activeIndex: string;
  setActiveIndex: (index: string) => void;
}

const MenuItemMob: FC<MenuItemMobProps> = ({ index, text, activeIndex, setActiveIndex }) => {
  return (
    <div
      className={`flex items-center h-[3rem] text-white mt-[2rem] ${activeIndex === index && 'border-r-2 border-white'}`}
      onClick={() => setActiveIndex(index)}
    >
      <div className="uppercase cursor-pointer ml-[2rem] text-[1.8rem]">
        <span className="font-bold">{index} </span>
        {text}
      </div>
    </div>
  );
};

export default MenuItemMob;
