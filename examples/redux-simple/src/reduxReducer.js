const initialState = {
  color: ""
}

export default (prevState = initialState, { type, payload }) => {
  console.log({ type, payload })
  switch (type) {
    case "COLOR_SELECT":
      return { color: payload }
    default:
      return { ...prevState }
  }
}
