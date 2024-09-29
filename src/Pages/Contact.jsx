import React from 'react'
import Navbar from '../components/Navbar'
import BackgroundRectangle from '../components/BackgroundRectangle'
import Media from '../components/Media'
import SendMessageForm from '../components/SendMessageForm'
import FoodLoversSection from '../components/FoodLoversSection'
import Footer from '../components/Footer'

function Contact() {
    return (
        <div>
            <div className=' xl:px-40 md:px-10 px-6'>

                <BackgroundRectangle />
                <Navbar />

                <div className='flex flex-wrap mt-20'>
                    <div>
                        <h2 className='max-md:text-4xl font-[Fraunces,serif] font-thin text-6xl'>Contact</h2>
                        <div className='max-md flex flex-col space-y-8 mt-16'>
                            <div>
                                <i class="fa-solid fa-location-dot text-coffeeBrown"></i>
                                <h2 className='font-normal text-2xl'>Adress</h2>
                                <h2 className='text-gray-500 text-lg font-bold'>1234 N Spring St, Los Angeles, CA 90012, United States.</h2>
                            </div>
                            <div>
                                <i class="fa-solid fa-phone text-coffeeBrown"></i>
                                <h2 className='font-normal text-2xl'>Phone</h2>
                                <h2 className='text-gray-500 text-lg font-bold'>+01 - 123 456 7890 </h2>
                            </div>
                            <div>
                                <i class="fa-solid fa-envelope text-coffeeBrown"></i>
                                <h2 className='font-normal text-2xl'>Email</h2>
                                <h2 className='text-gray-500 text-lg font-bold'>mail@example.com</h2>
                            </div>
                        </div>
                        <Media></Media>

                    </div>

                    <div>
                        <SendMessageForm />

                    </div>

                    <div className='flex max-md:grid mt-28 mb-12'>
                    <img className=' p-5' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg" alt="" />
                        <div>
                        <i  className="mt-5 text-4xl fas fa-quote-left text-coffeeBrown"></i>
                            <p className='text-lg 850-and-up:text-3xl font-bold'>Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.</p>
                        
                            <img className='mt-5 ' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png"  alt="signature"/>
                        <h2 className='text-2xl font-bold'>Dianna Adams</h2>
                        </div>

                    </div>



                </div>

            </div>

            <div className='bg-coffeeBrown pb-6 p-1 '>
                <FoodLoversSection></FoodLoversSection>
            </div>

            <Footer></Footer>
        </div>

    )
}

export default Contact
