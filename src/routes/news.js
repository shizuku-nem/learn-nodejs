import express from 'express';
import newsController from '../app/controller/NewsController.js';
const newsRouter = express.Router();

newsRouter.get('/:id', newsController.show);
newsRouter.get('/', newsController.index);

export default newsRouter;
