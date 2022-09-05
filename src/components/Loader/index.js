import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <CircularProgress
      style={{ color: "#fff", height: "20px", width: "20px" }}
    />
  );
};

export default Loader;
