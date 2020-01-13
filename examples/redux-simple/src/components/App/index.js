import React from "react"
import { sample } from "lodash"
import Card from "../Card"
import { colors } from "../Card"
import Filter from "../Filter"

function App() {
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
    </>
  )
}

export default App
