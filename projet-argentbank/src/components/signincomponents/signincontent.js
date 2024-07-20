import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchedToken } from "../../services/redux/fetch/fetchedtoken";
import Userpage from "../../pages/userpage";

const Signin = ({ token, fetchedToken, remember }) => {
  const inputName = useRef(null);
  const inputPassword = useRef(null);
  const inputRemember = useRef(null);

  useEffect(() => {
    document.title = "login";
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const request = {
      method: "POST",
      endPoints: "login",
      body: {
        email: inputName.current.value,
        password: inputPassword.current.value,
      },
      remember: inputRemember.current.checked,
    };

    fetchedToken(request);
  };
  if (token) {
    console.log(remember);
    if (remember) {
      console.log("on stock dans le local storage", JSON.stringify(token));
      localStorage.setItem("token", token);
    }
     return <Userpage/>
  }
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="email"
              ref={inputName}
              placeholder="Email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={inputPassword}
              placeholder="Password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" ref={inputRemember}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" className="sign-in-button" value="Sign In" />
        </form>
      </section>
    </main>
  );
};

const mapStateToProps = ({token, remember}) => {
  return {
    token,
    remember
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedToken: (...args) => dispatch(fetchedToken(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin)