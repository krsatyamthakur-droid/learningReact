import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {
  const [Num, setNum] = useState(0)
  const [Num2, setNum2] = useState(100)
  useEffect(function(){
    console.log('running')
  },[Num])
  return (
    <div>
      <h1> Num {Num} </h1>
      <h1>Num2 {Num2}</h1>
      <button onClick={()=>{
       setNum(Num+1)
      
      }}
      onDoubleClick={()=>{
         setNum2(Num2+10)
      }}

      >Click</button>
    </div>
  )
}

export default App
