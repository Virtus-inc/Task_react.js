import React from "react";
import _infoBox from "./components/_infoBox";
import _timingBox from "./components/_timingBox";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <_infoBox />
          <_timingBox />
      </div>
    </BrowserRouter>
  );
}

export default App;