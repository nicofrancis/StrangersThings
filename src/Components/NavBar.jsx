import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ currentOwner }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/login">Tricks</Link>
    </nav>
  );
}
