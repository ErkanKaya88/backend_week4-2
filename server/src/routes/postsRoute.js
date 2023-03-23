import express from "express";
import {
  getPostList,
  getPostById,
  addPost,
} from "../repositories/postsRepository.js";
const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getPostList());
});

router.get("/:id", async (req, res) => {
  res.json(await getPostById(req.params.id));
});

router.post("/", async (req, res) => {
  await addPost(req.body);
  res.send(req.body);
});



export default router;
