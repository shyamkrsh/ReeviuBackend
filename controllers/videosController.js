import Video from "../models/Video.js"

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
        res.status(500).json({
            message: err.message || err,
            data: [],
            success: false,
            error: true,
        })
    }
}

export const uploadVideo = async (req, res) => {
    console.log("Upload - ", req.body);
}