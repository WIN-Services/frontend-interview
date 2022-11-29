import React, { Component } from "react";
export default class NewsletterSubscribe extends Component {
  render() {
    return (
      <div className="email-subscribe">
        <h1>Subscribe to our emails </h1>
        <p>
          Enter your email address to receive the latest notifications,
          newsletters, and updates from WIN!
        </p>
        <div className="input-email">
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Your email address"
          />
          <button type="submit" className="btn btn-subscribe">
            Subscribe
          </button>
        </div>
      </div>
    );
  }
}
