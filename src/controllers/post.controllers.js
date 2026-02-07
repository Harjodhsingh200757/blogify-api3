const { get } = require("..");

const getAllPosts = (req,res) =>{
    const posts = [
        {id:1,title:"controllers post1"},
        {id:2, title:"controllers post2"},
        
    ];
    res.status(200).json({
        message:"Posts fetched successfully",
        data:posts
    });
};
const getPostById = (req,res)=>{
    const postId= req.params.postId;

    res.status(200).json({
        message:`Post with id ${postId} fetched successfully`,
    });
};
module.exports = {getAllPosts,getPostById};
    
// Posts controller extracted from routes.