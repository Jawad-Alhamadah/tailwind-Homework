import React from 'react'
import SocialMediaBar from './SocialMediaBar'
function Footer() {
    return (
        <div>
             <div className='flex justify-between mt-14 max-md:flex max-md:flex-col max-md:items-center space-y-3'>
        <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
              alt="website logo DA"
            />
        <div>
             <ul className='flex gap-8 mt-8 flex-wrap justify-center'>
                <li>Home</li>
                <li>About</li>
                <li>Reviews</li>
                <li>Videos</li>
                <li>Contact</li>
             </ul>
        </div>
        <div className=''>
            <SocialMediaBar color="#c99484"/>
        </div>

    </div>

            <div className='max-sm:flex-col max-sm:items-center flex  justify-between mt-10 mb-5'>
                <h3 className='text-sm text-gray-400'>© 2024 Food Blogger & Influencer</h3>
                <h3 className='text-sm text-gray-400'>Powered by Food Blogger & Influencer</h3>
            </div>
        </div>

    )
}

export default Footer
