import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/necklaces">Necklaces</Link>
      <Link to="/bracelets">Bracelets</Link>
      <Link to="/rings">Rings</Link>
      <Link to="/Belts">Belts</Link>
      <Link to="/earring">Earring</Link>
      <Link to="/engagement">Engagement</Link>
      <Link to="/watches">Watches</Link>
      <Link to="/compare">Compare</Link>
      <Link to="/other">other</Link>
    </nav>
  );
}

export default Navbar;
