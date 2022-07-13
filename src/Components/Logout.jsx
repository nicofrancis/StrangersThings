import React, { useState } from "react";

export default function logout() {
  return <div>logout</div>;
}

// logging out is localstorage.clear, this is a function so youll have to invoke it, set token, comes from app.js and itll needs to be passed thru to logout component.
// after that try to set up messages. stored on current user object
