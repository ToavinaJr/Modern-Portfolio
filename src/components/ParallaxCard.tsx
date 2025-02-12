import { useParallax } from 'react-scroll-parallax';

interface ParallaxCardProps {
  darkMode: boolean;
  children: React.ReactNode;
  index: number;
}

export const ParallaxCard = ({ darkMode, children, index }: ParallaxCardProps) => {
  const parallax = useParallax({
    speed: index % 2 === 0 ? 10 : -10,
    easing: 'easeInQuad',
    translateY: [0, 30],
  });

  return (
    <div 
      ref={parallax.ref}
      className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
        darkMode ? 'bg-[#1e2939]' : 'bg-white shadow-lg'
      }`}
    >
      {children}
    </div>
  );
};