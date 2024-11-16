import { FC, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  pageNumber: string;
  title: string;
}

const Section: FC<SectionProps> = ({ children, pageNumber, title }) => {
  return (
    <div className="flex flex-col items-center text-center md:text-center lg:text-left px-5 desktop:mt-[1rem]">
      {/* Section Title */}
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-widest lg:w-full phone:mb-[3rem] text-gray-400">
        <span className="text-gray-400">{`${pageNumber} `}</span>
        <span style={{ color: '#E5E5E5' }}>{title}</span>
      </div>
      {children}
    </div>
  );
};
export default Section;
