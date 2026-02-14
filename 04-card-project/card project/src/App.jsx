import React from "react";
import { Bookmark } from "lucide-react";
import "./App.css";

const App = () => {
  return (
    <div className="parent">
      <div className="card">

        {/* Top Section */}
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OkW9RkLNurdw_VTuB4jP8c1wU5wZaVOsLA&s"
            alt="logo"
          />
          <button className="save-btn">
            Save <Bookmark size={16} />
          </button>
        </div>

        {/* Center Section */}
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>

          <h2>Senior UI/UX Designer</h2>

          <div className="tab">
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Bottom Section */}
        <div className="bottom">
          <div className="bond">
            <h3>$120/hr</h3>
            <p>Pune, India</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>

      </div>
    </div>
  );
};

export default App;
