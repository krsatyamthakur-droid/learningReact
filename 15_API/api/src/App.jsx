// import React from 'react'
// import { log } from 'three';

// // const App = () => {
// //    async function getData(){
// //  console.log("data aa gya")
// //  const da=  await fetch('https://jsonplaceholder.typicode.com/posts/')
// //  console.log(da)
// //  const data=await da.json()
// //  console.log(data)
//   //.then((response) => response.json())
//   //.then((json) => console.log(json));
//   //}
//   return (
//     <div> 
//        {/* <button onClick={getData}>Get Data</button> */}
//     </div>
//   )


// export default App
// import React from 'react'
// import axios from 'axios'

// const App = () => {
//   const getData= async()=>{
//    const response= await axios.get('https://jsonplaceholder.typicode.com/posts/')
//    console.log(response)
//   }
//   return (
//     <div>
//       {/* istall this first  npm i axios */}
//       <button onClick={getData}>Get data</button>
      
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map((elem) => {
          return (
            <div key={elem.id}>
              <h3>{elem.title}</h3>
              <p>{elem.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App