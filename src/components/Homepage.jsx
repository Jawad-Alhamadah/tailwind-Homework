import React from 'react'
import SecondaryButton from './SecondaryButton'

function Homepage() {
  return (
    <div className='mt-20 flex justify-between flex-wrap-reverse'>
       
        <div className=' 850-and-up:w-1/2  mt-10  max-sm:mt-16 '>
            <div> <div className='py-16 font-[Montserrat,sans-serif] font-semibold text-1xl text-coffeeBrown'>⎯⎯⎯⎯⎯⎯⎯ Welcome</div></div>
            <h2 className='pb-8 font-[Fraunces,serif] md:text-6xl  sm:text-3xl text-[2em]'>I’m Dianna Adams</h2>
            <h3 className='pb-5 font-[Fraunces,serif] md:text-3xl  sm:text-2xl text-[1em] font-extralight'>Food Critic / Influencer / Blogger</h3>
            <p className='w-[86%] pt-2 pb-8 font-thin text-lg text-gray-500'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
            <SecondaryButton text="JOIN INSIDERS"/>
        </div>
        <img className=' 850-and-up:size-[45%] flex self-center' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg" alt="" />

      </div>
  )
}

export default Homepage
