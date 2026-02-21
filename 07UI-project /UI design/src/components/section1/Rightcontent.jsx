import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div  id='right' className=' flex flex-nowrap rounded-4xl overflow-x-auto gap-4 h-full w-2/3 p-8 '>
    {props.users.map(function(ele ,idx){
        return <Rightcard  color={ele.color} key={idx} id={idx} img={ele.img} tag={ele.tag} />
    }
    )}

    </div>
  )
}

export default Rightcontent
 