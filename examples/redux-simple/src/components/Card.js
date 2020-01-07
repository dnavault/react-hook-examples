import React from "react"
import classnames from "classnames"
import { useSelector } from "react-redux"
export const colors = [
  "bg-primary text-white",
  "bg-secondary",
  "bg-success",
  "bg-danger text-white",
  "bg-warning",
  "bg-info text-white",
  "bg-light",
  "bg-dark",
  "bg-white"
]

function Card({ color }) {
  const reduxColor = useSelector(state => state.color)

  const bgColor = colors.find(c => c.includes(color))
  const hide = reduxColor !== "" && reduxColor !== color

  console.log(color, "reduxColor", reduxColor)

  return (
    <div className={classnames("col-lg-4 col-md-6 col-12 animated fadeIn", { "d-none": hide })}>
      <div className={`card mb-3 ${bgColor}`}>
        <div className='card-header'>{color}</div>
        <div className='card-body'>
          <p className='mt-3 card-text animated fadeIn'>ok</p>
        </div>
      </div>
    </div>
  )
}

export default Card
