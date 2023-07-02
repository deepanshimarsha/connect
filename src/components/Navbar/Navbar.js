import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAuthContext } from "../../context/authContext";
import { useSearchContext } from "../../context/searchContext";
import { useNavContext } from "../../context/navContext";
import CreateModalForm from "../CreateModalForm.js/CreateModalForm";
import { useUserContext } from "../../context/userContext";

export default function Navbar() {
  const { logoutHandler, authDispatch } = useAuthContext();
  const { navState, setClickedIconAndHeading } = useNavContext();
  const { searchDispatch } = useSearchContext();
  const { userState } = useUserContext();
  return (
    <div className="d-flex flex-column flex-shrink-0 bg-light side-navbar">
      <NavLink
        to="/"
        className="d-block p-3 link-dark text-decoration-none brand-link"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <div className="brand">
          <span className="brand-logo">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/glyph-neue/64/share-2--v1.png"
              alt="share-2--v1"
            />
          </span>{" "}
          <span className="brand-name">Connect</span>
        </div>
      </NavLink>
      <ul className="nav  nav-flush flex-column mb-auto text-center nav-links">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link py-3 border-bottom"
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
            onClick={() => {
              setClickedIconAndHeading("home");
              searchDispatch({ type: "DO_NOT_SHOW_SEARCH_BAR" });
            }}
          >
            <div className="nav-icon">
              <svg
                aria-label="Home"
                class="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                  fill={navState.home ? "black" : "none"}
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div className="nav-item-heading">Home</div>
            {/* </svg> */}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
            onClick={() => {
              setClickedIconAndHeading("search");
              searchDispatch({ type: "TOGGLE_SHOW_SEARCH_BAR" });
            }}
          >
            <div className="nav-icon">
              <svg
                aria-label="Search"
                class="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={navState.search ? "4" : "2"}
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={navState.search ? "4" : "2"}
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
            </div>
            <div className="nav-item-heading">Search</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <CreateModalForm />
          {/* <NavLink
            // to="/create"
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Orders"
            onClick={() => setClickedIconAndHeading("create")}
          >
            <div className="nav-icon">
              <svg
                aria-label="New post"
                class="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={navState.create ? "3" : "2"}
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={navState.create ? "3" : "2"}
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={navState.create ? "3" : "2"}
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
            </div>
            <div className="nav-item-heading">Create</div>
          </NavLink> */}
        </li>
        <li className="nav-item">
          <NavLink
            to="/explore"
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
            onClick={() => {
              setClickedIconAndHeading("explore");
              searchDispatch({ type: "DO_NOT_SHOW_SEARCH_BAR" });
            }}
          >
            <div className="nav-icon">
              <svg
                aria-label="Explore"
                class="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill={navState.explore ? "black" : "none"}
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
                <polygon
                  fill-rule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                ></polygon>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={navState.explore ? "3" : "2"}
                ></circle>
              </svg>
            </div>
            <div className="nav-item-heading">Explore</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/profile"
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
            onClick={() => {
              setClickedIconAndHeading("profile");
              searchDispatch({ type: "DO_NOT_SHOW_SEARCH_BAR" });
            }}
          >
            <div className="nav-icon">
              <img
                src={
                  userState.currentUser
                    ? userState.currentUser.img
                    : userState.newUser.img
                }
                alt="mdo"
                width={navState.profile ? "26" : "24"}
                height={navState.profile ? "36" : "24"}
                className="rounded-circle"
                style={{
                  border: navState.profile ? "black solid 3px" : "",
                  borderRadius: navState.profile ? "50%" : "",
                }}
              />
            </div>
            <div className="nav-item-heading">Profile</div>
          </NavLink>
        </li>
      </ul>
      <div className="dropdown border-top nav-item">
        <NavLink
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"
          id="dropdownUser3"
          aria-expanded="false"
          onClick={() => {
            logoutHandler();
            authDispatch({ type: "SET_LOGIN_CRED", case: "LOGOUT" });
          }}
        >
          <div className="nav-icon">
            <i class="fa fa-sign-out" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="nav-item-heading">Logout</div>
        </NavLink>

        {/* <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <a className="dropdown-item" href="/mockman">
              Settings
            </a>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <NavLink
              className="dropdown-item"
              to="/login"
              onClick={() => {
                logoutHandler();
                authDispatch({ type: "SET_LOGIN_CRED", case: "LOGOUT" });
              }}
            >
              Log out
            </NavLink>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
