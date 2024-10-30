import { FC } from 'react';

interface MenuItemDesktopProps {
  index: string;
  text: string;
  activeIndex: string;
  setActiveIndex: (index: string) => void;
}

const MenuItemDesktop: FC<MenuItemDesktopProps> = ({
  index,
  text,
  activeIndex,
  setActiveIndex
}) => {
  return (
    <div
      className={`flex items-center h-[2.78rem] ${activeIndex === index && 'border-b-2 border-white'}`}
      onClick={() => setActiveIndex(index)}
    >
      <div className="cursor-pointer">
        <span className="font-bold">{index} </span>
        {text}
      </div>
    </div>
  );
};

export default MenuItemDesktop;
