import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import { Home } from "./components/home.component";
import { HeroPage } from "./components/hero.component";
import { Footer } from "./components/home.style";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/hero/:id" exact component={ HeroPage } />
      </Switch>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
