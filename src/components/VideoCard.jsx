import React from 'react'

function VideoCard(props) {

    
  return (
    <div className='max-md:grid flex gap-7'>
        <img src={props.src} alt="video snapshot" className='' />
        <div>
            <h2 className='text-lg font-semibold font-[Montserrat,sans-serif]'>{props.title}</h2>
            <p className='text-gray-400'>{props.description}</p>
        </div>
      
    </div>
  )
}

export default VideoCard
