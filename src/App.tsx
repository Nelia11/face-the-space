import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { useEffect, useState } from 'react';
import { SpaceTravelData } from './interfaces/SpaceTravelData';

const App = () => {
  const [spaceTravelData, setSpaceTravelData] = useState<SpaceTravelData | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetch('/api/data.json');
      if (!data) throw new Error();
      const res: SpaceTravelData = await data.json();
      setSpaceTravelData(res);
    } catch (error) {
      console.error('Failed to fetch: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!spaceTravelData) {
    return <div>Loading...</div>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { destinations, crew, technology } = spaceTravelData;

  return (
    <div className="flex justify-center h-screen w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination testdestinations={destinations} />} />
        <Route path="/crew" element={<Crew crew={crew} />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
