import { useState } from "react"
import Header from "./components/layout/Header"
import ReviewLists from './components/layout/ReviewLists'
import Data from './components/data/data'
import ReviewStat from "./components/layout/ReviewStat"
import ReviewForm from "./components/layout/ReviewForm"


function App() {
  const [review, setReview] = useState(Data) 

  const deleteReview = (id) =>{
    if(window.confirm('Are you sure, you want to delete this review?')) {
      setReview(review.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header text="Review Application" />

      <ReviewForm />
      <div className="container">
        <ReviewStat reviews={review} />
        <ReviewLists reviews={review} deleteReview={deleteReview} />        
      </div>

    </>
  )
}

export default App
