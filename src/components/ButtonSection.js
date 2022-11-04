import { useNavigate } from "react-router-dom";

import slack from "../photos/slack.png";
import github from "../photos/Icon.png";

export default function Button() {
  const navigate = useNavigate();

  return (
    <div className="btn-container">
      <button className="btn" id="btn__zuri">
        <a href="https://training.zuri.team/">Join Us Today at ZURI</a>
        {/* {"Join Us Today at ZURI"} */}
      </button>

      <button className="btn" id="books">
        <a href="https://books.zuri.team/">
          Get Books About Design and Coding Here
        </a>
        {/* {"Get Books About Design and Coding Here"} */}
      </button>

      <button className="btn" id="book__python">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Will">
          Do you want to get better at Python?, Get this book!
        </a>
        {/* {"Do you want to get better at Python?, Then you should have this book"} */}
      </button>

      <button className="btn" id="pitch">
        <a href="https://background.zuri.team/">
          Know your coder more by using our background check services
        </a>
        {/* {"Know your coder more by using our background check services"} */}
      </button>

      <button className="btn" id="book__design">
        <a href="https://books.zuri.team/design-rules">
          Join Zuri today and get a Free Book on Design
        </a>
        {/* {"Join Zuri today and get this Free Book on Design"} */}
      </button>

      <a
        href="/contact"
        className="btn"
        id="contact"
        onClick={() => {
          navigate("/contact");
        }}
      >
        Contact me
      </a>
      {/* {"Join Zuri today and get this Free Book on Design"} */}

      <div className="socials">
        <a href="">
          <img className="logo1" src={slack} alt="logo" />
        </a>

        <a href="">
          <img className="logo1" src={github} alt="logo" />
        </a>
      </div>
    </div>
  );
}
