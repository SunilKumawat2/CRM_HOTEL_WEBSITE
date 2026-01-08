import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// Helper function to get token from localStorage
const getToken = () => localStorage.getItem("admin_token");

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