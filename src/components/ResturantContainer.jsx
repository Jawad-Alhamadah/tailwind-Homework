import React from 'react'
import ReviewCard from './ReviewCard'
function ResturantContainer() {
    let cards_info = [
        {
            title: "Bern's Steak House",
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg",
            paragraph: "Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet.",
            readMore: false
        },
        {
            title: "Eewak Korean Restaurant",
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg",
            paragraph: "Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui.",
            readMore: false

        },
        {
            title: "The Ramban Vegan House",
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg",
            paragraph: "Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.",
            readMore: false

        },
        {
            title:"Maniest Bake & Cake",
            src:"https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg",
            paragraph:"Diam lacus nunc est commodo nunc, velit et amet eu vitae sem.",
            readMore:false

        }

        ,
        {
            title:"Crush Los Angeles",
            src:"https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg",
            paragraph:"Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique.",
            readMore:false

        }


        ,
        {
            title:"The Mike Winery",
            src:"https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg",
            paragraph:"Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis.",
            readMore:false

        }



    ]

  return (
    <div className='mt-20 flex gap-10 flex-wrap max-lg:flex-wrap'>
    {cards_info.map((card, index) =>
        <ReviewCard
            key={index}
            src={card.src}
            title={card.title}
            paragraph={card.paragraph}
            readMore={card.readMore}>
        </ReviewCard>
    )}

    </div>
  )
}

export default ResturantContainer
