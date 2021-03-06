import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container-lg">
          <div className="logo">
            <Link to="/" data-reactid="7"><img src="data:image/png;base64,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" alt="Homelike logo" /></Link>
          </div>
          <div className="nav">
            <div><Link to="/" >Home</Link></div>
            <div><Link to="/locations" >Locations</Link></div>
            <div><Link to="/search" >Search</Link></div>
          </div>
      </div>
    </div>
  )
}

export default Header;