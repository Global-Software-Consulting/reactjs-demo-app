import PropTypes from "prop-types";

const PublicRoutes = ({ children }) => {
  return children;
};
PublicRoutes.propTypes = {
  children: PropTypes.any,
};
export default PublicRoutes;
