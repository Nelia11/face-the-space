import backgroundDesktop from '../assets/background-home-desktop.jpg';
import backgroundTablet from '../assets/background-home-tablet.jpg';
import backgroundMobile from '../assets/background-home-mobile.jpg';

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-cover bg-center">
      {/* Responsive Background Images for Tablet and Desktop */}
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
      <div className="relative flex items-center justify-center h-full w-full px-5 md:px-10 text-white z-5 pt-20">
        {/* Outer Container with Responsive Layout for Mobile, Tablet, and Desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-6xl">
          {/* Left Column - Text Content with Responsive Center Alignment on Mobile and Tablet */}
          <div className="flex flex-col space-y-4 max-w-md lg:max-w-md text-center md:text-center lg:text-left px-5 lg:px-10">
            {/* Subtitle */}
            <h2 className="text-lg md:text-xl tracking-widest text-gray-300 uppercase">
              So, you want to travel to
            </h2>
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase">Space</h1>
            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed pb-[2rem]">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
              give you a truly out-of-this-world experience!
            </p>
          </div>

          {/* Right Column - Explore Button Aligned to the Right, Larger and Lower */}
          <div className="flex items-center justify-center">
            {/* Increased mt-20 to move button further down */}
            <div className="bg-white text-black w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform transform hover:scale-105">
              <span className="text-lg md:text-xl lg:text-2xl uppercase tracking-widest">
                Explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
