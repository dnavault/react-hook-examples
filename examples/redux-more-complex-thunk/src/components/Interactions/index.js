import React from "react"
import { useSelector } from "react-redux"
import { colors } from "../App"

function Interactions({ bgColor = "" }) {
  console.log("interactions rerender")
  const { numInteractions } = useSelector(appState => appState.interactions)
  const percentage = parseInt((numInteractions / colors.length) * 100)
  return (
    <>
      <div className='progress' style={{ height: "20px" }}>
        <div
          className={`progress-bar ${bgColor}`}
          role='progressbar'
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </>
  )
}

export default Interactions
