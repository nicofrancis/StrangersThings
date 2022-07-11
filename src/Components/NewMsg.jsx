import React, { useState } from "react";
import { fetchMessage } from "../api/poster";

export default function NewMsg({ token, postId }) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <form
        onSubmit={async (event) => {
          await postMessage(token, postId, message);
        }}
      >
        <input
          value={message}
          placeholder="Enter message here"
          type="text"
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
