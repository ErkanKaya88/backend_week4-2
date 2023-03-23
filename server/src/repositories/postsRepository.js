import Posts from "../models/postsModel.js";

const getPostList = async () => {
  try {
    return await Posts.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (pPostId) => {
  try {
    return await Posts.findByPk(pPostId);
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (pPost) => {
  try {
    return await Posts.create(pPost);
  } catch (error) {
    console.log(error);
  }
};


export { getPostList, getPostById, addPost };
