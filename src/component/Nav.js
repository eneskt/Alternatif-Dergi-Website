import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h2>Alternatif Dergi</h2>
      </Link>
      <ul className="nav-links">
        <Link to="/nedir">
          <li>Nedir ?</li>
        </Link>
        <Link to="/sayilar">
          <li>Tüm Sayılar</li>
        </Link>
        <Link to={{pathname:"http://gonder.alternatifdergi.com/"}} target="_blank">
          <li>Yazı Gönder</li>
        </Link>
        <Link to="/sss">
          <li>SSS</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
