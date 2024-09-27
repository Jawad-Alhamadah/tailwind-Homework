import React from 'react'

function FeaturedBanner() {
    return (
        <div className='my-28 '>
            <div className='text-center text-lg font-semibold text-gray-500'>As Featured in</div>
            <div className='mt-7 flex justify-evenly max-lg:flex-wrap  sm:flex sm:flex-row '>
                <img className='max-sm:w-[9em]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg" alt=" featured logo 1" />
                <img className='max-sm:w-[9em]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg" alt=" featured logo 2" />
                <img className='max-sm:w-[9em]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg" alt=" featured logo 3" />
                <img className='max-sm:w-[9em]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg" alt=" featured logo 4" />
                <img className='max-sm:w-[9em]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg" alt=" featured logo 5" />

            </div>
        </div>

    )
}

export default FeaturedBanner
