import express from "express";
import "./config/mongoConnect.js";
import appsRouter from "./routes/appRouter.js";
import allDataRouter from "./routes/initialRouter.js";
import websiteRouter from "./routes/websitesRouter.js";

const app = express();

// APP ROUTER
app.use("/api/apps", appsRouter);

// WEBSITE ROUTER
app.use("/api/websites", websiteRouter);

app.use("/api/", allDataRouter);

//MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.get('/', (req, res) =>{
    res.send("Server is Ready Milla")
})

app.listen("https://portfoliobackend-fchc.onrender.com",()=>{
    console.log("Server at https://portfoliobackend-fchc.onrender.com");
})