import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 0 24 24"
          width="32"
          fill="white"
          style={{ marginRight: "10px" }}
        >
          <path d="M18 2H6a2 2 0 0 0-2 2v16l7-3 7 3V4a2 2 0 0 0-2-2z" />
        </svg>
        <span>SimpleBlog</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/articles">Tous les blogs</Link></li>
        <li>
          <Link to="/publish" className="btn-publish">
            Publier un article
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
