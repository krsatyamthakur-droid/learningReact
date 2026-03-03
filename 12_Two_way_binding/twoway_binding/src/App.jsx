import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  
  
  const submithandler=(elem)=>{
    elem.preventDefault()
   console.log("form submitted",title)
   settitle("")
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
       submithandler(elem)
      }}>
        <input 
        type="text"
         placeholder='enter your name '
         value={title}
          onChange={(elem)=>{
            settitle(elem.target.value)
          }}
          />
         
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
