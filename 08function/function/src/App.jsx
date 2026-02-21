// import React from 'react'




// const App = () => {
//   // const btnClicked = () => {
//   //   console.log("button is clicked");
//   // };
//   // const mousentereds = () => {
//   //   console.log("mouse entered");
//   // };
// //   const inputchanging=(val)=>{
// // console.log(val);
//  const pageScrool=(elem)=>{
//   if(elem>0){
//     console.log("sedha scrolling")
//   }
//   else{
//     console.log('ulta scrolling');
    
//   }
  
//  }
    
  
//   return (
//     // <div>
//     //   <h1>hello bond </h1>
//     //   <button onMouseEnter={mousentereds} onClick={btnClicked}>
//     //     change user{" "}
//     //   </button>
//     //   <button className="bond" onClick={btnClicked}>eplore this</button>
//     // </div>
//     // <div>
//     //   <button onClick={()=>{
//     //     console.log("hello james bond")
//     //   }}>click me </button>
//     // </div>
//     // <div>
//     //   <input onChange={(elem)=>{
//     //   inputchanging(elem.target.value)
//     //   }
//     //   } type="text" placeholder="enter name" />
//     // </div>
//     <div onWheel={(elem)=>{
//       //console.log(elem.deltaY)
//       pageScrool(elem.deltaY)
//     }}>
//       {/* <div
//     onMouseMove={(elem)=>{
//       console.log(elem.clientY);
      
//     }}
//       className='box'></div> */}
//       <div className='page1'></div>
//       <div className='page2'></div>
//       <div className='page3'></div>

//     </div>
//    )
// };

// export default App;


import React from 'react'

const App = () => {
  const btnClicked=()=>{
    console.log("hello");
  }
  return (
    <div>
    <button onClick={btnClicked}>click me </button>
    </div>
  )
}

export default App
