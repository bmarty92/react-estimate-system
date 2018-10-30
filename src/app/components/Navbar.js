import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ routes }) {
  return (
    <React.Fragment>
      <ul className="app-navbar">
        {routes.map((route, index) => (
          <li className="app-navbar__item" key={index}>
            <Link to={`/${route}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
