import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// <----------------  Get Rooms List ----------------->
export const Get_Rooms_List = async (filters = {}) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}user-get-rooms`,
      { params: filters } // ✅ QUERY PARAMS
    );
    return response;
  } catch (error) {
    throw error.response || error;
  }
};

// 🟢 Get Single Room Details
export const Get_Rooms_Details = async (_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}user-get-room/${_id}`
    );
    return response.data; // ✅ return data directly
  } catch (error) {
    throw error.response?.data || error;
  }
};


