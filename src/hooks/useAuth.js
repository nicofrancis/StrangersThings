import { useEffect, useState } from "react";
import { fetchMe } from "../api/poster";

const useAuth = () => {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      // console.log("result from fetch me", result);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  return {
    currentUser,
    setCurrentUser,
    token,
    setToken,
  };
};

export default useAuth;
