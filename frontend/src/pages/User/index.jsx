import "./style.css";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getProfile, editProfile } from "../../features/userSlice";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.user);

  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getProfile());
  });

  const openForm = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const closeForm = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      dispatch(editProfile({ firstName, lastName }));
      setFirstName("");
      setLastName("");
      setIsEdit(false);
    } else {
      toast.error("Enter valid first and last name to update your profile");
    }
  };

  return (
    <div>
      <Nav />
      <main className="main bg-dark">
        <div className="header">
          {isEdit ? (
            <>
              <h1>Welcome back</h1>

              <form onSubmit={submitForm}>
                <div>
                  <input
                    className="form-inputs"
                    id="firstName"
                    type="text"
                    placeholder={profile.firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.currentTarget.value)}
                  ></input>
                  <input
                    className="form-inputs"
                    id="lastName"
                    type="text"
                    placeholder={profile.lastName}
                    value={lastName}
                    onChange={(e) => setLastName(e.currentTarget.value)}
                  ></input>
                </div>
                <div>
                  <button
                    className="form-inputs-button"
                    id="save"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="form-inputs-button"
                    id="save"
                    onClick={closeForm}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {profile.firstName} {profile.lastName}!
              </h1>
              <button onClick={openForm} className="edit-button">
                Edit Name
              </button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default User;
