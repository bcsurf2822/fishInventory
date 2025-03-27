import axios from "axios";

const API_URL = "http://localhost:5126/api";

export const getAllFish = async () => {
  try {
    const response = await axios.get(`${API_URL}/fish/getall`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};
