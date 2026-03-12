import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";
import { validateJobData } from "../middleware/job.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, validateJobData, createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.put("/:id", protect, validateJobData, updateJob);
router.delete("/:id", protect, deleteJob);

export default router;
