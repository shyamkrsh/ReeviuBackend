import express from 'express';
import { getAllVideos, uploadVideo } from '../controllers/videosController.js';

const router = express.Router();

router.post("/upload", uploadVideo);
router.get("/all", getAllVideos);

export default router;
