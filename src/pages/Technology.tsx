import { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import backgroundDesktop from '../assets/technology/background-technology-desktop.jpg';
import backgroundTablet from '../assets/technology/background-technology-tablet.jpg';
import backgroundMobile from '../assets/technology/background-technology-mobile.jpg';
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import { Tech } from '../interfaces/SpaceTravelData';

interface TechnologyProps {
  technologies: Tech[];
}

const Technology: FC<TechnologyProps> = ({ technologies }) => {
  const [selectedTechnology, setSelectedTechnology] = useState(0);

  const mappedTechnologies = technologies.map((tech) => {
    switch (tech.name) {
      case 'Launch vehicle':
        return {
          ...tech,
          landscapeImage: launchVehicleLandscape,
          portraitImage: launchVehiclePortrait
        };
      case 'Spaceport':
        return {
          ...tech,
          landscapeImage: spaceportLandscape,
          portraitImage: spaceportPortrait
        };
      case 'Space capsule':
        return {
          ...tech,
          landscapeImage: spaceCapsuleLandscape,
          portraitImage: spaceCapsulePortrait
        };
    }
  });

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const selectedTech = mappedTechnologies.find((_, index) => index === selectedTechnology);

  return (
    <div
      className="fixed inset-0 flex flex-col w-full text-white overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Background for different screen sizes */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${isDesktop ? backgroundDesktop : isTablet ? backgroundTablet : backgroundMobile})`
        }}
      ></div>

      {/* Header Text */}
      <div
        className="absolute text-gray-400 text-lg md:text-xl tracking-widest uppercase z-20"
        style={{
          top: '20%',
          left: '10%',
          transform: 'translateY(-50%)'
        }}
      >
        03 <span className="text-white">Space Launch 101</span>
      </div>

      {/* Main Content */}
      <div
        className={`relative flex flex-col lg:flex-row items-center justify-between w-full h-full ${
          isDesktop ? 'pt-36' : 'pt-64 md:pt-72'
        } px-6 md:px-12 lg:px-32 space-y-6 lg:space-y-0 z-10`}
      >
        {/* Sidebar with Buttons */}
        <div className="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-10 z-20">
          {mappedTechnologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedTechnology(index)}
              className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full text-lg md:text-xl lg:text-2xl font-semibold transition-colors duration-200 ${
                index === selectedTechnology
                  ? 'bg-white text-black'
                  : 'border border-white text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Technology Information */}
        <div className="lg:flex-grow text-center lg:text-left max-w-lg space-y-4 lg:ml-8 z-20">
          <h3 className="text-gray-500 uppercase text-sm tracking-widest">The Terminology...</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold tracking-[0.15em]">
            {selectedTech?.name}
          </h1>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
            {selectedTech?.description}
          </p>
        </div>

        {/* Technology Image aligned to the right */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-20">
          <img
            src={isDesktop ? selectedTech?.portraitImage : selectedTech?.landscapeImage}
            alt={selectedTech?.name}
            className="h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;

