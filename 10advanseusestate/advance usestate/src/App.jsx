// // import React, { useState } from 'react'

// // const App = () => {
// //   const [Num, setNum] = useState({user:'satyam' ,age:20})
// //   const btnclicked=()=>{
//  // this is another optimisised method to shallow copying 
//  // setNum(prev=>({...prev,age:50}))

// //   console.log(Num.user);
// //   console.log(Num.age);
// //   // like this is the method to understand the how to use array in react to chagne the value

// //   const newNum={...Num};
// //   newNum.user='james bond'
// //   setNum(newNum)
  
  
// //   }
// //   return (
// //     <div>
// //       <h1>{Num.user},{Num.age}</h1>
// //       <button onClick={btnclicked}>click me </button>
// //     </div>
// //   )
// // }

// // export default App

// // import React, { use, useState } from 'react'

// // const App = () => {
// //   const [Num, setNum] = useState([324,34,243,234,243,324,234,435,443,423,4,23324])
// //   const btnclicked=()=>{
// //     const newNum=[...Num]
// //     newNum.push(99);
// //     setNum(newNum)
// //     console.log(newNum)

// //   }



// //   return (
// //     <div>
// //       <h1>{Num[4]}</h1>
// //       <button onClick={btnclicked}>click me </button>
// //     </div>
// //   )
// // }

// // export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [Num, setNum] = useState(3)
//   const btnclicked=()=>{
//   setNum(prev=>(prev+1))
//   setNum(prev=>(prev+1))
//   }
//   return (
//     <div>
//       <h1>{Num}</h1>
//       <button onClick={btnclicked}>click me </button>
//     </div>
//   )
// }

// export default App
import Hero from "./components/Hero";

function App() {
  return <Hero />;
}

export default App;