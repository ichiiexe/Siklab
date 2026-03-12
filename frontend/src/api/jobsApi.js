import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/jobs",
});

export const createJob = async (jobData) => {
  const token = localStorage.getItem("token");
  const res = await API.post("/", jobData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const getJobs = async (filters) => {
  const res = await API.get("/", { params: filters });
  return res.data;
};
