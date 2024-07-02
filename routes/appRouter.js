import express from "express";
import Apps from "../models/appModel.js";
import AppsData from "../data/AppData.js";
import expressAsyncHandler from "express-async-handler";

const appsRouter = express.Router();

appsRouter.get("/:id",
expressAsyncHandler(async (req, res) => {
    const app = await Apps.findById(req.params.id);
    if(app){
        res.send(app)
    } else{
        res.status(404).send({message: "App not Found"});
    }
  })
);

export default appsRouter;
