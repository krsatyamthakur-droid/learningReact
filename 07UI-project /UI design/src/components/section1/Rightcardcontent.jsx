import React from 'react'

const Rightcardcontent = (props) => {
  return (
      <>
       
      <div className="absolute top-0  left-0 h-full w-full p-8 flex flex-col justify-between ">
        <h2 className="bg-white h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold">
          {props.id+1}
        </h2>
        <div className="text-lg leading-normal text-white gap-2.5 ">
          <p>
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptatibus id harum eaque repudiandae iure.
          </p>
          <br />
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-6 py-2 rounded-full  ">
              {props.tag}
            </button>
            <button  style={{backgroundColor:props.color}} className="style={{}} text-white font-medium px-3 py-2 rounded-full">
              <i className=" ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      </div>
      </>
    
  )
}

export default Rightcardcontent
