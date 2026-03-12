import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const registerUser = async (data) => {
  console.log(data);
  const res = await API.post("/register", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await API.post("/login", data);
  return res.data;
};

export const loggedUser = async () => {
  const storedToken = localStorage.getItem("token");

  if (!storedToken) return null;

  const res = await API.get("/me", {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    },
  });

  return res.data.user || null;
};
