import express from 'express';
import courseController from '../app/controller/CourseController.js';
const coursesRouter = express.Router();

coursesRouter.get('/create', courseController.create);
coursesRouter.post('/store', courseController.store);
coursesRouter.get('/:slug', courseController.show);

export default coursesRouter;
