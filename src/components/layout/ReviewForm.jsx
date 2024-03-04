import { useState } from "react"
import Button from "./Button"

function ReviewForm() {
    const [text, setText] = useState('')

    const textHandler = (e) => {
        setText(e.target.value)
    }

  return (
    <>
      <div className="container">
        <div className="card">
            <form>
                <h4>Kindly drop a Review for our service you just experienced.</h4>
                <br />
                <div className="input-group">
                    <input type="text" value={text} 
                    placeholder="write your review here" 
                    onChange={textHandler}/>

                    <Button type='submit' variant="secondary">Submit</Button>
                </div>
            </form>
        </div>
       
      </div>
    </>
  )
}

export default ReviewForm
