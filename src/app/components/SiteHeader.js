import React from 'react';

function SiteHeader(props) {
  const { tittle, address } = props;
  return (
    <header className="site-header">
      <h1 className="site__tittle">Site name: {tittle}</h1>
      <h2 className="site__subtittle">Site address: {address}</h2>
    </header>
  );
}

export default SiteHeader;
