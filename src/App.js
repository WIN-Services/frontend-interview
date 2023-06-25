import ContactForm from "./components/ContactForm";
import EmailSubscriptionForm from "./components/EmailSubscriptionForm";
import "./App.css";

function App() {
  return (
    <div className="md:m-[5%]">
      <ContactForm />
      <EmailSubscriptionForm />
    </div>
  );
}

export default App;
