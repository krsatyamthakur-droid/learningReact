// import React, { useState } from 'react'

// const App = () => {
//   const [Num, setNum] = useState(9758430)
//   const [user, setuser] = useState("james bond")
//   function changeNum(){
//    setNum(43)
//    setuser('henry cavil')
//   }
//   return (
//     <div>
//       <h1> value of a is {Num} <br /> my name is {user} and i save {Num} people</h1>
//       <button onClick={changeNum} >click me  </button>
//     </div>
//   )
// }

// export default App
 
import React, { useState } from 'react'

const App = () => {
const [Num, setNum] = useState(0)
function increaseNum(){
  setNum(Num+1)

  

}
function decreaseNum(){
  setNum(Num-1)

  

}
function resetNum(){
  setNum(0)

}
  return (
    <div className='james'>
    <div>
      <h1>
        {Num}
      </h1>
      <button onDoubleClick={resetNum} onClick={decreaseNum}>Decrease</button>
      <button onClick={increaseNum}>Increase</button>
    </div>
    </div>
  )
}

export default App
