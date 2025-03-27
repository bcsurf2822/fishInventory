import React from 'react';
import FishBoard from './board/FishBoard';

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="w-full max-w-7xl mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Fish Market Prices</h1>
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            onClick={() => {
              // TODO: Implement add market functionality
              console.log('Add new market');
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" 
                clipRule="evenodd" 
              />
            </svg>
            Add Market
          </button>
        </div>
      </div>
      <main className="w-full max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <FishBoard />
      </main>
    </div>
  );
};

export default Home;
