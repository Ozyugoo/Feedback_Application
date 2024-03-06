/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "./Button"
import Rating from "./Rating"

function ReviewForm({handleAdd}) {
  // state for input text
    const [text, setText] = useState('')

     // state for button (disable)
    const [btnDisabled, setBtnDisabled] = useState(true)

     // state for validation (characters)
    const [msg, setMsg] = useState('')

    // state to handle ratings fron users
    const [rating, setRating] = useState(7) 

  // function to update the text state (in the input field)
    const textHandler = (e) => {
      
      if (text === '') {
        setBtnDisabled(true) // disable button
        setMsg(null)

      } else if (text && text.trim().length <= 20) {
        setBtnDisabled(true) // disable button
        setMsg('Your review must be above 20 characters')

      } else {
        setMsg(null)
        setBtnDisabled(false) // enable button

      }
        setText(e.target.value)
    }

    // function to submit a review
    const formSubmit = (e) => {
      e.preventDefault()
      if (text.trim().length > 20) {
        const newReview = {
          text,
          rating
        }

        handleAdd(newReview)
        setText('')
      }
    }


  return (
    <>
      <div className="container">
        <div className="card">
            <form onSubmit={formSubmit}>
                <h4>Kindly drop a Review for our service you just experienced.</h4>
                
                <Rating ratingState={(rating) => setRating(rating)} />
                
                <div className="input-group">
                    <input type="text" value={text} 
                    placeholder="write your review here" 
                    onChange={textHandler}/>

                    <Button type='submit' variant="secondary" isDisabled={btnDisabled}>
                      Submit
                    </Button>
                </div>
                {msg && (<span className="message spanStyle">{msg}</span>)}
            </form>
        </div>
       
      </div>
    </>
  )
}

export default ReviewForm
