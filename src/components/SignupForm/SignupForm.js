import "./signup-form.css";
import { useAuthContext } from "../../context/authContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function SignupForm() {
  const { authState, authDispatch, signupHandler } = useAuthContext();

  const [error, setError] = useState();
  const [showPass, toggleShowPass] = useState(false);

  function validateForm(e) {
    // Check if the First Name is an Empty string or not.
    e.preventDefault();

    const fullName = authState.signupCred.fullName;
    const email = authState.signupCred.email;
    const password = authState.signupCred.password;
    const username = authState.signupCred.username;

    if (!email) {
      setError("Email Address can not be empty");
      return;
    }
    if (!fullName) {
      setError("Fullname can not be empty!");
      return;
    }
    if (!username) {
      setError("Username can not be empty!");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must contain greater than or equal to 8 characters.");
      return;
    }

    let countUpperCase = 0;

    let countLowerCase = 0;

    let countDigit = 0;

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
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++;
      } else {
        if (password[i] === password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++;
        }
        if (password[i] === password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++;
        }
      }
    }

    if (countLowerCase === 0) {
      // invalid form, 0 lowercase characters
      setError("Invalid Form, 0 lower case characters in password");
      return;
    }

    if (countUpperCase === 0) {
      // invalid form, 0 upper case characters
      setError("Invalid Form, 0 upper case characters in password");
      return;
    }

    if (countDigit === 0) {
      // invalid form, 0 digit characters
      setError("Invalid Form, 0 digit characters in password");
      return;
    }

    if (countSpecialCharacters === 0) {
      // invalid form, 0 special characters characters
      setError("Invalid Form, 0 special characters in password");
      return;
    }

    // if all the conditions are valid, this means that the form is valid

    setError("");
    console.log("...");
    signupHandler();
  }

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
                  <div class="card-body p-4 p-lg-5 text-black formContainer">
                    <form className="signupForm">
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
                            error || authState.signupError ? "red" : "black",
                          fontSize:
                            error || authState.signupError ? "16px" : "20px",
                          fontWeight:
                            error || authState.signupError ? "400" : "500",
                        }}
                      >
                        {!authState.signupError
                          ? error
                            ? error
                            : "Sign up to see photos and videos from your friends"
                          : authState.signupError}
                      </h5>
                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => {
                            authDispatch({
                              type: "SET_SIGNUP_CRED",
                              field: "EMAIL",
                              data: e.target.value,
                            });
                          }}
                          autoComplete="off"
                          type="email"
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example27">
                          Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => {
                            authDispatch({
                              type: "SET_SIGNUP_CRED",
                              field: "FULL_NAME",
                              data: e.target.value,
                            });
                          }}
                          autoComplete="off"
                          type="text"
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example27">
                          Fullname
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => {
                            authDispatch({
                              type: "SET_SIGNUP_CRED",
                              field: "USERNAME",
                              data: e.target.value,
                            });
                          }}
                          autoComplete="off"
                          type="text"
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example27">
                          Username
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => {
                            authDispatch({
                              type: "SET_SIGNUP_CRED",
                              field: "PASSWORD",
                              data: e.target.value,
                            });
                          }}
                          autoComplete="off"
                          type={showPass ? "text" : "password"}
                          id="form2Example17"
                          class="form-control form-control-lg"
                        />
                        <label
                          class="form-label label-pass"
                          for="form2Example17"
                        >
                          <span
                            className="eye-icon2"
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
                          onClick={(e) => validateForm(e)}
                          class="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Sign up
                        </button>
                      </div>

                      <p
                        class="mb-5 pb-lg-2 signupFooter"
                        style={{ color: "#393f81" }}
                      >
                        Already have an account?{" "}
                        <NavLink style={{ color: "#393f81" }} to="/login">
                          {" "}
                          Login here
                        </NavLink>
                      </p>
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
