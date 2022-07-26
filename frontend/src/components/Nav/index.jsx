import "./style.css";
import logo from "../../img/argentBankLogo.png";

function Nav() {
  return (
    <nav>
      <div className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
    </nav>
  );
}

export default Nav;
