// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

// TODO:  Add active class to nav links
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

// WHEN I click on a navigation title
// THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted

import { NavLink } from 'react-router-dom';
import signature from '../../assets/images/blackSignature.svg';

export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <img className="navbar-brand" src={signature} alt="Ian Ferguson Signature" style={{ maxHeight: '145px' }}/>
        {/* <h1 className="navbar-brand text-dark">IAN FERGUSON</h1> */}
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainMenu"
        aria-controls="mainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `nav-link text-dark ${isActive ? 'active' : ''}`
              }
              >
                {link.title}
                </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </nav>
  );
}