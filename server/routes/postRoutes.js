import express from "express";
import PostController from "../controller/PostController.js";
const router = express.Router();

router.route("/").get(PostController.getPostsByCategory);

export default router;
