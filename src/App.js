import React from 'react';
function App() {
  return (
    <section id="section">
          <div className="container">
            <div className="contactus">
              <div className="contactus-content">
                <h4>Contact Us</h4>
                <div className="info-collection">
                  <div id="contactus-info">
                    <h5>Inspections</h5>
                    <p>(800) 309-6753</p>
                  </div>
                  <div id="contactus-info">
                    <h5>Franchising</h5>
                    <p>(800) 309-6753</p>
                  </div>
                  <div id="contactus-info">
                    <h5>Vendors</h5>
                    <p>(800) 309-6753</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="form">
                <div className="text-group-collection">
                  <div className="text-group-couple">
                    <div className="text-group">
                      <label id="text-label" htmlFor="fname">Name</label><br />
                      <input id="roundedTextBox" type="text" name="fname" placeholder="Full Name" /><br />
                    </div>
                    <div className="text-group">
                      <label id="text-label" htmlFor="fname">Email</label><br />
                      <input id="roundedTextBox" type="text" name="fname" placeholder="xyz@abc.com" /><br />
                    </div>
                  </div>
                  <div className="text-group-couple">
                    <div className="text-group">
                      <label id="text-label" htmlFor="fname">Phone Number</label><br />
                      <input id="roundedTextBox" type="text" name="fname" placeholder="(123) 456-7890" /><br />
                    </div>
                    <div className="text-group">
                      <label id="text-label" htmlFor="fname">ZIP Code</label><br />
                      <input id="roundedTextBox" type="text" name="fname" placeholder="XXXXX" /><br />
                    </div>
                  </div>
                  <div className="text-message">
                    <div className="text-group">
                      <label id="text-label" htmlFor="fname">Message</label><br />
                      <textarea id="roundedTextBox" name="message" rows={10} cols={40} placeholder="Please type it in here..." defaultValue={""} />
                    </div>
                  </div>
                </div>
                <button id="button" className="submit-button" type="button">SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="container-2">
            <h2>Subscribe to our emails</h2>
            <p>Enter your email address to receive the latest notifications, newsletters, and updates from WIN!</p>
            <div className="subscribe">
              <div className="subscribe-textfield">
                <input id="roundedTextBox" type="text" name="fname" placeholder="Your email address" /><br />
                <button id="button" className="subscribe-button" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
  );
}

export default App;
