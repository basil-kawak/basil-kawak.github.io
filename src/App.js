import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Navigation from "./components/Navigation";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return ReactDOM.render(
    <Router>
      <>
        <Navigation />
        <Route exact path="/" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Resume" component={Resume} />
      </>
    </Router>,
    document.getElementById("root")
  );
}
export default App;
