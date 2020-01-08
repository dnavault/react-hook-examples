import React from "react"
import classnames from "classnames"
import { useSelector, useDispatch } from "react-redux"
import uuidv1 from "uuid/v1"

function Card({ color }) {
  const colorRedux = useSelector(appState => appState.selectedColor)
  const colors = useSelector(appState => appState.colors)
  const dispatchRedux = useDispatch()
  console.log("colorRedux", colorRedux)

  const [id] = React.useState(uuidv1())

  const bgColor = colors.find(c => c.includes(color))
  const hide = colorRedux !== "" && colorRedux !== color
  return (
    <div
      className={classnames("col-lg-4 col-md-6 col-12 animated fadeIn", {
        "d-none": hide
      })}
    >
      <div className={`card mb-3 ${bgColor}`} onClick={() => dispatchRedux({ type: "ID_SELECTED", payload: id })}>
        <div className='card-header'>{color}</div>
        <div className='card-body'>
          <p className='mt-3 card-text animated fadeIn'>{id}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
