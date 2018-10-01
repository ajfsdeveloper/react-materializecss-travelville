import React from 'react'
import NavbarItems from './NavbarItems'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">
                React Materialize Travelville
              </a>
              <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <NavbarItems />
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-nav">
        <NavbarItems />
      </ul>
    </React.Fragment>
  )
}

export default Navbar
