import { useState, useEffect } from "react";
import HeroComponent from "./HeroComponent";

const HeroCarousel = ({ datas }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 10;

  const scrollCarousel = (direction: any) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + totalSlides) % totalSlides
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollCarousel(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen mx-auto">
      {/* Carousel wrapper */}
      <div className="overflow-hidden relative rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {datas?.length > 0
            ? datas?.map((item: any, key: number) => {
                return (
                  <div key={key} className="min-w-full">
                    <HeroComponent data={item} />
                  </div>
                );
              })
            : null}

          {/* <div className="min-w-full">
            <HeroComponent />
          </div>

          <div className="min-w-full">
            <HeroComponent />
          </div> */}
        </div>
      </div>
      {/* Navigation buttons */}
      {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
        onClick={() => scrollCarousel(-1)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
        onClick={() => scrollCarousel(1)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button> */}
    </div>
  );
};

export default HeroCarousel;
