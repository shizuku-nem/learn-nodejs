import express from "express";
import newsController from "../app/controller/NewsController.js";
const newsRouter = express.Router();

newsRouter.use("/:id", newsController.show);
newsRouter.use("/", newsController.index);

export default newsRouter;
