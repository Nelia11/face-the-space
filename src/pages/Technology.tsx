import { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import LazyLoad from 'react-lazy-load';
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
import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';

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

  const selectedTech = mappedTechnologies.find((_, index) => index === selectedTechnology);

  return (
    <Layout bgMob={backgroundMobile} bgTablet={backgroundDesktop} bgDesktop={backgroundTablet}>
      <Section pageNumber="03" title="space launch 101">
        {/* Main Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full h-full px-6 space-y-6 lg:space-y-0 gap-1">
          {/* Sidebar with Buttons */}
          <div className="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-10 my-5">
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
          <div className="lg:flex-grow text-center lg:text-left max-w-lg space-y-4 lg:ml-8 m-10">
            <p className="text-sm md:text-base lg:text-[2rem] tracking-widest text-gray-300 opacity-50 uppercase mt-1 mb-1 font-heebo">
              The Terminology...
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold tracking-[0.15em]">
              {selectedTech?.name}
            </h1>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed text-justify">
              {selectedTech?.description}
            </p>
          </div>

          {/* Technology Image aligned to the right */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <LazyLoad>
              <img
                src={isDesktop ? selectedTech?.portraitImage : selectedTech?.landscapeImage}
                alt={selectedTech?.name}
                className="h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] object-cover"
              />
            </LazyLoad>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Technology;
