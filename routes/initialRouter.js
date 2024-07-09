import express from "express";
import expressAsyncHandler from "express-async-handler";
import Apps from "../models/appModel.js";
import Websites from "../models/websitesModel.js";

const allDataRouter = express.Router();

allDataRouter.post("/",
  expressAsyncHandler(async (req, res) => {
    const apps = await Apps.find({}).sort({_id:-1});
    const websites = await Websites.find({});
    res.status(200).json({
        apps,
        websites,
    });
  })
);

export default allDataRouter;
