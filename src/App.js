import React from 'react';
import './App.scss';
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
	<div>
	  <div className = "formPage">
		<ContactUs></ContactUs>
		<Form></Form>
	  </div>
	  <Footer></Footer>
	</div>
  );
}

export default App;
