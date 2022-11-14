const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Por favor rellena el título del post"],
    },
    body: {
      type: String,
      required: [true, "Por favor rellena el cuerpo del post"],
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
    comments: [
      {
        comment: String,
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


PostSchema.methods.toJSON = function () {
  const post = this._doc;
  delete post.createdAt;
  delete post.updatedAt; 
  delete post.__v; 
  return post;
};

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
