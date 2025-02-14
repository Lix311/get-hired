import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS CSS for styles

function PortfolioItem({ title, imgUrl, stack, link }) {
  useEffect(() => {
    AOS.init({
      duration: 600, // Increase animation duration for smoother effect
      easing: 'ease-in-out',
      once: false, // Re-trigger animation each time it's scrolled into view
    });
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-2 border-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 ease-in-out transform hover:scale-105 bg-gray-100 dark:bg-gray-800"
      data-aos="zoom-in" // AOS scroll animation for mobile
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-40 md:h-52 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-400 ease-in-out"
      />
      <div className="w-full p-5 bg-gray-100 dark:bg-gray-800 transition-colors duration-400 ease-in-out">
        <h3 className="text-xl md:text-2xl text-gray-900 dark:text-white mb-3 font-bold transition-colors duration-400 ease-in-out">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 items-center justify-start text-sm text-gray-700 dark:text-gray-300">
          {stack.map((item, index) => (
            <span key={index} className="inline-block px-3 py-1 font-medium text-gray-800 dark:text-gray-200 border-2 border-gray-800 dark:border-gray-200 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-400 ease-in-out">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
