import React from 'react'

const Card = (props) => {
    console.log(props.user,props.age);
    return (
          <div className="container">
      <div id="potter">
         <img id="super"
            src={props.img}
            alt="superman " />
        <center id="harry">
         
        
          <h2 className="bond">{props.user} {props.age} </h2>
          <p className="james">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            maxime!
          </p>
          <button id="henry">view profile</button>
        </center>
      </div>
     
    </div>
    
    )
}
 export default Card;