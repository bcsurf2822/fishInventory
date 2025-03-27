import React, { useEffect, useState } from 'react';

const sampleFishData = [
  {
    id: 1,
    name: "Bluefin Tuna",
    habitat: "Open Ocean",
    length: 300,
    population: 25000,
    lifespan: 15,
    price: 12.99,
    fishMarketInventory: []
  },
  // Add more fish data here...
];

const FishCollection = () => {
  const [fish, setFish] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchFish = async () => {
      try {
        // const response = await getAllFish();
        // setFish(response);
        setFish(sampleFishData);
      } catch (error) {
        console.error("Error fetching fish:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFish();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-gray-600">Loading fish data...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Fish Collection</h2>
        <p className="text-gray-600 mt-2">Browse our collection of fish species</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fish.map((fish) => (
          <div
            key={fish.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {/* Fish Image Placeholder */}
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-lg">{fish.name}</span>
            </div>

            {/* Fish Information */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{fish.name}</h3>
              
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Habitat:</span>
                  <span>{fish.habitat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Length:</span>
                  <span>{fish.length} cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Population:</span>
                  <span>{fish.population.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lifespan:</span>
                  <span>{fish.lifespan} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Price:</span>
                  <span className="text-blue-600 font-bold">${fish.price.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                <button
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                  onClick={() => {
                    console.log(`Editing ${fish.name}`);
                  }}
                >
                  Edit
                </button>
                <button
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
                  onClick={() => {
                    console.log(`Deleting ${fish.name}`);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishCollection;
