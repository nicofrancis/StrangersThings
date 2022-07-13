const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft";

export const fetchPosts = async (token) => {
  const response = await fetch(`${url}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  return result;
};

export const registerUser = async (username, password) => {
  const response = await fetch(`${url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  return result;
};

export const fetchMe = async (token) => {
  const response = await fetch(`${url}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const deletePost = async (token, postId) => {
  console.log("look here", token, postId);
  const response = await fetch(`${url}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const editPost = async (
  token,
  { title, location, price, description, id }
) => {
  const response = await fetch(`${url}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title,
        location,
        price,
        description,
      },
    }),
  });
  const result = await response.json();
  return result;
};

export const makePost = async (token, postObj) => {
  const response = await fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: postObj,
    }),
  });
  const result = await response.json();
  return result;
};

export const postMessage = async (token, postId, message) => {
  try {
    const response = await fetch(`${url}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: message,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return {
      error: err,
    };
  }
};
