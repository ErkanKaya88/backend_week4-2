import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import Navbar from "./Navbar";

const SinglePost = () => {
  const { singlePost } = useContext(PostContext);

  let date = new Date(singlePost?.createdAt);

  return (
    <>
      <Navbar />
      <div className="container text-white">
        <div className="title d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1 fw-bold">{singlePost?.title}</h1>
          <p>posted on {date.toDateString()}</p>
        </div>
        <div className="content text-center">
          <p>{singlePost?.content}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
