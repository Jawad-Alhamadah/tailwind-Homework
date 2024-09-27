import React from 'react'
import ReviewCard from './ReviewCard'
function ReviewsContainer() {

    let cards_info = [
        {
            title: "Grilled Flank Steak with Chimichurri",
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg",
            paragraph: "Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque.",
            readMore: true
        },
        {
            title: "Mushroom Penne with Walnut Pesto",
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg",
            paragraph: "Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus.",
            readMore: true
        },
        {
            title: "Garlic Butter White Wine Shrimp Linguine",
            src: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg",
            paragraph: "Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis.",
            readMore: true
        },

    ]
    return (
        <div className='mt-20 flex gap-10  max-lg:flex-wrap '>
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

export default ReviewsContainer
