import NavBar from '../components/navBar/NavBar';
import background from '../assets/background-home-desktop.jpg';

const Home = () => {
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Navbar */}
      <div className="absolute top-0 w-full z-10">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center h-full w-full px-10 text-white z-10 pt-20">
        {/* Outer Container with Justify Between for Left-Right Alignment */}
        <div className="flex flex-row items-start justify-between w-full max-w-6xl">
          {/* Left Column - Text Content Aligned to the Left */}
          <div className="flex flex-col space-y-4 max-w-md text-left pl-10"> {/* Added pl-10 to move text left */}
            {/* Subtitle */}
            <h2 className="text-lg md:text-xl tracking-widest text-gray-300 uppercase">
              So, you want to travel to
            </h2>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase">Space</h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out-of-this-world experience!
            </p>
          </div>

          {/* Right Column - Explore Button Aligned to the Right, Larger and Lower */}
          <div className="flex items-center justify-center pr-10 mt-20"> {/* Increased mt-20 to move button further down */}
            <div className="bg-white text-black w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform transform hover:scale-105">
              <span className="text-lg md:text-xl lg:text-2xl uppercase tracking-widest">Explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
