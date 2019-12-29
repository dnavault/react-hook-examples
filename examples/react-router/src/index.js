import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Navbar from "./Navbar";
import "bulma/css/bulma.css";

const pages = [
  { icon: "🧙‍♀", url: "mage" },
  { icon: "🧙‍", url: "wizard" },
  { icon: "🐉", url: "dragon" },
  { icon: "🌎", url: "planet" },
  { icon: "🌏💥", url: "planet/ko" }
];

const style = {
  fontSize: "100px",
  margin: "75px 0 0 0",
  width: "100%",
  textAlign: "center"
};
const App = () => (
  <div>
    <Navbar pages={pages} />
    <div style={style}>
      <Routes />
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
