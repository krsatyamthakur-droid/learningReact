import React from 'react'

const App = () => {
const user=localStorage.getItem('user')
console.log(user)
 // localStorage.setItem('age',19)
 
 const age=localStorage.getItem('age')
 console.log(age)
 const users={
 name:'satyam',
 age:19,
 school:'vedam'
 }
localStorage.setItem('users',JSON.stringify(users))
const sk=localStorage.getItem('users',users)
console.log(sk)
const hel=JSON.parse(localStorage.getItem('users'))
console.log(hel)


  return (
    <div>
      
    </div>
  )
}

export default App
