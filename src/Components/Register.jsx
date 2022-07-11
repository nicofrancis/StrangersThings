import React, { useState } from "react";
import { registerUser } from "../api/poster";
import useAuth from "../hooks/useAuth";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await registerUser(username, password);
    localStorage.setItem("setToken", result.data.token);
    setToken(result.data.token);
    setPassword("");
    setUsername("");
  }

  return (
    <div>
      <h4>Create Account:</h4>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await registerUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
