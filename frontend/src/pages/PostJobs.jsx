import { useState } from "react";
import { Briefcase } from "lucide-react";
import { createJob } from "../api/jobsApi";

const PostJobs = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    experienceLevel: "",
    jobType: "",
    salary: 0,
    locationType: "",
    location: "",
    skillsRequired: [],
    tags: [],

    company: "My Company",
    location: "Athens, Greece",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setError("");

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createJob(formData);
      setError("");
    } catch (err) {
      setError("Failed to post job. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1>Post a Job</h1>
        <p>Find the perfect candidate for your position</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-black/5 p-8 rounded-lg mb-4 flex-col items-start gap-5 max-w-2xl"
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Briefcase />
            <h1>Job Details</h1>
          </div>
          <label htmlFor="title">Job Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g. Software Engineer"
          />
          <div className="flex gap-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="category">Category *</label>
              <select id="category" name="category">
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Engineering">Engineering</option>
              </select>

              <label htmlFor="experiencelevel">Experience level *</label>
              <select id="experienceLevel" name="experienceLevel">
                <option value="">Select experience level</option>
                <option value="No experience">No experience</option>
                <option value="With experience">With experience</option>
                <option value="Entry">Entry</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="jobType">Employment Type *</label>
              <select id="jobType" name="jobType">
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
                <option value="internship">Internship</option>
                <option value="unknown">Unknown</option>
              </select>

              <label htmlFor="salary">Salary *</label>
              <input
                type="number"
                id="salary"
                name="salary"
                placeholder="e.g. 50000"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase />
          <h1>Location & Salary</h1>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Post Job
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default PostJobs;
