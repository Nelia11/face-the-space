import { useState, useEffect, FC } from 'react';
import backgroundDesktop from '../assets/destination/background-destination-desktop.jpg';
import backgroundTablet from '../assets/destination/background-destination-tablet.jpg';
import backgroundMobile from '../assets/destination/background-destination-mobile.jpg';
import marsImage from '../assets/destination/image-mars.png';
import moonImage from '../assets/destination/image-moon.png';
import europaImage from '../assets/destination/image-europa.png';
import titanImage from '../assets/destination/image-titan.png';
import { TravelDestination } from '../interfaces/SpaceTravelData';

interface DestinationProps {
  testdestinations: TravelDestination[];
}

const Destination: FC<DestinationProps> = ({ testdestinations }) => {
  const mappedDestination = testdestinations.map((destination) => {
    switch (destination.name) {
      case 'Moon':
        return { ...destination, image: moonImage };
      case 'Mars':
        return { ...destination, image: marsImage };
      case 'Europa':
        return { ...destination, image: europaImage };
      case 'Titan':
        return { ...destination, image: titanImage };
      default:
        return { ...destination, image: '' };
    }
  });

  const [selectedDestination, setSelectedDestination] = useState(mappedDestination[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDestinationClick = (index: number) => {
    setSelectedIndex(index);
    setSelectedDestination(mappedDestination[index]);
  };

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    setVh(); // Set on load
    window.addEventListener('resize', setVh); // Update on resize
    return () => window.removeEventListener('resize', setVh); // Clean up
  }, []);

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
              src={selectedDestination.image}
              alt={selectedDestination.name}
              className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs lg:max-w-sm"
            />
          </div>

          {/* Right Column - Destination Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-0">
            {/* Destination Tabs */}
            <div className="flex space-x-4 sm:space-x-5 md:space-x-6 text-gray-400 uppercase tracking-widest text-xs sm:text-sm md:text-base">
              {mappedDestination.map((destination, index) => (
                <span
                  key={index}
                  onClick={() => handleDestinationClick(index)}
                  className={`cursor-pointer hover:text-white ${
                    selectedIndex === index ? 'border-b-2 border-white text-white' : ''
                  }`}
                >
                  {destination.name}
                </span>
              ))}
            </div>

            {/* Destination Name */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
              {selectedDestination.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
              {selectedDestination.description}
            </p>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 border-t border-gray-600 pt-4">
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                  Avg. Distance
                </h3>
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase">
                  {selectedDestination.distance}
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                  Est. Travel Time
                </h3>
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase">
                  {selectedDestination.travel}
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
