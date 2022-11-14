const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    userId: {
      type: ObjectId,
      ref: "User",
    },
    date: { type: Date, default: Date.now },
    comments: [
      {
        body: String,
        date: Date,
        userId: { type: ObjectId, ref: "User" },
      },
    ],
    likes: [{ type: ObjectId }],
  },
  { timestamps: true }
);

PostSchema.index({
  title: "text",
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
