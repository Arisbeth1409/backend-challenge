const express = require("express");

const PostsUsecases = require("../usecases/posts.usecases");

const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const search = request.query.search;
    const posts = await PostsUsecases.getAll(search);
    response.json({
      success: true,
      message: "All posts",
      data: { posts },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/", auth, async (request, response) => {
  try {
    const postData = request.body;
    const newPost = await PostsUsecases.create(postData);
    response.json({
      success: true,
      message: "Post is created",
      data: { newPost },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const user = request.body;
    const postDeleted = await PostsUsecases.deleteById(id, user);

    response.json({
      success: true,
      message: "Post deleted",
      data: { post: postDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const postData = request.body;
    const postUpdated = await PostsUsecases.updateById(id, postData);

    response.json({
      success: true,
      message: "Post updated",
      data: { post: postUpdated },
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
    const post = await PostsUsecases.getById(id);

    response.json({
      success: true,
      message: "Post returned",
      data: { post },
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
