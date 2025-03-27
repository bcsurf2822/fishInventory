import axios from "axios";

const API_URL = "http://localhost:5126/api/fishmarket";

export const getAllMarkets = async () => {
  try {
    const response = await axios.get(`${API_URL}/inventory`);
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};

export const getFishByMarketId = async (marketId) => {
  try {
    const response = await axios.get(`${API_URL}/${marketId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching fish data for market ${marketId}:`, error);
    throw error;
  }
};

export const createMarket = async (marketName, location) => {
  try {
    const response = await axios.post(`${API_URL}/createnew`, {
      marketName,
      location,
      species: [],
    });
    console.log("Market created successfully");
    return response.data;
  } catch (error) {
    console.error("Error creating market:", error);
    throw error;
  }
};

export const deleteMarket = async (marketId) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${marketId}`);
    console.log("Market deleted successfully");
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting market:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const removeSpeciesFromMarket = async (marketId, speciesId) => {
  try {
    const response = await axios.delete(
      `${API_URL}/removeSpeciesFromMarket/${marketId}/${speciesId}`
    );
    console.log("Species removed successfully.");
    return response.data;
  } catch (error) {
    console.error("Error removing species from market:", error);
    throw error;
  }
};
