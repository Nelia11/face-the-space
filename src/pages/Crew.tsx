import { FC, useState } from 'react';
import { CrewMember } from '../interfaces/SpaceTravelData';
import bgDesktop from '../assets/crew/background-crew-desktop.jpg';
import bgTablet from '../assets/crew/background-crew-tablet.jpg';
import bgMobile from '../assets/crew/background-crew-mobile.jpg';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import Layout from '../components/layout/Layout';

interface CrewProps {
  crew: CrewMember[];
}

interface MappedCrewMember extends CrewMember {
  image: {
    png: string;
  };
}

const Crew: FC<CrewProps> = ({ crew }) => {
  const mappedCrew: MappedCrewMember[] = crew.map((crewMember) => {
    switch (crewMember.name) {
      case 'Anousheh Ansari':
        return { ...crewMember, image: { png: anousheh } };
      case 'Douglas Hurley':
        return { ...crewMember, image: { png: douglas } };
      case 'Mark Shuttleworth':
        return { ...crewMember, image: { png: mark } };
      case 'Victor Glover':
        return { ...crewMember, image: { png: victor } };
      default:
        return { ...crewMember, image: { png: '' } };
    }
  });

  const [selectedCrewMember, setSelectedCrewMember] = useState(mappedCrew[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCircleClick = (index: number) => {
    setSelectedIndex(index);
    setSelectedCrewMember(mappedCrew[index]);
  };

  return (
    <Layout bgMob={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6 max-w-lg lg:max-w-md px-4 lg:px-0 mt-24 md:mt-0">
        <div className="text-gray-400 uppercase tracking-widest text-sm md:text-lg lg:text-xl">
          <span className="mr-2">02</span> <span className="text-white">Meet your crew</span>
        </div>

        {/* Role */}
        <p className="text-gray-300 opacity-70 uppercase tracking-wide text-sm md:text-lg lg:text-2xl min-h-[3rem]">
          {selectedCrewMember.role}
        </p>

        {/* Name */}
        <h1 className="text-white uppercase font-bold text-2xl md:text-4xl lg:text-5xl min-h-[4rem]">
          {selectedCrewMember.name}
        </h1>

        {/* Bio */}
        <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed min-h-[10rem] lg:min-h-[12rem]">
          {selectedCrewMember.bio}
        </p>

        {/* Selection Dots */}
        <div className="flex space-x-4 mt-5">
          {mappedCrew.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCircleClick(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-transform ${
                selectedIndex === index
                  ? 'bg-white scale-125 opacity-100'
                  : 'bg-gray-500 opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="mt-10 lg:mt-0 lg:ml-20 flex justify-center">
        <img
          src={selectedCrewMember.image.png}
          alt={selectedCrewMember.name}
          className="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain transition-transform duration-300"
        />
      </div>
    </Layout>
  );
};

export default Crew;
