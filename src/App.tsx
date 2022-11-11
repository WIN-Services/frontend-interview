import React from "react";

import { ContactForm } from "./components/ContactForm";
import styles from "./App.module.scss";
import { EmailSubscription } from "./components/EmailSubscription";

function App() {
  return (
    <div className={styles.App}>
      <ContactForm />
      <EmailSubscription />
    </div>
  );
}

export default App;
