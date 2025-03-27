import React, { useState } from 'react';

const sampleFishMarkets = [
  {
    id: 1,
    name: "Ocean Fresh Market",
    products: [
      { id: 1, name: "Atlantic Salmon", price: 12.99, unit: "per lb" },
      { id: 2, name: "Yellowfin Tuna", price: 15.99, unit: "per lb" },
      { id: 3, name: "Sea Bass", price: 18.99, unit: "per lb" },
      { id: 4, name: "Shrimp", price: 14.99, unit: "per lb" }
    ]
  },
  {
    id: 2,
    name: "Harbor Seafood",
    products: [
      { id: 1, name: "Pacific Cod", price: 9.99, unit: "per lb" },
      { id: 2, name: "King Crab", price: 45.99, unit: "per lb" },
      { id: 3, name: "Oysters", price: 2.99, unit: "each" },
      { id: 4, name: "Lobster", price: 39.99, unit: "per lb" }
    ]
  },
  {
    id: 3,
    name: "Fresh Catch Co.",
    products: [
      { id: 1, name: "Mahi Mahi", price: 11.99, unit: "per lb" },
      { id: 2, name: "Red Snapper", price: 16.99, unit: "per lb" },
      { id: 3, name: "Scallops", price: 24.99, unit: "per lb" },
      { id: 4, name: "Mussels", price: 8.99, unit: "per lb" }
    ]
  }
];

const FishBoard = () => {
  const [selectedMarket, setSelectedMarket] = useState(sampleFishMarkets[0]);

  return (
    <div className="w-full">
      {/* Market Selection Dropdown */}
      <div className="mb-6">
        <label htmlFor="market-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Fish Market
        </label>
        <select
          id="market-select"
          value={selectedMarket.id}
          onChange={(e) => {
            const market = sampleFishMarkets.find(m => m.id === parseInt(e.target.value));
            setSelectedMarket(market);
          }}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          {sampleFishMarkets.map(market => (
            <option key={market.id} value={market.id}>
              {market.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedMarket.products.map(product => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-xl font-bold text-blue-600">
              ${product.price.toFixed(2)} <span className="text-sm text-gray-500">{product.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishBoard;
