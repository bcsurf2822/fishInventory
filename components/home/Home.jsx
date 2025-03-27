import React from 'react';
import FishBoard from './board/FishBoard';

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Fish Market Prices</h1>
      <main className="w-full max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <FishBoard />
      </main>
    </div>
  );
};

export default Home;
