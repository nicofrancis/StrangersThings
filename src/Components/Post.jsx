import React from "react";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import { useNavigate } from "react-router-dom";

export default function Post({ token, post, currentUser, posts }) {
  console.log();
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(`posts/${posts.id}`);
        }}
      >
        <h2>{posts.title}</h2>
        <p>Location: {posts.location}</p>
        <p>Price: {posts.price}</p>
        <p>Description: {posts.description}</p>
      </div>
      <div>
        <EditPost posts={posts} token={token} />
        <DeletePost posts={posts} token={token} />
      </div>
    </div>
  );
}
