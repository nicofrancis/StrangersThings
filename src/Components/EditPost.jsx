import React, { useState } from "react";
import { editPost } from "../api/poster";

export default function EditPost({ token, post, posts, setPosts }) {
  const [title, setTitle] = useState(post.title);
  const [price, setPrice] = useState(post.price);
  const [location, setLocation] = useState(post.location);
  const [description, setDescription] = useState(post.description);

  const id = post._id;

  return (
    <div className="editpost">
      <form
        className="editform"
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await editPost(token, {
            id,
            title,
            price,
            location,
            description,
          });
          console.log(result);
          const newPostList = posts.map((item) => {
            if (item._id === post._id) {
              return result.data.post;
            } else return item;
          });
          setPosts(newPostList);
          return result;
        }}
      >
        <input
          value={title}
          placeholder="Title:"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          value={price}
          placeholder="Price:"
          type="text"
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          value={location}
          placeholder="Location:"
          type="text"
          onChange={(event) => setLocation(event.target.value)}
        />
        <input
          value={description}
          placeholder="Description:"
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Edit Post</button>
      </form>
    </div>
  );
}
