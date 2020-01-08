import React from "react"
import { useDispatch, useSelector } from "react-redux"
function Filter() {
  const dispatchRedux = useDispatch()
  const colors = useSelector(appState => appState.colors)
  return (
    <div className='ml-1 row w-100'>
      <div className='col-6 offset-3'>
        <div className='form-group '>
          <select
            className='form-control form-control-lg'
            id='exampleFormControlSelect1'
            onChange={e => dispatchRedux({ type: "COLOR_SELECT", payload: e.target.value })}
          >
            <option value={null} />
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
