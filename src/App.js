import React from "react";
import "./App.css";
import ContactUsForm from "./components/ContactUsForm";
import SubscriptionBanner from "./components/SubscriptionBanner";

function App() {
  return (
    <div className="app">
      <ContactUsForm />
      <SubscriptionBanner />
    </div>
  );
}

export default App;
