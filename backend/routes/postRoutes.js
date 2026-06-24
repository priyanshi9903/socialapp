
const cloudinary =
require("../config/cloudinary");

const streamifier =
require("streamifier");

const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
    storage
});

const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.post("/create", upload.single("image"), async(req,res)=> {

    try {

        const { username, text, image } = req.body;

        let imageUrl = "";

        if (!text && !req.file) {
  return res.status(400).json({
    message: "Please provide text or image"
  });
}

        if(req.file){

    const result = await new Promise(
        (resolve,reject)=>{

        const stream =
        cloudinary.uploader.upload_stream(

        {
            folder:"socialapp"
        },

        (error,result)=>{

            if(error)
                reject(error);

            else
                resolve(result);

        });

        streamifier
        .createReadStream(
            req.file.buffer
        )
        .pipe(stream);

    });

    imageUrl =
    result.secure_url;

}

        const post = new Post({

    username:req.body.username,

    text:req.body.text,

    image:imageUrl

});

        await post.save();

        res.status(201).json({
            message: "Post created successfully"
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.get("/feed", async (req, res) => {

    try {

        const posts = await Post.find().sort({
            createdAt: -1
        });

        res.status(200).json(posts);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.put("/like/:id", async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const { username } = req.body;

        if (!post.likes.includes(username)) {
            post.likes.push(username);
        }

        await post.save();

        res.status(200).json({
            message: "Post liked successfully"
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


router.put("/comment/:id", async (req, res) => {

     console.log(req.body);

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const { username, comment } = req.body;

        post.comments.push({
            username,
            comment
        });

        await post.save();

        res.status(200).json({
            message: "Comment added successfully"
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;