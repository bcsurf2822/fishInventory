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
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || "Failed to delete market. Please try again.";
    console.error("Error deleting market:", errorMessage);
    throw error;
  }
};

export const addSpeciesToInventory = async (marketId, speciesId) => {
  try {
    const response = await axios.post(`${API_URL}/addtoinventory/${marketId}/${speciesId}`);
    console.log(response.data); 
    return response.data;
  } catch (error) {
    console.error("Error adding species to market:", error?.response?.data || error.message);
    throw error;
  }
};

export const deleteFishFromInventory = async (marketId, speciesId) => {
  try {
    const response = await axios.delete(
      `${API_URL}/deletefrominventory/${marketId}/${speciesId}`
    );
    console.log("Species removed successfully.");
    return response.data;
  } catch (error) {
    console.error("Error removing species from market:", error);
    throw error;
  }
};
