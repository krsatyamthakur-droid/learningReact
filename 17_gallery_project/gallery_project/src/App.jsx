import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { div, h3 } from 'framer-motion/client'

const App = () => {

  const [UserData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=2&limit=100'
    )
    setUserData(response.data)
    console.log(response.data)

    // console.log(response)
    // console.log(response.data)
  // axios.post('https://picsum.photos/v2/list?page=2&limit=100',
  //   {username:'satyma',age:19,school:'vedam'})
  }
  useEffect(function(){
    getData()
  },[])

  let printUserData =<h3 className='text-green-300'>NO user available</h3>

  if (UserData.length > 0) {
    printUserData = UserData.map(function(elem, idx){
      return <div className='bg-black'>
      <div className='mt-5 gap-5 overflow-hidden'>
        <img className='h-100 w-100 ml-12 rounded-2xl' src={elem.download_url} alt="" />
      </div>
      <h2 className='ml-40 font-bold'>{elem.author}</h2>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-full  text-white'>
     
      <div className='p-5 flex flex-wrap gap-2 mt-1 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-4 gap-4'>
        <button className='bg-amber-500 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <button className='bg-amber-500 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App