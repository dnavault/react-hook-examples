import React from "react"
import { sample } from "lodash"
import Card from "../Card"
import { useSelector } from "react-redux"
import Filter from "../Filter"
import Modal from "../Modal"
import Interactions from "../Interactions"

function App() {
  const colors = useSelector(appState => appState.card.colors)
  // what if INTERACTIONS was here? (re-render issues)
  return (
    <>
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='ml-1 row w-100'>
          <div className='col-4 offset-4'>
            <Filter />
          </div>
        </div>
      </div>

      <div style={{ padding: "20px" }} className='container'>
        <div className='ml-1 row w-100'>
          <div className='col-3'>
            <Interactions />
          </div>
          <div className='col-9'>
            <div className='row'>
              {colors.map((color, index) => (
                <Card key={index} color={sample(colors)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal />
    </>
  )
}

export default App
