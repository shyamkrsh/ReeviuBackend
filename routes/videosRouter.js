import express from 'express';
import { getAllVideos, uploadVideo, getTrendingVideos, getOneVideos } from '../controllers/videosController.js';

const router = express.Router();

router.get("/all", getAllVideos);
router.post("/upload", uploadVideo);
router.post("/trending", getTrendingVideos);
router.get("/getOne/:videoId", getOneVideos);

export default router;
