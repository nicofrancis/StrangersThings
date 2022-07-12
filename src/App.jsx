import {
  Login,
  Logout,
  NavBar,
  Posts,
  Profile,
  Register,
  NewMsg,
} from "./components";

import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMe, fetchPosts } from "./api/poster";
import useAuth from "./hooks/useAuth";

export default function App() {
  const [posts, setPosts] = useState([]);
  const { token, setToken, currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const GetPosts = async () => {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    };
    GetPosts();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/Logout" element={<Logout />} />
        <Route
          path="/NewMsg"
          element={
            <NewMsg token={token} currentUser={currentUser} posts={posts} />
          }
        />
        <Route
          path="/Posts"
          element={
            <Posts token={token} currentUser={currentUser} posts={posts} />
          }
        />
        <Route
          path="/Profile"
          element={<Profile token={token} currentUser={currentUser} />}
        />
        <Route path="/Register" element={<Register setToken={setToken} />} />
        <Route
          path="/NewMsg"
          element={<NewMsg posts={posts} currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}
