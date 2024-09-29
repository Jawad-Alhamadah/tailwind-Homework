import React from 'react'
import BackgroundRectangle from '../components/BackgroundRectangle'
import Homepage from '../components/Homepage'
import Media from '../components/Media'
import FeaturedBanner from '../components/FeaturedBanner'
import SecondaryButton from '../components/SecondaryButton'
import ReviewsContainer from '../components/ReviewsContainer'
import ResturantContainer from '../components/ResturantContainer'
import MailList from '../components/MailList'
import LatestVideoSection from '../components/LatestVideoSection'
import FoodLoversSection from '../components/FoodLoversSection'
import Footer from '../components/Footer'
import ExpandedNav from '../components/ExpandedNav'
import Navbar from '../components/Navbar'

function Home() {

    let [exapnd,SetExpand] = React.useState("none")

    return (
        <div>
           <ExpandedNav display={exapnd} SetExpand={SetExpand} />
          <div className=' xl:px-40 md:px-10 px-4'>
           
            <BackgroundRectangle />
    
            <Navbar SetExpand={SetExpand}/>
            <Homepage />
            <Media />
            <FeaturedBanner />
            <div className='flex justify-between max-sm:flex-col items-center'>
              <h1 className=' max-sm:mb-5 flex font-[Fraunces,serif] text-5xl max-sm:text-3xl max-sm:text-center'>Latest Reviews</h1>
              <SecondaryButton text="VIEW ALL" />
            </div>
    
            <ReviewsContainer />
    
          </div>
    
    
          <div className='bg-[#f2efee] xl:px-40 md:px-10 px-4 mt-24  pt-32  mb-16  lg:mb-80 max-md:pb-36 space-y-14 flex flex-col'>
            <h3 className='text-center text-5xl max-sm:text-3xl  font-[Fraunces,serif] '>Best in Class Restaurant</h3>
    
            <h3 className='text-center w-[70%] self-center text-lg text-gray-400  '>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</h3>
            <ResturantContainer />
            <MailList />
          </div>
    
      
    
          <div className=' xl:px-40 md:px-10 px-4 sm:mt-36 md:mt-80 max-md:pb-10 space-y-14 flex flex-col'>
            <LatestVideoSection />
            
          </div>
    
          <div className=' xl:px-40 md:px-10 px-4  max-md:pb-10 space-y-14 flex flex-col bg-[#be7c68]'>
           
            <FoodLoversSection/>
          </div>
         
    
          <div className=' xl:px-40 md:px-10 px-4  max-md:pb-10 space-y-14 flex flex-col'>
             <Footer/>
            
          </div>
    
    
        </div>
      )
}

export default Home
