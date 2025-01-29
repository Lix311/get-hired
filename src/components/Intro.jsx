import React from 'react';

function Intro() {
  const skills = ["Angular", "React", "Rails", "Spring Boot", "Node.js"];

  return (
    <div className="flex items-center justify-center w-full bg-gray-900 py-8 md:py-16 mt-10 rounded-lg">
      <div className="w-full max-w-screen-md px-4 md:px-6 py-8 bg-transparent text-white rounded-lg flex flex-col md:flex-row gap-10">
        {/* Name on the top for mobile, left for larger screens */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl shadow-md text-teal-400 font-bold mb-4">Alex Sterrantino</h1>
          <p className="text-xl md:text-3xl">Full-stack Developer</p>
          <br />
          <p className="font-normal text-base leading-relaxed mb-8 italic">
            I build accessible and functional digital solutions, from professional tools to business applications.
          </p>
          {/* Skills Section */}
          <h2 className="text-lg md:text-xl font-semibold mb-4">Skills</h2>
          <p className="flex flex-wrap gap-3 items-center justify-center md:justify-start text-sm text-gray-700 dark:text-gray-300">
            {skills.map(skill => (
              <span
                key={skill}
                className="inline-block px-3 py-1 font-medium text-gray-800 dark:text-gray-200 border-2 border-gray-800 dark:border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all duration-400 ease-in-out"
              >
                {skill}
              </span>
            ))}
          </p>
        </div>

        {/* Description on the bottom for mobile, right for larger screens */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-normal text-base leading-relaxed mb-8">
            Initially pursuing a Business Major, I later transitioned to the Web Development program at Flatiron School in NYC. Shortly after, I landed a Software Developer position at CSX, where I began building my career in tech. 
            <br />
            <br />
            Since then, I've been focusing my efforts on creating full-stack MERN projects. I'm continuously learning new skills and looking for a growth-oriented, customer-focused company that supports their employees.
            <br />
            <br />
            If I'm not coding, you'll likely find me skateboarding—both require persistence and a constant drive to improve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;