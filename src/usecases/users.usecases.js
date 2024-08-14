const createError = require("http-errors");

const encryption = require("../lib/encryption");
const jwt = require("../lib/jwt");
const User = require("../models/users.model");

async function signUp(data) {
  const existUser = await User.findOne({ email: data.email });

  if (existUser) {
    throw createError(409, "Registered user");
  }

  if (!data.password) {
    throw createError(400, "Password is required");
  }

  if (data.password.length < 6) {
    throw createError(400, "Enter at least 6 characters");
  }

  if (!data.profilePic) {
    throw createError(400, "Enter the image url");
  }

  const password = encryption.encrypt(data.password);
  data.password = password;
  const newUser = await User.create(data);

  return newUser;
}

async function login(data) {
  const user = await User.findOne({ email: data.email }).select("+password");

  if (!user) {
    throw createError(401, "Invalid Credentials");
  }

  const isValidPassword = encryption.compare(data.password, user.password);

  if (!isValidPassword) {
    throw createError(401, "Invalid Credentials");
  }

  const token = jwt.sign({ id: user._id });

  return token;
}

async function getById(id) {
  const user = await User.findById(id);
  if (!user) {
    throw createError(404, "User not found");
  }
  return user;
}

module.exports = {
  signUp,
  login,
  getById,
};
