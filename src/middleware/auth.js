const createError = require("http-errors");

const UsersUsecases = require("../usecases/users.usecases");

const jwt = require("../lib/jwt");

function auth(request, response, next) {
  try {
    const authorization = request.headers.authorization;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
      throw createError(401, "Token is required in headers");
    }

    const payload = jwt.verify(token);

    const user = UsersUsecases.getById(payload.id);
    request.user = user;

    next();
  } catch (error) {
    response.status(error.status || 401);
    response.json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = auth;
