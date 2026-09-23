import React from "react";
// const postPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };
//! data fetch wey
const getPost = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("data fetch lode failed");
    }
    return res.json();
  } catch (error) {
    throw new Error("data lode failed");
  }
};
export default async function PostPage() {
  //   const post = await postPromise();
  //!data fetch wey
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const post = await res.json();
  //!
  const post = await getPost();

  return <div>Post : {post.length}</div>;
}
