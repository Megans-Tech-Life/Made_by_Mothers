import { Navigate } from "react-router-dom";

const isLoggedIn = false; // Temporarily set to false for testing

const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
