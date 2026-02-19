import React from 'react'

const User = (props) => {
    console.log(props); 
  return (
    <div style={{color:"red"}}>
      Archana, {props.name}
    </div>
  )
}

export default User
