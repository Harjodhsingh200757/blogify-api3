const express = require('express');
const app = express();
const postRoutes = require('./routes/post.routes.js') 
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use("/home",postRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})

module.exports = app;