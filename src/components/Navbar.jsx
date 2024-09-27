import React from 'react'

function Navbar() {
    return (
        <nav className='flex mt-4 '>
            <div className='w-[60%] max-md:w-[60%]  max-sm:w-[70%] flex' >
                <ul className='text-[0.8em] font-bold gap-9 flex items-center'>
                    <li><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg" alt="" /></li>
                    <li className='text-coffeeBrown max-lg:hidden '>HOME</li>
                    <li className='max-lg:hidden'>ABOUT</li>
                    <li  className='max-lg:hidden'>REVIEWS</li>
                    <li  className='max-lg:hidden'>VIDEOS</li>
                    <li  className='max-lg:hidden'>CONTACT</li>
                </ul>
            </div>
            <div className='max-md:w-[40%] w-[40%]  max-sm:w-[30%] flex justify-center md:justify-end'>
                <ul className='flex py-7'>
                    <li>
                        <div className=" lg:hidden  hover:bg-[#e2a996] hover:cursor-pointer bg-[#be7c68] size-14 text-2xl text-white rounded-full before:content-['\f0c9'] font-[FontAwesome] flex justify-center items-center ">
                            
                        </div>
                        
                        </li>
                    <li className='max-lg:hidden'>1</li>
                    <li className='max-lg:hidden'>2</li>
                    <li className='max-lg:hidden'>3</li>
                    <li className='max-lg:hidden'><button>LET'S TALK</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
