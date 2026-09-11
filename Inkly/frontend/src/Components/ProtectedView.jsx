import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const login = JSON.parse(localStorage.getItem("user"));

  if (login) {
    return children;
  }

  return <Navigate to="/" />;
}

export default ProtectedRoute;
