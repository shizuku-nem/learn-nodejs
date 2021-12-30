import express from "express";
import { engine } from "express-handlebars";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import morgan from "morgan";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.use(morgan("combined"));

// when url get statis file (.png,...) then go to following folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
