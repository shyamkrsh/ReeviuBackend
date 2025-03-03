import express from 'express'
import mongoose from 'mongoose';

import printHello from './db.js'

const app = express();
const PORT = process.env.PORT || 8080;


printHello();




app.listen(PORT, () => {
    console.log(`App is listening to the port : ${PORT}`)
})