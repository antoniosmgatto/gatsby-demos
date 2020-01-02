import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { title } = props;
  return <h1>{ title }</h1>
}

Header.propsTypes = {
  title: PropTypes.string.isRequired
}

export default Header;