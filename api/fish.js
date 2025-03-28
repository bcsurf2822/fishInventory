import axios from "axios";

const API_URL = "http://localhost:5126/";

export const getAllFish = async () => {
  try {
    const response = await axios.get(`${API_URL}api/fish/getall`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};

export const getFishForInventory = async () => {
  try {
    const response = await axios.get(`${API_URL}api/fish/fishinventory`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};

export const updateFishPrice = async (id, newPrice) => {
  try {
    const response = await axios.patch(
      `${API_URL}api/fish/updatepartial/${id}`,
      [
        {
          operationType: 0,
          path: "/price",
          op: "replace",
          value: newPrice,
        },
      ]
    );

    console.log("Fish price updated successfully!");
    return response.data;
  } catch (error) {
    console.error("Error updating fish price:", error);
    throw error;
  }
};
