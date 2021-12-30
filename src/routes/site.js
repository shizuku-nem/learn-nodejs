import express from "express";
import siteController from "../app/controller/SiteController.js";
const siteRouter = express.Router();

siteRouter.use("/search", siteController.search);
siteRouter.use("/", siteController.index);

export default siteRouter;
