import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ currentOwner }) {
  return (
    <div className="main-nav">
      <h1>Strangers Things</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
