const express = require("express");
const router = express.Router();
const postController = require('C:/Users/HARJOT/Desktop/backend 4.0/src/controllers/post.controllers.js');

// router.get("/",(req,res)=>{
//     res.send("This message is from the modular routes folder");
// });
router.get("/",postController.getAllPosts);
module.exports = router;