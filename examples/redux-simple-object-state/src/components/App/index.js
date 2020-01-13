import React from "react"
import { sample } from "lodash"
import Card from "../Card"
import { useSelector } from "react-redux"
import Filter from "../Filter"
import Modal from "../Modal"

function App() {
  const colors = useSelector(appState => appState.colors)
  return (
    <>
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <Filter />
      </div>

      <div style={{ padding: "20px" }} className='container'>
        <div className='row'>
          {colors.map((color, index) => (
            <Card key={index} color={sample(colors)} />
          ))}
        </div>
      </div>

      <Modal />
    </>
  )
}

export default App
