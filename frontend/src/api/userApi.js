import axios from "axios";

const API = "https://socialapp-backend-kne4.onrender.com/api/users";

export const signup = (data) => {
  return axios.post(`${API}/signup`, data);
};

export const login = (data) => {
  return axios.post(`${API}/login`, data);
};