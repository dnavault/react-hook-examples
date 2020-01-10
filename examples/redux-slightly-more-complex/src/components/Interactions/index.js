import React from "react"
import { isEqual } from "lodash"
import { useSelector, shallowEqual } from "react-redux"
function Interactions() {
  const { lastIdsSelected, numInteractions } = useSelector(appState => appState.interactions)
  console.log("interactions rerender")
  return (
    <>
      <div>Num Interactions: {numInteractions}</div>
      <pre>{JSON.stringify(lastIdsSelected, null, 2)}</pre>
    </>
  )
}

export default Interactions
