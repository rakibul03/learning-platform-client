import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center space-x-2">
        <div className="h-4 w-4 animate-pulse rounded-full bg-violet-400"></div>
        <div className="h-4 w-4 animate-pulse rounded-full bg-violet-400"></div>
        <div className="h-4 w-4 animate-pulse rounded-full bg-violet-400"></div>
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoutes;
