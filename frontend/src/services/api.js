import axios from "axios";

/**
 * Centralized Axios instance.
 * All API calls should import this instead of calling axios directly,
 * so base URL, headers, and interceptors stay in one place.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token automatically once auth is implemented (future phase)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
