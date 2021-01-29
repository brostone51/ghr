import React from "react";
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import about from "./page/about";
import contact from "./page/contact";
import shop from "./page/shop";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
    </Router>
  );
}