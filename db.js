import mongoose from "mongoose";

const connectToDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/reeviu').then(() => {
        console.log('Connected to DB');
    }).catch((err) => {
        console.log(err);
    })
}
export default connectToDB