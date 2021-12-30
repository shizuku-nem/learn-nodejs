class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:id
    show(req, res) {
        res.send('a');
    }
}

const newsController = new NewsController();
export default newsController;
