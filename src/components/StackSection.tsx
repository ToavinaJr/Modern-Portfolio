import techStacks from '../data/stack';

export const StackSection = () => (
  <section id="stacks" className="container mx-auto px-6 py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white animate-text-focus-in">
      My Tech Stacks
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 text-center mt-4 max-w-3xl mx-auto">
      I work with a variety of modern technologies to build robust, scalable, and performant web applications.
    </p>
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {techStacks.map((tech, index) => (
        <div key={index} className="hover:scale-[1.02] flex flex-col bg-opacity-30 backdrop-blur-lg p-4 items-center w-46  rounded-lg shadow-md">
          {tech.icon}
          <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">{tech.level}</p>
        </div>
      ))}
    </div>
  </section>
);
