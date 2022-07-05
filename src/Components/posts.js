import React, { useState } from "react";

const fetchAllPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"
  );
  const result = await response.json();
  return result;
};

export default fetchAllPosts;
