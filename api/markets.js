import axios from "axios";

const API_URL = "http://localhost:5126/api";


export const getAllMarkets = async () => {
  try {
    const response = await axios.get("http://localhost:5126/api/fishmarket/getall");
    console.log(response.data);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};

export const getFishByMarketId = async (marketId) => {
  try {
    const response = await axios.get(`${API_URL}/fishmarket/${marketId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching fish data for market ${marketId}:`, error);
    throw error;
  }
};