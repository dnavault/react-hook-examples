const initialState = {
  selectedColor: "",
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
  selectedId: null
}

export default (prevState = initialState, { type, payload }) => {
  console.log({ type, payload })
  switch (type) {
    case "COLOR_SELECT":
      return { ...prevState, selectedColor: payload }
    case "ID_SELECTED":
      return { ...prevState, selectedId: payload }
    default:
      return { ...prevState }
  }
}
