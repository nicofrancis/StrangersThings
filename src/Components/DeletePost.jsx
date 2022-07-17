import React from "react";
import { deletePost } from "../api/poster";

export default function DeletePost({ token, post, setPosts, posts }) {
  return (
    <div className="deletepost">
      <button
        onClick={async (event) => {
          event.preventDefault();
          const result = await deletePost(token, post._id);
          if (result.success) {
            const filteredPosts = posts.filter((item) => {
              return post._id !== item._id;
            });
            setPosts(filteredPosts);
          }
        }}
      >
        Delete Post
      </button>
    </div>
  );
}
