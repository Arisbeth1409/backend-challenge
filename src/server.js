const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "Devto API",
  });
});

module.exports = app;
