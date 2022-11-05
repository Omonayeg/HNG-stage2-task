import { Link } from "react-router-dom";

import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length == 0) {
      setError(true);
    }
    if (message) {
      console.log(message);
    }
  };

  return (
    <div className="formBox">
      <form id="form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <div className="name-section">
          <div className="fname-section">
            <label>First name</label>
            <input
              type="text"
              id="first_name"
              name="firstname"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="fname-section">
            <label>Last name</label>
            <input
              type="text"
              id="last_name"
              name="lastname"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="yourname@email.com"
          required
        />
        {/* <div> */}
        <label>Message</label>
        <textarea
          name="msg"
          id="message"
          cols="20"
          rows="10"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send me a message and I'll reply you as soon as possible..."
        ></textarea>
        {error && message.length <= 0 ? <h4>Please enter a message</h4> : ""}
        {/* </div> */}

        <label>
          <input type="checkbox" />
          You agree to providing your data to Will who may contact you.
        </label>

        <button type="submit" id="btn_submit" className="formBtn">
          Send message
        </button>
      </form>

      <Link to="/"> Home </Link>
    </div>
  );
}
