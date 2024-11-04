import { useState, useEffect } from 'react';
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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Update isDesktop based on screen width
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="relative flex flex-col min-h-screen w-full text-white">
      {/* Backgrounds for different screen sizes */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
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

      {/* Header Text positioned just above the buttons */}
      <div
        className="absolute text-gray-400 text-lg md:text-xl tracking-widest uppercase z-20"
        style={{
          top: '20%', // Move it slightly higher
          left: '10%', // Adjust horizontal position if needed
          transform: 'translateY(-50%)' // Center alignment tweak
        }}
      >
        03 <span className="text-white">Space Launch 101</span>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full pt-24 md:pt-32 lg:pt-36 px-6 md:px-12 lg:px-32 space-y-6 lg:space-y-0 z-10">
        {/* Sidebar with Buttons */}
        <div className="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-10">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setSelectedTechnology(tech.id)}
              className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full text-lg md:text-xl lg:text-2xl font-semibold transition-colors duration-200 ${
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold tracking-[0.15em]">
            {selectedTech?.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
            {selectedTech?.description}
          </p>
        </div>

        {/* Technology Image aligned to the right */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={isDesktop ? selectedTech?.portraitImage : selectedTech?.landscapeImage}
            alt={selectedTech?.title}
            className="h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;

