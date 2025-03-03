import express from 'express'
import Video from './models/Video.js';
import videos from './data.js';
import connectToDB from './db.js'
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';

import videosRouter from './routes/videosRouter.js';
import userRouter from './routes/userRouter.js'

const app = express();
const PORT = process.env.PORT || 8080;
connectToDB();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();


app.use("/api/user", userRouter);
app.use('/api/videos', videosRouter);

app.get("/upload-videos", async (req, res) => {
    for (let i = 0; i < videos.length; i++) {
        let video = new Video(videos[i]);
        await video.save().then((res) => {
            console.log("Uploaded...");
        }).catch((err) => {
            console.log(err);
        })
    }
    res.send("Data has been uploaded!");
})


app.listen(PORT, () => {
    console.log(`App is listening to the port : ${PORT}`)
})