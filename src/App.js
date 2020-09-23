import React from "react";
import { hot } from "react-hot-loader";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <>
      <div className='App'>Hello, react boiler plate!</div>
      <Home />
    </>
  );
}

export default hot(module)(App);
