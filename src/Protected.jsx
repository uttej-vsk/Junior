import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const token = localStorage.getItem("ReqRestoken");

  if (!token) {
    return <Navigate to='/' replace />;
  }
  return children;
}

export default Protected;
