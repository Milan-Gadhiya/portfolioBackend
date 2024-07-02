import express from "express";
import Apps from "../models/appModel.js";
import expressAsyncHandler from "express-async-handler";
//import Websites from "../models/websiteModel.js";

const allDataRouter = express.Router();

allDataRouter.post("/",
  expressAsyncHandler(async (req, res) => {
    const apps = await Apps.find({}).sort({_id:-1});
    //const websites = await Websites.find({}).sort({_id:-1});
    res.status(200).json({
        apps,
        websites,
    });
  })
);

export default allDataRouter;
