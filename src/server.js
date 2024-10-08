const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRoutes = require("./routes/users.routes");
const postsRoutes = require("./routes/posts.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "Devto API",
  });
});

module.exports = app;
