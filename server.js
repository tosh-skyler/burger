const express = require("express");
let PORT;
const app = express();

if (process.env.JAWSDB_URL) {
  PORT = process.env.PORT;
} else {
  PORT = process.env.PORT || 8080;
}

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");

app.use(routes);
app.listen(PORT, function () {
  console.log(`App now listening at localhost: ${PORT}`);
});
