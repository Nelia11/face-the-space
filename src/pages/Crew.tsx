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
import Section from '../components/section/Section';

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
      <Section pageNumber="02" title="meet your crew">
        {/* Role */}
        <div className="flex flex-col gap-[0.5rem] tablet:gap-[1rem] desktop:gap-[3rem]">
          <p className="text-sm md:text-base lg:text-[2rem] tracking-widest text-gray-300 opacity-50 uppercase mt-1 mb-1 font-heebo">
            {selectedCrewMember.role}
          </p>

          {/* Name */}
          <p className="text-sm md:text-base lg:text-[3.5rem] uppercase leading-relaxed font-heebo">
            {selectedCrewMember.name}
          </p>

          {/* Bio */}
          <p className="text-[18px] leading-[27px] text-gray-100 opacity-70 font-heebo">
            {selectedCrewMember.bio}
          </p>

          {/* Dots for crew member selection */}
          <div className="flex space-x-4 mt-5 mb-5 justify-center lg:justify-start">
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
      </Section>

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
