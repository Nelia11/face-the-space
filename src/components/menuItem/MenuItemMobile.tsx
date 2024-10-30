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
      className={`flex items-center h-[1.87rem] text-white mt-[1.125rem] ${activeIndex === index && 'border-r-2 border-white'}`}
      onClick={() => setActiveIndex(index)}
    >
      <div className="uppercase cursor-pointer ml-[1.25rem] text-[1.125rem]">
        <span className="font-bold">{index} </span>
        {text}
      </div>
    </div>
  );
};

export default MenuItemMob;
