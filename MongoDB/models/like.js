const mongoose = require("mongoose")

const Schema = mongoose.Schema

const likeSchema = new mongoose.Schema({
    postID: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    timestamp: { type: Date, default: Date.now }
});

// This ensures that a user can only like a post once
likeSchema.index({ postID: 1, userID: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema)