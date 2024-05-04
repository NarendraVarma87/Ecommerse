import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Shop US</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link active" aria-current="page" >Login</Link>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More Links
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/support" className="dropdown-item">24x7 Customer Care Support</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link to="/filter" className="dropdown-item" href="#">Filter Items By Category</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link to="/" className="dropdown-item" href="#">Others</Link></li>
                </ul>
              </li>
            </ul>
            <Search/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
