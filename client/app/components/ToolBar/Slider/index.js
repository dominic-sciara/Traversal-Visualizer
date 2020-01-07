import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { slide } from '../../../reducers'



const Slider = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(50)

    function changeHandler(event) {
        setValue(Number(event.target.value))
    }

    function mouseUpHandler() {
        // formula for a visually appealing animation speedls
        let speed = 100 + (value * 10)
        dispatch(slide(speed))
    }

    return (
        <div className="slidecontainer">
            <p>Animation Speed</p>
            <span id="demo"></span>
            <input  
                    onMouseUp={mouseUpHandler}
                    onChange={changeHandler} 
                    type="range" min="1" max="100" 
                    value={value} className="slider" 
                    id="myRange" 
            />
        </div>
    )

}

export default Slider



