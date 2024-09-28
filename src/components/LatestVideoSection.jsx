import React from 'react'
import VideoCard from './VideoCard'
import SecondaryButton from './SecondaryButton'
function LatestVideoSection() {
    let video_card = [
        {
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            title: "Family Dinner - Latea pulvinar scelerisque diam tempus facilisi",
        },
        {
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            title: "Lobortis turpis turpis vehicula laoreet egestas enim ornare",
        },
        {
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            title: "Tempus quis ac viverra condimentum sit nulla viverra",
        },

        {
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            title: "Quis mauris egestas enim urna dictum",
        },


    ]
    return (
        <div>
            <h2 className='max-md:text-center tracking-wide font-thin mb-20 text-5xl max-md:text-center font-[Fraunces,serif]'>Latest Videos</h2>

            <div className='lg:flex gap-10 '>

                <div className=''>

                    <img className=' mb-10 w-[-webkit-fill-available] w-[-moz-available]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg" alt="food image" />
                    <h2 className='text-4xl font-[Fraunces,serif] mb-10'>
                    Dianna Adams visits the Sooto Restaurant | Uncovered Miami
                    </h2>
                    <p className='mb-16 text-lg text-gray-500'>A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>
                </div>

                <div className=' space-y-8 flex flex-col mb-16'>
                    {
                        video_card.map((card, index) =>
                            <VideoCard
                                key={index}
                                src={card.src}
                                description={card.description}
                                title={card.title}

                            />)
                    }
                   <SecondaryButton text="VIEW ALL VIDEOS"  />
                   
                </div>
            </div>
        </div>

    )
}

export default LatestVideoSection
