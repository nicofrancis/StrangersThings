import React from "react";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import { useNavigate } from "react-router-dom";

export default function Post({ token, post, currentUser }) {
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
        {/* {check if current user id is = to post author id, then render edit and
        delete.} */}
        <EditPost post={post} token={token} />
        <DeletePost post={post} token={token} />
      </div>
    </div>
  );
}
