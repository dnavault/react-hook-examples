import React from "react"
import { useDispatch, useSelector } from "react-redux"
function Filter() {
  const dispatchRedux = useDispatch()
  const colors = useSelector(appState => appState.card.colors)
  return (
    <div className='form-group '>
      <select
        className='form-control form-control-lg'
        id='exampleFormControlSelect1'
        onChange={e => dispatchRedux({ type: "COLOR_SELECTED", payload: e.target.value })}
      >
        <option value={null} />
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
