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
module.exports = {getAllPosts};