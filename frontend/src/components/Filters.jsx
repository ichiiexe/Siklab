const JobFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-80 bg-red-500">
      <h1>Filters</h1>
      <ul>
        <li>
          <input type="checkbox" /> Remote only
        </li>
        <h1>Category</h1>
        <li>
          <input type="checkbox" /> Technology
        </li>
        <li>
          <input type="checkbox" /> Design
        </li>
        <li>
          <input type="checkbox" /> Marketing
        </li>
        <li>
          <input type="checkbox" /> Sales
        </li>
        <li>
          <input type="checkbox" /> Finance
        </li>
        <li>
          <input type="checkbox" /> Healthcare
        </li>
        <li>
          <input type="checkbox" /> Education
        </li>
        <li>
          <input type="checkbox" /> Engineering
        </li>

        <h1>Job Type</h1>
        <li>
          <input type="checkbox" /> Full-time
        </li>
        <li>
          <input type="checkbox" /> Part-time
        </li>
        <li>
          <input type="checkbox" /> Contract
        </li>
        <li>
          <input type="checkbox" /> Internship
        </li>
        <li>
          <input type="checkbox" /> Temporary
        </li>
        <li>
          <input type="checkbox" /> Unknown
        </li>

        <h1>Experience Level</h1>
        <li>
          <input type="checkbox" /> No experience
        </li>
        <li>
          <input type="checkbox" /> With experience
        </li>
        <li>
          <input type="checkbox" /> Entry
        </li>
        <li>
          <input type="checkbox" /> Mid
        </li>
        <li>
          <input type="checkbox" /> Senior
        </li>
      </ul>
    </div>
  );
};

export default JobFilters;
