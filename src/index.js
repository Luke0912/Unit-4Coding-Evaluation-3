const express = require("express");

const { register, login,newToken } = require("./controllers/auth.controller");

const userController = require("./controllers/user.controller");

const bookController = require("./controllers/book.controller");

const commentController = require("./controllers/comment.controller");

const publicationController = require("./controllers/publication.controller");

const app = express();

app.use(express.json());


app.post("/register", register);

app.post("/login", login);

app.use("/createProfile", userController);

app.use("/book", bookController);

app.use("/comment", commentController);

app.use("/publication", publicationController);

module.exports = app;
