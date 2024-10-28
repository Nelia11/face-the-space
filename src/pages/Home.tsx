import NavBar from '../components/navBar/NavBar'; // Import your NavBar component
import background from '../assets/background-home-desktop.jpg';

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-gray-900 flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar */}
      <div className="absolute top-0 w-full z-10">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-between w-full max-w-[1440px] px-10 z-10">
        <h1 className="text-white text-[1.6rem] uppercase">Home</h1>
      </div>
    </div>
  );
};

export default Home;
