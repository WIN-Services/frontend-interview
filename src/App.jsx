import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import HomePage from "./Pages/HomePage/HomePage";
import ViewPage from "./Pages/Viewpage/ViewPage";
import AddPage from "./Pages/AddTask/AddTask";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add/:id?" element={<AddPage />} />
        <Route path="/view/:id" element={<ViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
