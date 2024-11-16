import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SpaceTravelData } from './interfaces/SpaceTravelData';
import backgroundDesktopHome from './assets/home/background-home-desktop.jpg';
import backgroundTabletHome from './assets/home/background-home-tablet.jpg';
import backgroundMobileHome from './assets/home/background-home-mobile.jpg';
import backgroundDesktopDestination from './assets/destination/background-destination-desktop.jpg';
import backgroundTabletDestination from './assets/destination/background-destination-tablet.jpg';
import backgroundMobileDestination from './assets/destination/background-destination-mobile.jpg';
import backgroundDesktopCrew from './assets/crew/background-crew-desktop.jpg';
import backgroundTabletCrew from './assets/crew/background-crew-tablet.jpg';
import backgroundMobileCrew from './assets/crew/background-crew-mobile.jpg';
import backgroundDesktopTechnology from './assets/technology/background-technology-desktop.jpg';
import backgroundTabletTechnology from './assets/technology/background-technology-tablet.jpg';
import backgroundMobileTechnology from './assets/technology/background-technology-mobile.jpg';

const App = () => {
  const [spaceTravelData, setSpaceTravelData] = useState<SpaceTravelData | null>(null);
  const location = useLocation();

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

  const desktopImages = useMemo(
    () => [
      backgroundDesktopHome,
      backgroundDesktopDestination,
      backgroundDesktopCrew,
      backgroundDesktopTechnology
    ],
    []
  );

  const tabletImages = useMemo(
    () => [
      backgroundTabletHome,
      backgroundTabletDestination,
      backgroundTabletCrew,
      backgroundTabletTechnology
    ],
    []
  );

  const mobileImages = useMemo(
    () => [
      backgroundMobileHome,
      backgroundMobileDestination,
      backgroundMobileCrew,
      backgroundMobileTechnology
    ],
    []
  );

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
  }, [preloadImagesForScreenSize, location.pathname]);

  useEffect(() => {
    fetchData();
  }, []);

  if (!spaceTravelData) {
    return null;
  }

  const { destinations, crew, technologies } = spaceTravelData;

  return (
    <div className="flex justify-center bg-black">
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
