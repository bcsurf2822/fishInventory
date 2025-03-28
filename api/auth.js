import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5126/api/authentication";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    const { token, username: loggedInUsername } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('username', loggedInUsername);
    return { token, username: loggedInUsername };
  } catch (error) {
    const errorMessage = error.response?.data || "Login failed. Please check your credentials.";
    toast.error(errorMessage);
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
