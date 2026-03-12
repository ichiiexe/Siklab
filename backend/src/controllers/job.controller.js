import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      experienceLevel,
      category,
      jobType,
      locationType,
      location,
      salary,
      skillsRequired,
      tags,
    } = req.body;

    const job = new Job({
      title,
      description,
      experienceLevel,
      category,
      jobType,
      locationType,
      location,
      salary,
      skillsRequired,
      postedBy: req.user._id,
      tags,
      status: "open",
    });

    await job.save();

    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getJobs = async (req, res) => {
  const { title, company, location, experienceLevel, jobType, locationType } =
    req.query;

  const filter = {};

  try {
    const jobs = await Job.find(filter);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
