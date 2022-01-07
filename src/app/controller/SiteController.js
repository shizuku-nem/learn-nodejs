import { Course } from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     // courses.forEach
        //     if (!err) {
        //         res.json({courses});
        //         return;
        //     }

        //     res.status(400).json({ error: "message" });
        // });

        // Promise
        Course.find({})
            // .then((courses) => res.json({ courses }))
            .then((courses) => {
                // courses = courses.map((course) => course.toObject());
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

const siteController = new SiteController();
export default siteController;
