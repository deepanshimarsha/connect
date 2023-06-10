import "./navbar.css";

export default function Navbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 bg-light side-navbar">
      <a
        href="/"
        className="d-block p-3 link-dark text-decoration-none brand-link"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <div className="brand">
          <span className="brand-logo">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/glyph-neue/64/share-2--v1.png"
              alt="share-2--v1"
            />
          </span>{" "}
          <span className="brand-name">Connect</span>
        </div>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center nav-links">
        <li className="nav-item">
          <a
            href="/"
            className="nav-link py-3 border-bottom"
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
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
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div className="nav-item-heading">Home</div>
            {/* </svg> */}
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
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
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
            </div>
            <div className="nav-item-heading">Search</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Orders"
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
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                  stroke-width="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
            </div>
            <div className="nav-item-heading">Create</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
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
                  fill="none"
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
                  stroke-width="2"
                ></circle>
              </svg>
            </div>
            <div className="nav-item-heading">Explore</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link py-3 border-bottom"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <div className="nav-icon">
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="24"
                height="24"
                className="rounded-circle"
              />
            </div>
            <div className="nav-item-heading">Profile</div>
          </a>
        </li>
      </ul>
      <div className="dropdown border-top nav-item">
        <a
          href="/"
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="nav-icon">
            <svg
              aria-label="Settings"
              class="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="4"
                y2="4"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="12"
                y2="12"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="20"
                y2="20"
              ></line>
            </svg>
          </div>
          <div className="nav-item-heading">More</div>
        </a>

        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <a className="dropdown-item" href="/">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
