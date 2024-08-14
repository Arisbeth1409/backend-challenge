const express = require("express");

const usersRoutes = require("./routes/users.routes");

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "Devto API",
  });
});

module.exports = app;
