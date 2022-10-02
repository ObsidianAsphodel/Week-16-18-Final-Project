import React from 'react'
import Review from './Review'

const ReviewList = ({reviews}) => {
  return (
    <>
        <div>
            {reviews.map((review) =>{
                <Review review={review}/>
            })}
        </div>
    </>
  )
}

export default ReviewList