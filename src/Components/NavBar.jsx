import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ currentOwner }) {
  return (
    <div>
      <h1>Strangers Things</h1>
      <nav>
        <Link to="/Login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}
