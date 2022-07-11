import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import PostCard from "./Post";
import { fetchPosts } from "../api/poster";
import { Posts } from ".";
import { NewPost } from ".";
import MakePost from "./NewPost";

const Profile = () => {
  const { token, setToken, currentUser, setCurrentUser } = useAuth();

  return (
    <div>
      <h3>Profile</h3>
      {currentUser?.username ? (
        <h3>Signed in as: {currentUser.username}</h3>
      ) : null}
      <h4>My posts:</h4>
      <div key={`Key: ${currentUser.id}`}>
        <h2>Messages: {currentUser.messages}</h2>
      </div>
      <div>
        <NewPost token={token} currentUser={currentUser} />
      </div>
    </div>
  );
};

// async function handleMsg(event) {
//   event.preventDefault();
//   const result = await registerUser(username, password);
//   localStorage.setItem("token", result.data.token);
//   setToken(result.data.token);
//   setPassword("");
//   setUsername("");
// }

// return (
//   <div>
//     <h4>Register:</h4>
//     <form onSubmit={handleSubmit}>
//       <input
//         value={username}
//         placeholder="username"
//         onChange={(event) => setUsername(e.target.value)}
//       />
//       <input
//         value={password}
//         placeholder="password"
//         type="password"
//         onChange={(event) => setPassword(e.target.value)}
//       />
//       <button type="submit">Submit!</button>
//     </form>
//   </div>
// );
// }

export default Profile;
