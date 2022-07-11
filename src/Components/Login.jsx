import React, { useState } from "react";
import { loginUser } from "../api/poster";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <h4>Login:</h4>
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await loginUser(username, password);
          if (result.success) {
            localStorage.setItem("token", result.data.token);
            setToken(result.data.token);
            setPassword("");
            setUsername("");
          } else {
            const errorMessage = result.error.message;
            setErrorMessage(errorMessage);
          }
        }}
      >
        <input
          value={username}
          placeholder="username"
          type="username"
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
