import Video from "../models/Video.js"



export const uploadVideo = async (req, res) => {
    try {
        let data = req.body;
        const video = new Video(data);
        await video.save();
        res.status(200).json({
            message: "Video has been uploaded",
            data: video,
            success: true,
            error: false,
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            data: [],
            success: false,
            error: true,
        })
    }
}
export const getAllVideos = async (req, res) => {
    try {
        const allVideos = await Video.find({});
        res.status(200).json({
            message: "Sending data",
            data: allVideos,
            success: false,
            error: true,
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            data: [],
            success: false,
            error: true,
        })
    }
}
export const getTrendingVideos = async (req, res) => {
    try {
        const trendingVideos = await Video.find({})
            .sort({ views: -1, likes: -1, commentsCount: -1 })
            .limit(10);
        res.status(200).json({
            message: "Trending videos retrieved",
            data: trendingVideos,
            success: true,
            error: false,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            data: [],
            success: false,
            error: true,
        })
    }
}
export const getOneVideos = async (req, res) => {
    const { videoId } = req.params;
    try {
        const video = await Video.findById(videoId);
        res.status(200).json({
            message: "Trending videos retrieved",
            data: video,
            success: true,
            error: false,
        });
    } catch (err) {
        res.json({
            message: err.message || "Internal Server Error",
            data: [],
            success: false,
            error: true,
        })
    }
}
