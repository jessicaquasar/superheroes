import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Home } from "./home/home.component";
import { HeroPage } from "./hero/hero.component";
import { NotFound } from "./notFound/notFound.component";
import { Footer } from "./home/home.style";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hero/:id" exact component={HeroPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
