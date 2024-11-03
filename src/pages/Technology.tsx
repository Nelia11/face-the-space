import { useState } from 'react';
import backgroundDesktop from '../assets/technology/background-technology-desktop.jpg';
import backgroundTablet from '../assets/technology/background-technology-tablet.jpg';
import backgroundMobile from '../assets/technology/background-technology-mobile.jpg';
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';

const TechnologyPage = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(1);

  const technologies = [
    {
      id: 1,
      title: 'LAUNCH VEHICLE',
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      landscapeImage: launchVehicleLandscape,
      portraitImage: launchVehiclePortrait
    },
    {
      id: 2,
      title: 'SPACEPORT',
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft. It is equipped with state-of-the-art launch facilities and support equipment for seamless missions.',
      landscapeImage: spaceportLandscape,
      portraitImage: spaceportPortrait
    },
    {
      id: 3,
      title: 'SPACE CAPSULE',
      description:
        'A space capsule is an often smaller, crewed vehicle designed to be used for manned space missions. Our WEB-X capsule ensures maximum safety and comfort for crew members.',
      landscapeImage: spaceCapsuleLandscape,
      portraitImage: spaceCapsulePortrait
    }
  ];

  const selectedTech = technologies.find((tech) => tech.id === selectedTechnology);

  return (
    <div className="relative flex min-h-screen w-full text-white">
      {/* Backgrounds for different screen sizes */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundMobile})`
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block lg:hidden"
        style={{
          backgroundImage: `url(${backgroundTablet})`
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `url(${backgroundDesktop})`
        }}
      ></div>

      {/* Header Text Slightly Higher */}
      <div className="absolute top-16 left-8 text-gray-400 text-xl tracking-widest uppercase z-20">
        03 Space Launch 101
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full pt-32 px-8 md:px-16 lg:px-32 space-y-6 lg:space-y-0 z-10">
        {/* Sidebar with Numbers */}
        <div className="flex flex-col items-center lg:items-start lg:space-y-10 space-x-8 lg:space-x-0 lg:mr-12">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setSelectedTechnology(tech.id)}
              className={`flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full text-xl font-semibold ${
                tech.id === selectedTechnology
                  ? 'bg-white text-black'
                  : 'border border-white text-white'
              }`}
            >
              {tech.id}
            </button>
          ))}
        </div>

        {/* Technology Information */}
        <div className="lg:flex-grow text-center lg:text-left max-w-lg space-y-4 lg:ml-8">
          <h3 className="text-gray-500 uppercase text-sm tracking-widest">The Terminology...</h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-bold">
            {selectedTech?.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {selectedTech?.description}
          </p>
        </div>

        {/* Technology Image aligned to the right */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-0">
          <img
            src={
              window.innerWidth >= 1024 ? selectedTech?.portraitImage : selectedTech?.landscapeImage
            }
            alt={selectedTech?.title}
            className="h-auto max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] lg:max-w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;

