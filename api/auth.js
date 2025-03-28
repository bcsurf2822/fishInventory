import axios from "axios";

const API_URL = "http://localhost:5126/api/authentication";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    const token = response.data.token; 
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username); 
    return { token, username };
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
