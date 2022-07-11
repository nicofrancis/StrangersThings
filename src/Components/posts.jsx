import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/poster";
import DeletePost from "./DeletePost";
import NewMsg from "./NewMsg";
import useAuth from "../hooks/useAuth";
import Post from "./Post";

export default function Posts({ postId }) {
  const [posts, setPosts] = useState([]);
  const { token, setToken, currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const GetPosts = async () => {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    };
    GetPosts();
  }, []);
  {
    const renderPost = posts.map((post, index) => {
      return (
        <div>
          <div>
            <Post key={`Key: ${index}`} post={post} />
          </div>
        </div>
      );
    });
    return <div>{renderPost}</div>;
  }
}
