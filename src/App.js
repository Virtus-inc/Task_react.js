import React from "react";
import _infoBox from "./components/_infoBox";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <_infoBox />
      </div>
    </BrowserRouter>
  );
}

export default App;