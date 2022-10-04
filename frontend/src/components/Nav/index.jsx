import "./style.css";
import logo from "../../img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/authSlice";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.user);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {user ? (
        <div className="main-nav-logged">
          <Link to="/user" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
            {profile.firstName}
          </Link>
          <div className="main-nav-item" onClick={onLogout}>
            Sign Out
          </div>
        </div>
      ) : (
        <div>
          <Link to="/signin" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
