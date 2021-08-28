import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
  
import './App.css';
import Home from "./component/home/Home";
import About from "./component/about/About"
import Contact from "./component/contact/Contact";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
        <Router>

          <Navbar />

          <Switch>
            <Route exact path="/" >
              <Home /> 
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/contact">
              <Contact />
              </Route>
          </Switch>
          </Router>
  );
}

export default App;
