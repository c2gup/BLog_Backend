const Post = require("../models/post")
const Comment = require("../models/commetModel");

exports.createComment = async (req,res)=>{

       try {
            
           const {post,user,body} = req.body;

           const comment = new Comment({
            post,
            user,
            body
           });

           const savedComment = await comment.save();
//     finding the post by id , add the new cooment to its commnets arrry
  
             const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}}, {new: true})
                          .populate("comments")
                          .exec();

                          res.json({
                              post:updatePost
                          })


       } catch (error) {
          
            return res.status(500).json({
                  error: "Error While Creating comment" ,
            });

       }
}