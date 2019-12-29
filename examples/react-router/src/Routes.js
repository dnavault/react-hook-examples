import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Wizard from "./Wizard";
import Mage from "./Mage";
import Kawaii from "./Kawaii";

function Routes() {
  return (
    <Switch>
      <Route path="/dragon" render={() => <div>🐉</div>} />
      <Route path="/mage" component={Mage} />
      <Route path="/wizard" component={Wizard} />

      <Route exact path="/planet" component={Kawaii} />
      <Route path="/planet/:mood" component={Kawaii} />
      {/* <Route exact path="/planet" render={() => <Kawaii mood={"happy"} />} /> */}

      <Redirect to="/dragon" />
    </Switch>
  );
}

export default Routes;
