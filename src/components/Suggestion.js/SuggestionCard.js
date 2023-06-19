import { NavLink } from "react-router-dom";
import "./suggestion-card.css";
export default function SuggestionCard() {
  return (
    <div className="suggestion-card">
      <div className="suggested-user">
        <div className="profile-img">
          <NavLink
            className="user-link"
            style={{ height: "44px", width: "44px" }}
          >
            <img src="https://github.com/mdo.png" />
          </NavLink>
        </div>
        <div className="profile-name">
          <div className="profile-content">
            <span className="name">Deepanshi Sharma</span>
            <span className="username">deepee_e</span>
          </div>
        </div>
        <div className="action-btn">
          <button type="button">
            <span className="action">Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
}
