import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

export default function RequiresAuth({ children }) {
  const { authState } = useAuthContext();
  const location = useLocation();

  return authState.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
