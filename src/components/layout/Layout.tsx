import { FC, ReactNode, useEffect, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  bgMob: string;
  bgTablet: string;
  bgDesktop: string;
}

const Layout: FC<LayoutProps> = ({ children, bgMob, bgTablet, bgDesktop }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Lazy load images
  useEffect(() => {
    const imageMobile = new Image();
    const imageTablet = new Image();
    const imageDesktop = new Image();

    imageMobile.src = bgMob;
    imageTablet.src = bgTablet;
    imageDesktop.src = bgDesktop;

    // When all images are loaded, set the loaded state to true
    imageMobile.onload = () => setIsLoading(true);
    imageTablet.onload = () => setIsLoading(true);
    imageDesktop.onload = () => setIsLoading(true);
  }, [bgMob, bgTablet, bgDesktop]);

  return (
    <div className="relative h-screen w-screen bg-cover bg-center">
      {/* Conditionally render images after they are loaded */}
      {isLoading && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${bgMob})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div
            className="absolute inset-0 bg-cover bg-center z-0 hidden md:block lg:hidden"
            style={{
              backgroundImage: `url(${bgTablet})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div
            className="absolute inset-0 bg-cover bg-center z-0 hidden lg:block"
            style={{
              backgroundImage: `url(${bgDesktop})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative flex items-center justify-center w-full text-white z-10 pt-20 overflow-auto">
        {/* Outer Container with Responsive Layout for Mobile, Tablet, and Desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-6xl mt-[5rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;