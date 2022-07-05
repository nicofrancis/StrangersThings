const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/";

export const fetchAllPosts = async () => {
  const response = await fetch(
    `${url}/api/posts`
    // "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"
  );
  const result = await response.json();
  return result;
};
