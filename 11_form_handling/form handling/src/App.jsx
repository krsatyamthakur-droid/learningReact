import React from 'react'

const App = () => {
  
  const submithandler=(elem)=>{
    elem.preventDefault()
   console.log("form submitted")
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
       submithandler(elem)
      }}>
        <input type="text" placeholder='enter your name ' />
         
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
// basically i make a form and take a input and button i created and whenever i clicked to the submit button the page is reloaded and my data vanished 
// thats why i used this just see the code and try to understand it 
