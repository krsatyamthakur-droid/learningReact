import React from "react";
import Rightcardcontent from "./Rightcardcontent";

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0  w-80 overflow-hidden relative rounded-4x">
        <img
        className="h-full w-full object-cover rounded-4xl "
        src={props.img}
        alt=""
      />
     <Rightcardcontent id={props.id} color={props.color} tag={props.tag}/>

    </div>
  );
};

export default Rightcard;
