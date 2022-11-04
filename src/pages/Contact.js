import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="formBox">
      <form>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anythibg you have in mind.</p>

        <div className="name-section">
          <div className="fname-section">
            <label>First name</label>
            <input
              type="text"
              id="first_name"
              name="firstname"
              placeholder="Enter your first name"
            />
          </div>

          <div className="fname-section">
            <label>Last name</label>
            <input
              type="text"
              id="last_name"
              name="lastname"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="yourname@email.com"
        />

        <label>Message</label>
        <textarea
          name="msg"
          id="message"
          cols="20"
          rows="10"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        ></textarea>

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
