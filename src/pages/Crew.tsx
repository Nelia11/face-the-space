import { FC, useState } from 'react';
import { CrewMember } from '../interfaces/SpaceTravelData';
import bgDesktop from '../assets/crew/background-crew-desktop.jpg';
import bgTablet from '../assets/crew/background-crew-tablet.jpg';
import bgMobile from '../assets/crew/background-crew-mobile.jpg';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';

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
    <div className="relative min-h-screen w-screen bg-cover bg-center overflow-hidden">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat block phone:block tablet:hidden desktop:hidden"
        style={{
          backgroundImage: `url(${bgMobile})`
        }}
      ></div>

      {/* Tablet Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hidden tablet:block desktop:hidden"
        style={{
          backgroundImage: `url(${bgTablet})`
        }}
      ></div>

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hidden desktop:block"
        style={{
          backgroundImage: `url(${bgDesktop})`
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center h-full w-full px-5 md:px-10 text-white z-10 pt-1 mt-1">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-6xl">
          <div className="flex flex-col text-center md:text-center lg:text-left px-5 lg:px-10 lg:pl-10">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-widest">
              <span className="text-gray-400">02 </span>
              <span style={{ color: '#E5E5E5' }}>meet your crew</span>
            </h2>

            {/* Role */}
            <div className="flex flex-col tablet:mt-[5rem] gap-[2rem]">
              <p className="text-sm md:text-base lg:text-[2rem] tracking-widest text-gray-300 opacity-50 uppercase mt-1 mb-1">
                {selectedCrewMember.role}
              </p>

              {/* Name */}
              <p
                className="text-sm md:text-base lg:text-[3.5rem] font-bold uppercase leading-relaxed"
                style={{ fontFamily: 'Bellefair, serif' }}
              >
                {selectedCrewMember.name}
              </p>

              {/* Bio */}
              <p
                className="text-sm md:text-base lg:text-[1.5rem] text-blue-300"
                style={{ fontFamily: 'Bellefair, serif' }}
              >
                {selectedCrewMember.bio}
              </p>

              {/* Dots for crew member selection */}
              <div className="flex mb-5 items-center justify-center lg:justify-start w-full">
                {mappedCrew.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleCircleClick(index)}
                    className={`flex w-3 h-3 rounded-full bg-white ${selectedIndex === index ? 'w-5 h-5 opacity-100' : 'opacity-50'} mr-5 cursor-pointer transition-all duration-300`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center mt-10 lg:ml-20">
            <div className="text-black flex items-center justify-center cursor-pointer">
              <img
                src={selectedCrewMember.image.png}
                className="phone:w-[15rem] tablet:w-[25rem] desktop:w-[40rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
