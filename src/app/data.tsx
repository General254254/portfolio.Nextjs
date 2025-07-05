import React from 'react';

interface FancyGreetingProps {
  name: string;
}

const FancyGreeting: React.FC<FancyGreetingProps> = ({ name }) => {
  return (
    <div className="relative flex items-center justify-center min-h-[200px] overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-800 rounded-lg shadow-xl p-8 text-center animate-fade-in">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(\'/images/abstract-bg.svg\')' }}></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg">
          Hello, <span className="text-yellow-300 animate-pulse-slow">{name}</span>!
        </h1>
        <p className="mt-4 text-xl text-purple-100 font-light italic animate-slide-up">
          Welcome to your personalized space.
        </p>
      </div>
    </div>
  );
};

export default FancyGreeting;
