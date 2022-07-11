import React from "react";
import { deletePost } from "../api/poster";

export default function DeletePost({ token, posts, setPosts, postId }) {
  return (
    <div>
      <button
        onClick={async (event) => {
          event.preventDefault();
          const result = await deletePost(token, postId);
          if (result.success) {
            const filteredPosts = posts.filter((post) => {
              return post._id !== postId;
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
