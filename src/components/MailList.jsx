import React from 'react'

function MailList() {
    return (
        <div className='max-sm:translate-y-16 bg-white border-8 border-[#e0e0e0] px-6 flex translate-y-52 max-md:grid space-x-4 '>
            <div>
            <img className="w-[100%] -translate-y-8" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg" alt="happy wine women" />

            </div>
           
            <div className='flex flex-col'>

                <h1 className='text-3xl font-[Fraunces,serif] mt-5'>Join Mailing List</h1>
                <p className='text-md mt-2 '>Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
                <div className='mt-auto flex max-sm:grid py-5   items-end sm:space-x-2 md:space-x-2'>
                    <input type="text" name="" id="" placeholder='Email address' className='w-[-webkit-fill-available]  w-[-moz-available] border-2 bg-[#fafafa]  border-[#e0e0e0] p-3' />
                    <button className=' hover:bg-coffeeBrown hover:text-white tracking-widest text-sm font-semibold font-[Montserrat,sans-serif] mt-5 border-coffeeBrown text-coffeeBrown border-[1px]  p-3'>SUBSCRIBE</button>
                </div>
            </div>

        </div>
    )
}

export default MailList
