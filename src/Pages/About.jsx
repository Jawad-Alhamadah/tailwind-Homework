import React from 'react'
import Navbar from '../components/Navbar'
import BackgroundRectangle from '../components/BackgroundRectangle'
import Media from '../components/Media'
import SendMessageForm from '../components/SendMessageForm'
import FoodLoversSection from '../components/FoodLoversSection'
import Footer from '../components/Footer'
import FeaturedBanner from '../components/FeaturedBanner'
function About() {
    return (
        <div>
            <div className=' xl:px-40 md:px-10 px-6'>

                {/* <BackgroundRectangle /> */}
                <Navbar />

                <div className='flex flex-wrap mt-20 w-[40%]'>
                    <div>
                        <h2 className='max-md:text-4xl font-[Fraunces,serif] font-thin text-6xl '>About</h2>
                        <p className='w-[70%]'>
                        Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.
                        </p>
                        <div className='max-md flex flex-col space-y-8 mt-16 w-[70%]'>
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
                    
                    <div className=' '>
                            <img className='translate-x-5 -z-20 absolute top-0 right-0 w-[50%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-3.jpg" alt="" />
                            <img className="-translate-x-5  -z-20 absolute top-0 right-0 w-[47%]" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg" alt="Person img" />
                        </div>
                        
                        

                    </div>

                   



                </div>

            </div>

            <div className='flex w-[100%] max-md:grid mb-12 mt-10 '>
                    <img className=' w-[50%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg" alt="" />
                        <div className='w-[50%] p-5'>
                        <i  className="mt-5 text-4xl fas fa-quote-left text-coffeeBrown"></i>
                            <p className='text-lg 850-and-up:text-3xl font-bold'>Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.</p>
                        
                            <img className=' ' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png"  alt="signature"/>
                        <h2 className='text-2xl font-bold'>Dianna Adams</h2>
                        </div>

                    </div>


            <div className='bg-coffeeBrown pb-6 p-1 '>
                <FoodLoversSection></FoodLoversSection>
            </div>

            <div>
                <FeaturedBanner></FeaturedBanner>
            </div>

            <div className=''>
                
                <img className='p-5' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-video-img.jpg" alt="" />
                <h1 className='text-white text-2xl pl-10 relative -top-32'>
                Dianna Adam's Family </h1>
                <h1 className='text-white text-2xl pl-10 relative -top-32 w-[70%]'> Est, cras aliquet nunc, habitant velit ac, pellentesque dignissim mattis tempor. </h1>

            </div>
            <Footer></Footer>
        </div>

    )
}

export default About
