const express = require("express");

const UsersUsecases = require("../usecases/users.usecases");

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const data = request.body;
    const user = await UsersUsecases.signUp(data);

    response.json({
      success: true,
      message: "Thank you for your registration",
      data: { user },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/auth/login", async (request, response) => {
  try {
    const data = request.body;
    const token = await UsersUsecases.login(data);

    response.json({
      success: true,
      message: "You have logged in",
      data: { token: token.token, user: token.user },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const user = await UsersUsecases.getById(id);

    response.json({
      success: true,
      message: "User returned",
      data: { user },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
