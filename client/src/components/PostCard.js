import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";

const PostCard = ({ post }) => {
  const { setSinglePost, getPostById } = useContext(PostContext);

  let navigate = useNavigate();

  const showSinglePost = async (pPostId) => {
    const post = await getPostById(pPostId);
    setSinglePost(post);
    navigate(`/post/${pPostId}`);
  };

  let date = new Date(post?.createdAt);

  return (
    <div class="card m-3 col-5">
      <div class="card-header">posted on {date.toDateString()}</div>
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <button
          className="btn btn-primary"
          onClick={() => showSinglePost(post.id)}
        >
          See The Post
        </button>
      </div>
    </div>
  );
};

export default PostCard;
