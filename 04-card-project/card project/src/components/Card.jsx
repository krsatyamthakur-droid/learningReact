import { Bookmark } from "lucide-react";
import React from "react";
  const Card = () => {
  return (

      <div className="card">
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OkW9RkLNurdw_VTuB4jP8c1wU5wZaVOsLA&s"
            alt="logo"
          />
          <button className="save-btn">
            Save <Bookmark size={16} />
          </button>
        </div>

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

        <div className="divider"></div>

        <div className="bottom">
          <div className="bond">
            <h3>$120/hr</h3>
            <p>Pune, India</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    
  );
};
export default Card;

