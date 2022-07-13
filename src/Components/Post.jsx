import React from "react";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import { useNavigate } from "react-router-dom";

export default function Post({ token, post, currentUser, posts, setPosts }) {
  console.log();
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(`posts/${post.id}`);
        }}
      >
        <h2>{post.title}</h2>
        <p>Location: {post.location}</p>
        <p>Price: {post.price}</p>
        <p>Description: {post.description}</p>
      </div>
      <div>
        {currentUser._id === post.author._id ? (
          <div>
            <EditPost
              post={post}
              token={token}
              posts={posts}
              setPosts={setPosts}
            />
            <DeletePost
              post={post}
              token={token}
              posts={posts}
              setPosts={setPosts}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
