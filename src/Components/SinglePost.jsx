import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Posts } from ".";
import { fetchPostById } from "../api/poster";

export default function SinglePost({}) {
  const params = useParams();
  const [listing, setListing] = useState({});
  const postFilter = Posts.filter();

  useEffect(() => {
    async function getPostById() {
      //instead of this next line, take post list and filter through it. Maybe then move to PostCard.
      const result = await fetchPostById(params.id);
      // console.log("result", result);
      setListing(result);
    }
    getPostById();
  }, []);

  return;
  <div>
    <h4>{listing.title}</h4>
    <h5>Location: {listing.location}</h5>
    <h5>Price: {listing.price}</h5>
    <h5>Description: {listing.description}</h5>
  </div>;
}

// next look into being able to delete and edit posts. You only want to delete or edit posts that you made, there will be some logic for that.
