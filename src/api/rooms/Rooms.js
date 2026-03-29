import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// Helper function to get token from localStorage
const user_token = () => localStorage.getItem("user_token");

export const createRazorpayOrder = async (
  roomId,
  checkIn,
  checkOut
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}create-order`,
      {
        roomId,
        checkIn,
        checkOut, // ✅ ADD THIS
      },
      {
        headers: {
          Authorization: `Bearer ${user_token()}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    throw error.response?.data || error;
  }
};
export const verifyRazorPayPayment = async ({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
  paymentId,
}) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}verify-payment`,
      {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        paymentId,
      },
      {
        headers: {
          Authorization: `Bearer ${user_token()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    throw error.response?.data || error;
  }
};

export const UsergetMyBookings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}user-get-my-bookings`, {
      headers: {
        Authorization: `Bearer ${user_token()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    throw error.response?.data || error;
  }
};