import React, { useEffect, useState } from "react";
import { getAllMarkets } from "../../../api/markets";

const FishBoard = () => {
  const [markets, setMarkets] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState(null);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await getAllMarkets();
        setMarkets(response);
        if (response.length > 0) {
          setSelectedMarket(response[0]);
        }
      } catch (error) {
        console.error("Error fetching markets:", error);
      }
    };
    fetchMarkets();
  }, []);

  if (!selectedMarket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      {/* Market Selection Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="market-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Fish Market
        </label>
        <select
          id="market-select"
          value={selectedMarket.id}
          onChange={(e) => {
            const market = markets.find(
              (m) => m.id === parseInt(e.target.value)
            );
            setSelectedMarket(market);
          }}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          {markets.map((market) => (
            <option key={market.id} value={market.id}>
              {market.marketName} - {market.location}
            </option>
          ))}
        </select>
      </div>

      {/* Products Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedMarket.species.map((species) => (
          <div
            key={species.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {species.name}
            </h3>
            <p className="text-xl font-bold text-blue-600">
              ${species.price.toFixed(2)}
            </p>
    
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishBoard;
