import backgroundDesktop from '../assets/home/background-home-desktop.jpg';
import backgroundTablet from '../assets/home/background-home-tablet.jpg';
import backgroundMobile from '../assets/home/background-home-mobile.jpg';
import Layout from '../components/layout/Layout';

const Home = () => {
  const handleExploreClick = () => {
    window.location.href = 'https://www.nasa.gov';
  };

  return (
    <Layout bgMob={backgroundMobile} bgTablet={backgroundTablet} bgDesktop={backgroundDesktop}>
      <div className="flex flex-col space-y-4 max-w-md lg:max-w-md text-center md:text-center lg:text-left px-5 lg:px-10 lg:pl-20">
        <h2 className="text-lg md:text-xl tracking-widest text-gray-300 uppercase">
          So, you want to travel to
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase">Space</h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out-of-this-world experience!
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 md:mt-20 lg:mt-16 lg:ml-20">
        <div
          onClick={handleExploreClick}
          className="bg-white text-black w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-lg md:text-xl lg:text-2xl uppercase tracking-widest">Explore</span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
