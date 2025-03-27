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


export const updateFishPrice = async (fishId, newPrice) => {
  const url = `http://localhost:5126/api/fish/updatePartial/${fishId}`;

  const patchData = [
    {
      "op": "replace",
      "path": "/price",
      "value": newPrice
    }
  ];

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patchData)
    });

    if (response.ok) {
      console.log("Fish price updated successfully!");
    } else {
      const errorData = await response.json();
      console.error("Failed to update fish:", errorData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}