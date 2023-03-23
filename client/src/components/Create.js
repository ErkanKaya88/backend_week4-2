import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import { PostContext } from "../contexts/PostContext";
import Swal from "sweetalert2";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { handleClickAdd } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickAdd({
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
    Swal.fire("Good job!", "Your post is live now!", "success");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h3 className="fw-bold text-white">Create New Post</h3>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                value={title}
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="form-control mb-3"
                placeholder="content"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                rows="3"
              />
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
