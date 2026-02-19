import React from "react";
import Card from "./card";
import User from "./User";
const arr = () => {
  const arr = [10,20]; 

  return (
    <div className="parent">
      {arr.map(function (elem) {
        return <User name={elem}/> 
      })}
    </div>
  );
};

export default arr;
