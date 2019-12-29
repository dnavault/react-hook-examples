import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";

import "./styles.scss";

function Main() {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:slug" component={App} />
      {/* <Route path="/:url" render={({ match }) => <App match={match} />} /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  rootElement
);
