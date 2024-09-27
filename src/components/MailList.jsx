import React from 'react'

function MailList() {
    return (
        <div className='bg-white border-8 border-[#e0e0e0] px-6 flex translate-y-52 max-md:grid '>
            <div>
            <img className="w-[100%] -translate-y-8" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg" alt="happy wine women" />

            </div>
           
            <div className=''>

                <h1>Join Mailing List</h1>
                <p>Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
                <div className='flex max-sm:grid'>
                    <input type="text" name="" id="" placeholder='Email address' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>

        </div>
    )
}

export default MailList
