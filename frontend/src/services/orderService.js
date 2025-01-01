// 24. orderService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const placeOrder = async (order) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, order);
    return response.data;
  } catch (error) {
    throw new Error('Failed to place order');
  }
};

export const fetchOrders = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/orders?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch orders');
  }
};
