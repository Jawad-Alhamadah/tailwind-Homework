import React from 'react'
 
function MediaCard(props) {
  return (
    <div className=' w-[5em] font-[Fraunces,serif]  flex flex-col space-y-3 items-start md:mt-28 mt-14'>
        
        <i className={props.src+"md:text-4xl text-5xl text-coffeeBrown"}></i>
        <h2 className='md:text-3xl text-md font-bold'>{props.count}+</h2>
        <h2 className='font-[Montserrat,sans-serif] md:text-lg text-md text-gray-400 font-thin'>{props.title}</h2>
      
    </div>
  )
}

export default MediaCard
