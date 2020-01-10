const initialState = {
  numInteractions: 0,
  lastIdsSelected: []
}

export default (prevState = initialState, { type, payload }) => {
  let { lastIdsSelected, numInteractions } = prevState
  switch (type) {
    case "COLOR_SELECTED":
      return { ...prevState, numInteractions: numInteractions + 1 }
    case "ID_SELECTED":
      if (payload !== null) lastIdsSelected.unshift(payload)
      if (lastIdsSelected.length > 6) lastIdsSelected.pop()
      return { ...prevState, lastIdsSelected, numInteractions: numInteractions + 1 }
    default:
      return { ...prevState }
  }
}
