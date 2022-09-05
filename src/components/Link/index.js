import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Links = ({ value, nav, style }) => {
  return (
    <Link style={style} to={nav}>
      {value}
    </Link>
  );
};

export default Links;

Links.propTypes = {
  nav: PropTypes.string,
  value: PropTypes.any,
  style: PropTypes.any,
};
