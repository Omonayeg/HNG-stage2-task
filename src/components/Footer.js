import logo from "../photos/I4G.png";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <img
          className="logo1"
          src="https://zuri.team/img/zuri-logo-full.svg"
          alt="logo"
        />
        <p>HNG Internship 9 Frontend Task</p>
        <img className="logo2" src={logo} alt="logo" />
      </div>
    </div>
  );
}
