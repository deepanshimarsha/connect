import "./login-form.css";
import { useAuthContext } from "../../context/authContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePostContext } from "../../context/postContext";

export default function LoginForm() {
  const { authState, authDispatch, loginHandler } = useAuthContext();
  const { getUserFeed } = usePostContext();
  const [error, setError] = useState();
  const [showPass, toggleShowPass] = useState(false);

  function validateForm(e) {
    e.preventDefault();
    const password = authState.loginCred.password;
    const username = authState.loginCred.username;
    if (!username) {
      setError("Username can not be empty!");
      return;
    }
    if (!password || password.length < 8) {
      setError("Password must contain greater than or equal to 8 characters!");
      return;
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0;
    // variable to count lowercase characters in the password.
    let countLowerCase = 0;
    // variable to count digit characters in the password.
    let countDigit = 0;
    // variable to count special characters in the password.
    let countSpecialCharacters = 0;

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.includes(password[i])) {
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        countDigit++;
      } else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++;
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++;
        }
      }
    }

    if (countLowerCase === 0) {
      setError("Invalid Form, 0 lower case characters in password");
      return;
    }

    if (countUpperCase === 0) {
      setError("Invalid Form, 0 upper case characters in password");
      return;
    }

    if (countDigit === 0) {
      setError("Invalid Form, 0 digit characters in password");
      return;
    }

    if (countSpecialCharacters === 0) {
      setError("Invalid Form, 0 special characters in password");
      return;
    }

    setError("");

    loginHandler();
    getUserFeed();
  }

  const guestModeLogin = () => {
    authDispatch({
      type: "SET_LOGIN_CRED",
      method: "GUEST_MODE",
    });
  };
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    class="img-fluid"
                    style={{ borderRadius: " 1rem 0 0 1rem" }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span className="brand-logo-visible">
                          <img
                            width="40"
                            height="40"
                            src="https://img.icons8.com/glyph-neue/64/share-2--v1.png"
                            alt="share-2--v1"
                          />
                        </span>
                        <span class="brand">Connect</span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{
                          letterSpacing: "1px",
                          color:
                            error || authState.loginError ? "red" : "black",
                          fontSize:
                            error || authState.loginError ? "16px" : "20px",
                          fontWeight:
                            error || authState.loginError ? "400" : "500",
                        }}
                      >
                        {!authState.loginError
                          ? error
                            ? error
                            : "Login to your account"
                          : authState.loginError}
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => {
                            authDispatch({
                              type: "SET_LOGIN_CRED",
                              field: "USERNAME",
                              data: e.target.value,
                            });
                          }}
                          value={authState.loginCred.username}
                          autoComplete="off"
                          type="text"
                          id="form2Example17"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17">
                          Username
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => {
                            authDispatch({
                              type: "SET_LOGIN_CRED",
                              field: "PASSWORD",
                              data: e.target.value,
                            });
                          }}
                          value={authState.loginCred.password}
                          autoComplete="off"
                          type={showPass ? "text" : "password"}
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                        <label
                          class="form-label label-pass"
                          for="form2Example27"
                        >
                          <span
                            className="eye-icon"
                            onClick={() => {
                              toggleShowPass(!showPass);
                            }}
                          >
                            <i
                              class={showPass ? "fa fa-eye" : "fa fa-eye-slash"}
                            ></i>
                          </span>
                          Password
                        </label>
                      </div>

                      <div class="pt-1 mb-4 btn-container">
                        <button
                          onClick={() => guestModeLogin()}
                          class="btn btn-dark btn-lg btn-block"
                          type="button"
                          style={{ marginTop: "0.5rem" }}
                        >
                          Guest mode
                        </button>

                        <button
                          onClick={(e) => validateForm(e)}
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Log in
                        </button>
                      </div>

                      <a class="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p
                        class="mb-5 pb-lg-2 formFooter"
                        style={{ color: "#393f81" }}
                      >
                        Don't have an account?{" "}
                        <NavLink style={{ color: "#0095f6" }} to="/signup">
                          {" "}
                          Register here
                        </NavLink>
                      </p>
                      <a href="#!" class="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" class="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
