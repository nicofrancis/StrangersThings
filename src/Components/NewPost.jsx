import React, { useState } from "react";
import { makePost } from "../api/poster";
import useAuth from "../hooks/useAuth";

export default function NewPost({}) {
  const { token, currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      {
        (currentUser.token = token ? (
          <>
            <h2>Create New Listing</h2>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                const result = await makePost(token, {
                  title,
                  price,
                  location,
                  description,
                });
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
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <p>Please log in to make a new post</p>
        ))
      }
    </div>
  );
}
