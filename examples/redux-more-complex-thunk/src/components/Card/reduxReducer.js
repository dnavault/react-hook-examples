const initialState = {
  selectedId: null,
  contentById: {}
}

export default (prevState = initialState, { type, payload }) => {
  switch (type) {
    case "CARD_SELECTED":
      return { ...prevState, selectedId: payload }
    case "CARD_CONTENT_SELECTED":
      return { ...prevState, contentById: { ...prevState.contentById, [payload.id]: payload.url } }
    default:
      return { ...prevState }
  }
}
