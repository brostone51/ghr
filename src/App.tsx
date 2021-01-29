import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './component/header';
import about from "./page/about";
import contact from "./page/contact";
import shop from "./page/shop";

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            {about}
          </Route>
          <Route path="/shop">
            {shop}
          </Route>
          <Route path="/contact">
            {contact}
          </Route>
        </Switch>
      </div>
    </div>
  );
}