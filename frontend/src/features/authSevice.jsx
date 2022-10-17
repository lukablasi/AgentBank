import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/login/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data && userData.rememberMe) {
    localStorage.setItem("logged", JSON.stringify(response.data));
  } else if (response.data && !userData.rememberMe) {
    sessionStorage.setItem("logged", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("logged");
  sessionStorage.removeItem("logged");
};

const authService = {
  login,
  logout,
};

export default authService;
