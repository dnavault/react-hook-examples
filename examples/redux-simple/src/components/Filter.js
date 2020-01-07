import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { colors } from "./Card"
function Filter() {
  const reduxColor = useSelector(state => state.color)
  const dispatch = useDispatch()

  return (
    <div className='ml-1 row w-100'>
      <div className='col-4 offset-4'>
        <div className='form-group'>
          <select className='form-control' id='exampleFormControlSelect1' onChange={e => dispatch({ type: "COLOR_SELECT", payload: e.target.value })}>
            <option value={null}></option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
