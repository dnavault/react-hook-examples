import { combineReducers } from "redux"
import card from "./components/Card/reduxReducer"
import interactions from "./components/Interactions/reduxReducer"

const appReducers = combineReducers({
  card,
  interactions
})

// const rootReducer = (state, action) => {
//   console.log(JSON.stringify(state, null, 4))
//   return appReducers(state, action)
// }

export default appReducers
