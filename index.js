const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/getbyid/:userid", db.getUsersById);
app.post("/createuser", db.createUser);
app.put("/users/update/:userid", db.updateUser);
app.delete("/users/delete/:userid", db.deleteUser);
app.get("/pictures", db.getPictures);
app.post("/pictures/create", db.createPicture);
app.get("/articles", db.getArticles);
app.get("/articles/:articleid", db.getArticleById);
app.get("/login", db.logIn);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get("/express_backend", (request, response) => {
  response.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
