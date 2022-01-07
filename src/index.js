import express from 'express';
import { engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import route from './routes/index.js';
import * as db from './config/db/index.js';

db.connect();

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// when url get statis file (.png,...) then go to following folder
app.use(express.static(path.join(__dirname, 'public')));

// middleware handle req form: to use req.body variable
// express had body-parser lib npm
app.use(express.urlencoded({ extended: true }));
// handle req from javascript code such as: fetch, axios
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
