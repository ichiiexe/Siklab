import { Bookmark, MapPin, DollarSign, Clock } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="border border-black/5 p-8 rounded-lg flex items-start gap-5">
      <h1 className="text-2xl bg-red-400 py-2 px-3 rounded-lg">TC</h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{job.title}</h2>
          <p className="opacity-50">{job.company}</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
            {job.jobType}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
            {job.locationType}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
            {job.experienceLevel}
          </span>
        </div>
        <div className="flex gap-4 opacity-60 font-light">
          <div className="flex gap-1 items-center">
            <MapPin className="w-5 h-5" />
            <h1> {job.location} </h1>
          </div>
          <div className="flex gap-1 items-center">
            <DollarSign className="w-5 h-5" />
            <h1>{job.salary}</h1>
          </div>
          <div className="flex gap-1">
            <Clock className="w-5 h-5" />
            <h1>{new Date(job.createdAt).toLocaleDateString()}</h1>
          </div>
        </div>
      </div>
      <Bookmark className="ml-auto h-5 w-5 opacity-60" />
    </div>
  );
};

export default JobCard;
