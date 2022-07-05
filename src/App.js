import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [Posts, setPosts] = useState();
  const [login, setLogin] = useState();
  const [logout, setLogout] = useState();
  const [searchbar, setSearchbar] = useState();
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
