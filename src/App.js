import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import NewsletterSubscribe from './components/NewsletterSubscribe';

function App() {
  return (
    <div className="App">
    <ContactForm/>
    <NewsletterSubscribe/>
    </div>
  );
}

export default App;
