const express = require("express");
const router = express.Router();

const {createPost,getallpost} = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");
const {likePost,unlikePost} = require("../controllers/likeController");

router.post("/createPost",createPost);
router.post("/createComment",createComment);
router.post("/likePost",likePost);
router.post("/unlikePost",unlikePost);
router.get("/getallpost",getallpost);



module.exports = router;