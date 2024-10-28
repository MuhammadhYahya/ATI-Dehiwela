const header = () => {
  return (
    <header className="header bg-mine">
      <div id="logo">
        <a href="/" className="text-white">
          <b>ATI Dehiwala</b>
        </a>
      </div>

      <ul id="top_menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>

        <li>
          <a href="/contact">Contact Us</a>
        </li>

        {/* Dropdown for Courses using Select and Option */}
        <li>
          <select
            onChange={(e) => {
              if (e.target.value) {
                window.location.href = e.target.value;
              }
            }}
            className="course-select"
          >
            <option value="">Courses</option>
            <option value="/hnda">HND in Accountancy</option>
            <option value="/hndba">HND in Business Administration</option>
            <option value="hndbf">HND in Business Finance</option>
            <option value="hnde">HND in English</option>
            <option value="hndit">HND in Information Technology</option>
            <option value="hndm">HND in Management</option>
            <option value="hndthm">
              HND in Tourism and Hospitality Management
            </option>
          </select>
        </li>
      </ul>
    </header>
  );
};

export default header;
