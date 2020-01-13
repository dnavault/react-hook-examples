import React from "react"
import { sample } from "lodash"
import Card from "../Card"
import { useSelector } from "react-redux"
import Modal from "../Modal"
import Interactions from "../Interactions"

export const colors = [
  "bg-primary text-white",
  "bg-primary text-white",
  "bg-secondary",
  "bg-success",
  "bg-danger text-white",
  "bg-info text-white",
  "bg-success",
  "bg-dark",
  "bg-dark"
]

const randomColor = sample(colors)

function App() {
  // what if INTERACTIONS was here? (re-render issues)
  return (
    <>
      <div className={`navbar navbar-expand-lg navbar-light`}>
        <div className='ml-1 row w-100'>
          <div className='col-12'>
            <Interactions bgColor={randomColor} />
          </div>
        </div>
      </div>

      <div style={{ padding: "20px" }} className='container'>
        <div className='ml-1 row w-100'>
          {colors.map((color, index) => (
            <Card key={index} bgColor={randomColor} />
          ))}
        </div>
      </div>

      <Modal />
    </>
  )
}

export default App
