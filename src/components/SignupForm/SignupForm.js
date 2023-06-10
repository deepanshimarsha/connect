import "./signup-form.css";
export default function SignupForm() {
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
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17">
                          Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
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
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example27">
                          Password
                        </label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button
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
                        <a href="#!" style={{ color: "#393f81" }}>
                          Login here
                        </a>
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
