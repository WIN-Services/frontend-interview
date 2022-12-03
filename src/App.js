import React from 'react'
import './App.css';
import Button from './components/Button';
import Contacthp from './components/Contacthp';
import Label from './components/Label';
import Textbox from './components/Textbox';


function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="contact">
          <p className='h4'>Contact Us</p>
          <Contacthp title="Inspections" info="(800) 309-6753 | info@wini.com " />
          <Contacthp title="Franchising" info="(800) 309-6753 | info@wini.com " />
          <Contacthp title="Vendors" info="(312) 557-9319 | vendors@wini.com" />
        </div>
        <div className="form">
          <div className="top">
            <div className="element">
              <Label title="Name" />
              <Textbox ofType={"text"} st="normal" />
            </div>
            <div className="element">
              <Label title="Email" />
              <Textbox ofType={"text"} st="normal" />
            </div>
          </div>
          <div className="down">
            <div className="element">
              <Label title="Phone Number" />
              <Textbox ofType={"text"} st="normal" />
            </div>
            <div className="element">
              <Label title="Zip Code" />
              <Textbox ofType={"text"} st="normal" />
            </div>
          </div>
          <div className="element">
              <Label title="Name" />
              {/* <Textbox ofType={"text"} st="area" /> */}
              <textarea name="" id="" cols="30" rows="10" className='area input-text' />
              <Button ofText="Submit" btnstyle="submit" />
          </div>
            
        </div>
      </div>
      <footer>
        <p className='h3'>Subscribe to our emails </p>
        <p className='med-reg'>Enter your email address to receive the latest notifications, newsletters, and updates from WIN! </p>
        <div className="sub">
          <Textbox />
          <Button title="Subscribe" btnstyle={"subscribe"} />
        </div>
      </footer>
      {/* <h1>Hello World</h1>
      <Label text="Name" />
      <Textbox ofType={"text"} />
      <Button ofText="Submit" style="" /> */}
    </div>
  );
}

export default App;
