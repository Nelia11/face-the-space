import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SpaceTravelData } from './interfaces/SpaceTravelData';
import backgroundDesktopTechnology from './assets/technology/background-technology-desktop.jpg';
import backgroundTabletTechnology from './assets/technology/background-technology-tablet.jpg';
import backgroundMobileTechnology from './assets/technology/background-technology-mobile.jpg';

const App = () => {
  const [spaceTravelData, setSpaceTravelData] = useState<SpaceTravelData | null>(null);

  const desktopImages = useMemo(() => {
    return [backgroundDesktopTechnology];
  }, []);
  const tabletImages = useMemo(() => {
    return [backgroundTabletTechnology];
  }, []);
  const mobileImages = useMemo(() => {
    return [backgroundMobileTechnology];
  }, []);

  const preloadImagesForScreenSize = useCallback(() => {
    const preloadImages = (srcArray: Array<string>) => {
      srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if (window.innerWidth >= 1024) {
      preloadImages(desktopImages);
    } else if (window.innerWidth >= 768) {
      preloadImages(tabletImages);
    } else {
      preloadImages(mobileImages);
    }
  }, [desktopImages, tabletImages, mobileImages]);

  useEffect(() => {
    preloadImagesForScreenSize();
  }, [preloadImagesForScreenSize]);

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
    return null;
  }

  const { destinations, crew, technologies } = spaceTravelData;

  return (
    <div className="flex justify-center h-screen w-full bg-black">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination destinations={destinations} />} />
        <Route path="/crew" element={<Crew crew={crew} />} />
        <Route path="/technology" element={<Technology technologies={technologies} />} />
      </Routes>
    </div>
  );
};

export default App;
