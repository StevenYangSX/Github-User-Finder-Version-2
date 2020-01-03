import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar title="Github User Finder Version 2" icon="fab fa-github" />
      </div>
    </Router>
  );
};

export default App;
