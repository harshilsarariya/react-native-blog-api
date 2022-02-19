const router = require("express").Router();
const multer = require("../middlewares/multer");
const {
  createPost,
  deletPost,
  updatePost,
  getPost,
  getFeaturedPosts,
  getPosts,
  searchPost,
  getRelatedPost,
  uploadImage,
} = require("../controllers/post");
const { postValidator, validate } = require("../middlewares/postValidator");
const { parseData } = require("../middlewares");

// router.post(
//   "/create",
//   multer.single("thumbnail"),
//   parseData,
//   postValidator,
//   // validate,
//   createPost
// );

// router.put(
//   "/:postId",
//   multer.single("thumbnail"),
//   parseData,
//   postValidator,
//   // validate,
//   updatePost
// );

// router.delete("/:postId", deletPost);

router.get("/single/:slug", getPost);

router.get("/featured-posts", getFeaturedPosts);

router.get("/posts", getPosts);

router.get("/search", searchPost);

router.get("/related-posts/:postId", getRelatedPost);

// router.post("/upload-image", multer.single("image"), uploadImage);

module.exports = router;
