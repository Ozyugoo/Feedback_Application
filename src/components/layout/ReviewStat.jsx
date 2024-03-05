/* eslint-disable react/prop-types */

// acc = accumulator, cur = current value

function ReviewStat({reviews}) {
// sum of the total reviews rating divided by the total length of the array
    let average = reviews.reduce((acc, cur) => {
        return acc + cur.rating}, 0) / reviews.length

// this convert the output to one decimal point
    average = average.toPrecision(2)

  return (
    <>
      <div className="review-stats">
        <p>Reviews: {reviews.length}</p>

        <p>
          Average: {isNaN(average) ? <em>No ratings yet</em> : average} &#47; {reviews.length}
        </p>
      </div>
    </>
  )
}

export default ReviewStat
