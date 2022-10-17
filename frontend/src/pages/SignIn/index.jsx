import "./style.css";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/authSlice";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const { email, password, rememberMe } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/user");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  const onChange = (e) => {
    if (e.target.name === "rememberMe") {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      rememberMe,
    };
    dispatch(login(userData));
  };

  return (
    <div>
      <Nav />
      <main className="main main-sign-in bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                value={rememberMe}
                onChange={onChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
