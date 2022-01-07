import { Course } from '../models/Course.js';

class NewsController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // req.params.<name> -> value of variable param on url,
        // defined name in route
        // in here :slug -> req.params.slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.json(course);
                console.log(
                    '🚀 ~ file: CourseController.js ~ line 12 ~ NewsController ~ .then ~ course',
                    course,
                );
            })
            .catch(next);
        console.log('req.params.slug:', req.params.slug);
    }

    // [GET] /courses/create
    create(req, res, next) {}

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        console.log('req.body:', req.body);
        formData.image = `https://cdn.fullstack.edu.vn/f8-production/courses/2.png`;
        console.log('formData:', formData);
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => console.log(err));

        // res.json(req.body)
    }
}

const courseController = new NewsController();
export default courseController;
