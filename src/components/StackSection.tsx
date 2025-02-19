import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import techStacks from "../data/stack";

export const StackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= techStacks.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? techStacks.length - 1 : prevIndex - 1
    );
  };
  

  return (
    <section id="stack" className="w-full py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          My Tech Stacks
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              ref={sliderRef}
              className="flex overflow-hidden gap-4 w-full"
            >
              {techStacks.slice(currentIndex, currentIndex + itemsPerPage).map((tech, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_48%] md:flex-[0_0_30%] p-4"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-48 flex flex-col items-center justify-center hover:scale-105 transition">
                    <div className="text-5xl mb-3">{tech.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center">{tech.level}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(techStacks.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerPage) === index ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
