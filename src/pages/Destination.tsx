import { useState, useEffect } from 'react';
import backgroundDesktop from '../assets/destination/background-destination-desktop.jpg';
import backgroundTablet from '../assets/destination/background-destination-tablet.jpg';
import backgroundMobile from '../assets/destination/background-destination-mobile.jpg';
import marsImage from '../assets/destination/image-mars.png';
import moonImage from '../assets/destination/image-moon.png';
import europaImage from '../assets/destination/image-europa.png';
import titanImage from '../assets/destination/image-titan.png';

type DestinationKey = 'Mars' | 'Moon' | 'Europa' | 'Titan';

type Destination = {
  image: string;
  title: string;
  description: string;
  distance: string;
  travelTime: string;
};

const destinations: Record<DestinationKey, Destination> = {
  Mars: {
    image: marsImage,
    title: 'Mars',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 Mil. KM',
    travelTime: '9 Months'
  },
  Moon: {
    image: moonImage,
    title: 'Moon',
    description:
      'Visit our closest celestial neighbor. The moon is full of craters, lunar maria, and more for explorers to discover.',
    distance: '384,400 KM',
    travelTime: '3 Days'
  },
  Europa: {
    image: europaImage,
    title: 'Europa',
    description:
      'The icy moon of Jupiter. A vast ocean lies beneath its surface, making it a fascinating place for scientific discovery.',
    distance: '628 Mil. KM',
    travelTime: '6 Years'
  },
  Titan: {
    image: titanImage,
    title: 'Titan',
    description:
      'Saturn’s largest moon, known for its dense atmosphere and lakes of liquid methane. Titan offers an otherworldly experience.',
    distance: '1.2 Bil. KM',
    travelTime: '7 Years'
  }
};

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState<DestinationKey>('Mars');

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    setVh(); // Set on load
    window.addEventListener('resize', setVh); // Update on resize
    return () => window.removeEventListener('resize', setVh); // Clean up
  }, []);

  const destination = destinations[selectedDestination];

  return (
    <div
      className="relative w-screen overflow-hidden text-white"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Background layers with fixed position */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundMobile})`,
          backgroundSize: 'cover',
          height: '100vh'
        }}
      ></div>

      <div
        className="fixed inset-0 bg-cover bg-center z-0 hidden md:block lg:hidden"
        style={{
          backgroundImage: `url(${backgroundTablet})`,
          backgroundSize: 'cover',
          height: '100vh'
        }}
      ></div>

      <div
        className="fixed inset-0 bg-cover bg-center z-0 hidden lg:block"
        style={{
          backgroundImage: `url(${backgroundDesktop})`,
          backgroundSize: 'cover',
          height: '100vh'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center h-full w-full px-5 md:px-10 lg:px-32 z-10 mt-1 lg:mt-3">
        {/* Section Title */}
        <div className="w-full flex flex-col items-center lg:items-start mb-3 md:mb-5 lg:ml-28 text-center lg:text-left mt-12 md:mt-16 lg:mt-0">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-widest">
            <span className="text-gray-400">01</span>{' '}
            <span style={{ color: '#E5E5E5' }}>Pick Your Destination</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full space-y-5 md:space-y-10 lg:space-y-0 lg:space-x-20">
          {/* Left Column - Centered Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-28 mt-5">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs lg:max-w-sm"
            />
          </div>

          {/* Right Column - Destination Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-0">
            {/* Destination Tabs */}
            <div className="flex space-x-4 sm:space-x-5 md:space-x-6 text-gray-400 uppercase tracking-widest text-xs sm:text-sm md:text-base">
              {Object.keys(destinations).map((key) => (
                <span
                  key={key}
                  onClick={() => setSelectedDestination(key as DestinationKey)}
                  className={`cursor-pointer hover:text-white ${
                    selectedDestination === key ? 'border-b-2 border-white text-white' : ''
                  }`}
                >
                  {key}
                </span>
              ))}
            </div>

            {/* Destination Title */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
              {destination.title}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
              {destination.description}
            </p>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 border-t border-gray-600 pt-4">
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                  Avg. Distance
                </h3>
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase">
                  {destination.distance}
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                  Est. Travel Time
                </h3>
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase">
                  {destination.travelTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
