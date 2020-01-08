import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./components/App"
import "./index.css"

import reduxReducer from "./reduxReducer"

const store = createStore(reduxReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
