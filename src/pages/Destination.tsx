import backgroundDesktop from '../assets/destination/background-destination-desktop.jpg';
import backgroundTablet from '../assets/destination/background-destination-tablet.jpg';
import backgroundMobile from '../assets/destination/background-destination-mobile.jpg';
import marsImage from '../assets/destination/image-mars.png';
import moonImage from '../assets/destination/image-moon.png';
import europaImage from '../assets/destination/image-europa.png';
import titanImage from '../assets/destination/image-titan.png';
import { useState } from 'react';

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
  // Now selectedDestination is strictly typed as one of the keys of destinations
  const [selectedDestination, setSelectedDestination] = useState<DestinationKey>('Mars');

  const destination = destinations[selectedDestination];

  return (
    <div className="relative h-screen w-screen bg-cover bg-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundMobile})`
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hidden md:block lg:hidden"
        style={{
          backgroundImage: `url(${backgroundTablet})`
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hidden lg:block"
        style={{
          backgroundImage: `url(${backgroundDesktop})`
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center h-full w-full px-5 md:px-10 z-10 pt-20 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-6xl space-y-10 lg:space-y-0 lg:space-x-20">
          {/* Left Column - Planet Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-80 md:w-96 lg:w-full max-w-md"
            />
          </div>

          {/* Right Column - Destination Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg space-y-6 lg:space-y-10">
            {/* Subtitle above the tabs */}
            <h2 className="text-sm md:text-base tracking-widest text-gray-300 uppercase">
              01 Pick Your Destination
            </h2>

            {/* Tabs for destinations */}
            <div className="flex space-x-5 text-gray-300 uppercase tracking-widest">
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

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase">
              {destination.title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-md">
              {destination.description}
            </p>

            {/* Statistics */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full space-y-6 md:space-y-0 md:space-x-10">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-sm uppercase text-gray-300 tracking-widest">Avg. Distance</h3>
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
                  {destination.distance}
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-sm uppercase text-gray-300 tracking-widest">
                  Est. Travel Time
                </h3>
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
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

