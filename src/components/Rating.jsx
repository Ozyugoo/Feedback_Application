import { useState } from "react"

function Rating(ratingState) {
    const [selected, setSelected] = useState(7)

    const handleSelect = (e) => {
        setSelected(+e.currentTarget.value)
        ratingState(+e.currentTarget.value)
    }

  return (
    <>
      <ul className="rating">
        <li>
            <input type="radio" name="rating" id="num1" value="1" onChange={handleSelect} checked={selected === 1} />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num2" value="2" onChange={handleSelect} checked={selected === 2} />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num3" value="3" onChange={handleSelect} checked={selected === 3} />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num4" value="4" onChange={handleSelect} checked={selected === 4} />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num5" value="5" onChange={handleSelect} checked={selected === 5} />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num6" value="6" onChange={handleSelect} checked={selected === 6} />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num7" value="7" onChange={handleSelect} checked={selected === 7} />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num8" value="8" onChange={handleSelect} checked={selected === 8} />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num9" value="9" onChange={handleSelect} checked={selected === 9} />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input type="radio" name="rating" id="num10" value="10" onChange={handleSelect} checked={selected === 10} />
            <label htmlFor="num10">10</label>
        </li>
      </ul>
    </>
  )
}

export default Rating
