import React from 'react';
import PropTypes from 'prop-types';

function SiteHeader(props) {
  const { tittle, address } = props;
  return (
    <header className="site-header">
      <h1 className="site__tittle">Site name: {tittle}</h1>
      <h2 className="site__subtittle">Site address: {address}</h2>
    </header>
  );
}

SiteHeader.propTypes = {
  tittle: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default SiteHeader;
