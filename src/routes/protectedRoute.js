import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import Layout from "../containers/Header";

const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return <Layout>{children}</Layout>;
};
ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

export default ProtectedRoute;
