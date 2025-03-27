import React, { useEffect, useState } from "react";
import { getAllMarkets, deleteMarket } from "../../../api/markets";

const FishBoard = () => {
  const [markets, setMarkets] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [marketToDelete, setMarketToDelete] = useState(null);
  const [showAddFishMenu, setShowAddFishMenu] = useState(false);
  const [newFish, setNewFish] = useState({ name: "", price: "" });

  // Dummy fish data
  const dummyFish = [
    { name: "Salmon", price: 12.99 },
    { name: "Tuna", price: 15.99 },
    { name: "Cod", price: 9.99 },
    { name: "Halibut", price: 18.99 },
    { name: "Trout", price: 11.99 },
  ];

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        setLoading(true);
        const response = await getAllMarkets();
        console.log("Fetched markets:", response);
        setMarkets(response);
        if (response.length > 0) {
          setSelectedMarket(response[0]);
        }
      } catch (error) {
        console.error("Error fetching markets:", error);
        setError("Failed to load markets. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMarkets();
  }, []);

  const handleDeleteClick = (market) => {
    console.log("Delete button clicked for market:", market);
    if (!market.id) {
      console.error("Market ID is missing:", market);
      setError("Cannot delete market: Missing ID");
      return;
    }
    setMarketToDelete(market);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!marketToDelete?.id) {
      console.error("Cannot delete market: No valid ID found");
      setError("Cannot delete market: Missing ID");
      return;
    }

    console.log("Starting delete process for market ID:", marketToDelete.id);

    try {
      console.log("Calling deleteMarket API with ID:", marketToDelete.id);
      await deleteMarket(marketToDelete.id);
      console.log("Market deleted successfully");

      console.log("Updating local state - removing market ID:", marketToDelete.id);
      setMarkets(markets.filter((m) => m.id !== marketToDelete.id));

      if (selectedMarket?.id === marketToDelete.id) {
        console.log("Clearing selected market as it was deleted");
        setSelectedMarket(null);
      }

      setShowDeleteModal(false);
      setMarketToDelete(null);
      console.log("Delete process completed");
    } catch (error) {
      console.error("Error deleting market:", error.message);
      setError("Failed to delete market. Please try again.");
    }
  };

  const handleCancelDelete = () => {
    console.log("Delete operation cancelled");
    setShowDeleteModal(false);
    setMarketToDelete(null);
  };

  const handleAddFishClick = () => {
    setShowAddFishMenu(true);
  };

  const handleFishSelect = (fish) => {
    setNewFish(fish);
  };

  const handleAddFishSubmit = () => {
    console.log("Adding fish to market:", {
      market: selectedMarket.marketName,
      fish: newFish
    });
    setShowAddFishMenu(false);
    setNewFish({ name: "", price: "" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-gray-600">Loading markets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Markets List */}
      <div className="mb-4 flex gap-2">
        <div className="w-1/2 bg-gray-100 border border-gray-300 rounded-sm">
          <div className="h-24 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full">
            {markets.map((market) => (
              <div
                key={market.marketName}
                className={`flex items-center justify-between border-b border-gray-300 ${
                  selectedMarket?.marketName === market.marketName
                    ? "bg-gray-300"
                    : "hover:bg-gray-200"
                }`}
              >
                <button
                  onClick={() => setSelectedMarket(market)}
                  className="flex-1 px-2 py-1 text-left text-xs"
                >
                  {market.marketName} - {market.location}
                </button>
                <button
                  onClick={() => handleDeleteClick(market)}
                  className="px-2 py-1 text-xs text-red-600 hover:bg-red-100"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="bg-white p-3 rounded-sm border border-gray-300 shadow-sm">
            <div className="mb-2">
              <p className="text-xs text-gray-600">
                Delete "{marketToDelete?.marketName}"?
              </p>
            </div>
            <div className="flex justify-end gap-1">
              <button
                onClick={handleCancelDelete}
                className="px-2 py-0.5 text-xs bg-gray-100 border border-gray-300 rounded-sm hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-2 py-0.5 text-xs bg-red-100 text-red-600 border border-red-300 rounded-sm hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Selected Market Details */}
      {selectedMarket ? (
        <div className="bg-white rounded shadow-sm p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedMarket.species.map((species) => (
              <div
                key={species.name}
                className="bg-gray-50 p-4 rounded border border-gray-200"
              >
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {species.name}
                </h4>
                <p className="text-xl font-bold text-blue-600">
                  ${species.price.toFixed(2)}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
                    onClick={() => {
                      console.log(
                        `Deleting ${species.name} from ${selectedMarket.marketName}`
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {showAddFishMenu ? (
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="text-xs text-gray-600 mb-2">Select Fish</h4>
                <div className="h-24 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full">
                  <div className="space-y-1">
                    {dummyFish.map((fish) => (
                      <button
                        key={fish.name}
                        onClick={() => handleFishSelect(fish)}
                        className={`w-full px-2 py-1 text-left text-xs rounded-sm ${
                          newFish.name === fish.name
                            ? "bg-gray-300"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {fish.name} - ${fish.price.toFixed(2)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex gap-1 justify-end">
                  <button
                    onClick={() => setShowAddFishMenu(false)}
                    className="px-2 py-0.5 text-xs bg-gray-100 border border-gray-300 rounded-sm hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddFishSubmit}
                    disabled={!newFish.name}
                    className="px-2 py-0.5 text-xs bg-blue-100 text-blue-600 border border-blue-300 rounded-sm hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleAddFishClick}
                className="bg-gray-50 p-4 rounded border border-gray-200 border-dashed flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-center">
                  <div className="text-2xl text-gray-400 mb-2">+</div>
                  <div className="text-sm text-gray-600">Add Fish</div>
                </div>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-xl text-gray-600">
            Select a market to view details
          </div>
        </div>
      )}
    </div>
  );
};

export default FishBoard;
