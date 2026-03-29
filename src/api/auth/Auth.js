import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// Helper function to get token from localStorage
const user_token = () => localStorage.getItem("user_token");

// <----------------  Admin Status Form ----------------->
export const User_Send_Otp = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user-send-otp`, userData);
        return response;
    } catch (error) {
        throw error.response || error;
    }
};

// <----------------  Admin Status Form ----------------->
export const User_Otp_Verify = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user-otp-verify`, userData);
        return response;
    } catch (error) {
        throw error.response || error;
    }
};

// <----------------  Admin Status Form ----------------->
export const User_Google_Login = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}google-login`, userData);
        return response;
    } catch (error) {
        throw error.response || error;
    }
};

// <----------------  Admin Status Form ----------------->
export const get_user_profile = async () => {
  try {
    const token = user_token();
    const response = await axios.get(`${API_BASE_URL}user-profile`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response;
  } catch (error) {
    throw error.response || error;
  }
};

// <----------------  Admin Status Form ----------------->
export const Update_User_Profile = async (formData, token) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}update-user-profile`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // 🔹 important
        },
      }
    );
    return response;
  } catch (error) {
    throw error.response || error;
  }
};