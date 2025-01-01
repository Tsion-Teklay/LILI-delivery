// 21. authService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const logout = async () => {
  try {
    await axios.post(`${API_URL}/auth/logout`);
  } catch (error) {
    console.error('Logout failed');
  }
};