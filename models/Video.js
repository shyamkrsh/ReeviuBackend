import mongoose from "mongoose";
import { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // Duration in seconds
      required: true,
    },
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    tags: {
      type: [String], // Example: ["tech", "review", "gaming"]
      default: [],
    },
    category: {
      type: String,
      enum: ["Tech", "Gaming", "Education", "Entertainment", "Music", "Other"],
      default: "Other",
    },
    isShort: {
      type: Boolean,
      default: false, // Mark if the video is a short (like YouTube Shorts)
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);
