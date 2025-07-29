import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
