import { Bookmark } from "lucide-react";
import React from "react";
  const Card = (props) => {
    console.log(props.company); 
    console.log(props.post);
  return (
    

      <div className="card">
        <div className="top">
          <img
            src={props.brandLogo}
            alt="logo"
          />
          <button className="save-btn">
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company } <span>{props.date}</span>
          </h3>

          <h2>{props.post}</h2>

          <div className="tab">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="divider"></div>

        <div className="bottom">
          <div className="bond">
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    
  );
};
export default Card;

