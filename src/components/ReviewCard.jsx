import React from 'react'

function ReviewCard(props) {
  return (
    <div className='md:w-[25%] w-[23em] gap-4 space-y-4 '>
        <img src={props.src} alt="review image" />
        <h2 className='text-3xl font-[Fraunces,serif]'>{props.title}</h2>  
        <p className='text-lg text-gray-500'>{props.paragraph}</p>
        <h4 className={props.readMore? "text-coffeeBrown font-semibold text-lg": "hidden"}>Read More <span><i className="fa-solid fa-arrow-right"></i></span></h4>
    </div>
  )
}

export default ReviewCard
