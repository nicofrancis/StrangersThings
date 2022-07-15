import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/poster";
// import DeletePost from "./DeletePost";
// import NewMsg from "./NewMsg";
import useAuth from "../hooks/useAuth";
import Post from "./Post";
// import "";

export default function Posts({ token, posts, currentUser, setPosts }) {
  // const [posts, setPosts] = useState([]);
  // const { token, setToken, currentUser, setCurrentUser } = useAuth();

  // const renderPost = posts.map((post, index) => {
  //   return (
  //     <div>
  //       <div>
  //         <Post key={`Key: ${index}`} post={post} />
  //       </div>
  //     </div>
  //   );
  // });
  console.log(posts);
  if (posts.length > 0) {
    return (
      <div className="app">
        <h1>Community Posts</h1>
        {posts.map((post, index) => {
          return (
            <div key={`Key: ${index}`}>
              <div>
                <Post
                  post={post}
                  token={token}
                  currentUser={currentUser}
                  posts={posts}
                  setPosts={setPosts}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No posts!!</div>;
  }
}
