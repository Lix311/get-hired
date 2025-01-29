import React from 'react';
import PortfolioCard from './PortfolioCard';
import portfolio from '../data/portfolio';

function FlipbookPortfolio() {
   return (
      <div className="relative w-full h-[500px] flex items-center justify-center">
         {portfolio.map((project, index) => (
            <div
               key={index}
               className={`absolute w-72 transition-transform duration-500 ease-in-out transform ${
                  index === 0
                     ? 'z-30 scale-105 translate-y-0'
                     : `z-${30 - index * 10} scale-${100 - index * 5} translate-y-${index * 10}`
               } hover:z-50 hover:scale-110`}
               style={{
                  top: `${index * 15}px`, // Adjust spacing between cards
                  left: `${index * 15}px`, // Staggered alignment
               }}
            >
               <PortfolioCard
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            </div>
         ))}
      </div>
   );
}

export default FlipbookPortfolio;
