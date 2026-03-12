import SearchBar from "../components/SearchBar";
import JobFilters from "../components/Filters";
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import { getJobs } from "../api/jobsApi";

const Jobs = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getJobs();
        setJobList(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main className="flex flex-col items-center p-4 gap-8">
      <section>
        <h1>Find Jobs</h1>
        <SearchBar />
      </section>
      <section className="flex gap-8 w-full">
        <JobFilters />
        <div className="w-full">
          <h1 className="text-2xl mb-6">6 Jobs found</h1>
          <div className="w-full grid grid-cols-2 gap-4">
            {jobList.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Jobs;
