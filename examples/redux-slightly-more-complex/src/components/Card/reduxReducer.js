const initialState = {
  colors: [
    "bg-primary text-white",
    "bg-secondary",
    "bg-success",
    "bg-danger text-white",
    "bg-warning",
    "bg-info text-white",
    "bg-light",
    "bg-dark",
    "bg-white"
  ],
  selectedId: null,
  selectedColor: ""
}

export default (prevState = initialState, { type, payload }) => {
  switch (type) {
    case "COLOR_SELECTED":
      return { ...prevState, selectedColor: payload }
    case "ID_SELECTED":
      return { ...prevState, selectedId: payload }
    default:
      return { ...prevState }
  }
}
