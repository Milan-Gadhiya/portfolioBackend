import mongoose from "mongoose";
import { MONGO_URL } from "../url/mongodburl.js";

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("error", err => {
    console.log("Error", err);
});

mongoose.connection.on("connected", () => {
    console.log("mongoose is connected");
});
