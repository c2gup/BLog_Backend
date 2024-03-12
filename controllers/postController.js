const Post = require("../models/post");
 
exports.createPost = async(req,res)=>{

      try {

            const {title,body} = req.body;
            const post = new Post({
                  title,
                  body
            });

            const savedPost = await post.save();

            res.json({

                  post:savedPost,

            })
            
      } catch (err) {

            console.error(err);
            res.satus(404).json({
                 message:"Error while saving post"
            })
            
      }
}

// This is to get all 
exports.getallpost = async(req,res)=>{

      try {


            const allpost = await Post.find().populate("comments").populate("likes");
           

            res.json({

                  post: allpost

            })
            
      } catch (err) {

            console.error(err);
            res.satus(404).json({
                 message:"Error while saving post"
            })
            
      }
}