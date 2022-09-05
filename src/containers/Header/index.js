import React from "react";
import Header from "./header";
import PropTypes from "prop-types";

function Layout({ children: Children }) {
  return (
    <>
      <Header />
      {Children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};
export default Layout;
