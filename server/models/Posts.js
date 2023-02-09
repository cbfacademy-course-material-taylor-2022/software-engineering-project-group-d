const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;
