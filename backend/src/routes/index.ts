import express from "express";
import { getPosts } from "../controller/post";

export const router = express.Router();

router.post("/api/posts", getPosts);
