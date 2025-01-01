// 22. cartService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchCart = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/cart?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cart');
  }
};

export const addToCart = async (userId, item) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, { userId, ...item });
    return response.data;
  } catch (error) {
    throw new Error('Failed to add to cart');
  }
};

export const removeFromCart = async (userId, itemId) => {
  try {
    await axios.delete(`${API_URL}/cart/${itemId}?userId=${userId}`);
  } catch (error) {
    throw new Error('Failed to remove item from cart');
  }
};