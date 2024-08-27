// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted

import { NavLink } from 'react-router-dom';

export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1 className="navbar-brand text-light">IAN FERGUSON</h1>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `nav-link text-light ${isActive ? 'active' : ''}`
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