import express from "express";
import expressAsyncHandler from "express-async-handler";
import Websites from "../models/websitesModel.js";
import WebsiteData from "../data/WebsiteData.js";

const websiteRouter = express.Router();

websiteRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createwebsites = await Websites.insertMany(WebsiteData.websites);
    res.send({ createwebsites });
  })
);

// websiteRouter.get(
//     "/",
//     expressAsyncHandler(async (req, res) => {
//       const websites = await Websites.find({});
//       res.send(websites);
//     })
//   );
  

websiteRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const websites = await Websites.findById(req.params.id);
    if (websites) {
      res.send(websites);
    } else {
      res.status(404).send({ message: "Website not Found" });
    }
  })
);

export default websiteRouter;
