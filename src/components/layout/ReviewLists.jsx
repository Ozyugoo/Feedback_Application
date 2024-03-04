/* eslint-disable react/prop-types */
import ReviewItem from "./ReviewItem";

function ReviewLists({reviews, deleteReview}) { 

  if (!reviews || reviews.length === 0) {
    return <div className="container">
      <p className="no-reviews">
        No reviews yet!
      </p>
    </div>
  }

  return (
    <>

      <div>
        {reviews.map((item) => (
          <div key={item.id}>
            <ReviewItem review={item} deleteReview={deleteReview} />
          </div>
        ))}
      </div>              
      
    </>
  )
}

export default ReviewLists
