 const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    text: {
        type: String
    },

    image: {
        type: String
    },

    likes: [
        {
            type: String
        }
    ],

    comments: [
        {
            username: String,
            comment: String
        }
    ]

},
{
    timestamps: true
});

module.exports = mongoose.model("Post", postSchema);