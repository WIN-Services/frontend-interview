import React, { Component } from "react";
export default class ContactForm extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row contact-wrapper">
          <div className="col-md-4">
            <div className="contact-details-section">
              <h4>Contact Us</h4>
              <h6>Inspections</h6>
              <span>(800) 309-6753 | info@wini.com</span>
              <h6>Franchising</h6>
              <span>(800) 309-6753 | info@wini.com</span>
              <h6>Vendors</h6>
              <span>(312) 557-9319 | vendors@wini.com</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="contact-form">
              <form>
                <div class="form-row col-sm-10">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="xyz@abc.com"
                    />
                  </div>
                </div>

                <div class="form-row col-sm-10">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="XXXXX"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">ZIP Code</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="xyz@abc.com"
                    />
                  </div>
                </div>
                <div class="form-row col-sm-10">
                  <div class="form-group col-sm-12">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      placeholder="Please type it in here..."
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-submit">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
