// import React, { useState } from "react";
// import { editPost } from "../api/poster";

// export default function EditPost({ token, postList, setPostList, post }) {
//   const [title, setTitle] = useState(post.title);
//   const [price, setPrice] = useState(post.price);
//   const [location, setLocation] = useState(post.location);
//   const [description, setDescription] = useState(post.description);

//   const id = post._id;

//   return (
//     <div>
//       <form
//         onSubmit={async (event) => {
//           event.preventDefault();
//           const result = await editPost(token, {
//             id,
//             title,
//             price,
//             location,
//             description,
//           });
//           return result;
//         }}
//       >
//         <input
//           value={title}
//           placeholder="Title:"
//           type="text"
//           onChange={(event) => setTitle(event.target.value)}
//         />
//         <input
//           value={price}
//           placeholder="Price:"
//           type="text"
//           onChange={(event) => setPrice(event.target.value)}
//         />
//         <input
//           value={location}
//           placeholder="Location:"
//           type="text"
//           onChange={(event) => setLocation(event.target.value)}
//         />
//         <input
//           value={description}
//           placeholder="Description:"
//           type="text"
//           onChange={(event) => setDescription(event.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
