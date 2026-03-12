export const validateJobData = (req, res, next) => {
  const {
    title,
    category,
    experienceLevel,
    jobType,
    locationType,
    location,
    salary,
    skillsRequired,
  } = req.body;

  if (
    !title ||
    !category ||
    !experienceLevel ||
    !jobType ||
    !locationType ||
    !location ||
    !salary ||
    !skillsRequired
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (salary && (isNaN(salary) || salary < 0)) {
    return res
      .status(400)
      .json({ message: "Salary must be a positive number" });
  }
  next();
};
