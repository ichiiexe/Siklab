import { Link } from "react-router-dom";
import logo from "../assets/ignite-logo.png";

import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { token, currUser, logout } = useAuth();

  return (
    <nav className="sticky top-0 left-0 w-full flex items-center justify-center text-black shadow-2xs bg-transparent backdrop-blur-sm">
      <div className="flex justify-between items-center w-full max-w-400">
        <Link to="/" className="flex items-center">
          <h1 className="text-4xl">siklab</h1>
          <img src={logo} alt="FiloJobHunt Logo" className="h-16 w-16" />
        </Link>
        <ul className="flex space-x-8 opacity-60 font-light">
          <li>
            <Link to="/jobs">Find Jobs</Link>
          </li>
          <li>
            <Link to="/post-job">Post a Job</Link>
          </li>
          <li>
            <Link to="/companies">Find Candidates</Link>
          </li>
        </ul>
        {currUser ? (
          <div className="flex space-x-4">
            <button className="hover:text-gray-300">
              {currUser?.fullname}
            </button>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hover:text-gray-300">
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
