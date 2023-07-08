import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Contact from "./Containers/Contact/index";
import "./App.css";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
