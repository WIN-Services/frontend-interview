import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
