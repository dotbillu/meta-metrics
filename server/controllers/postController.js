const Post = require('../models/post');
const { calculatePostScore } = require('../services/scoringLogic');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().lean();

    const scoredPosts = posts.map(post => ({
      ...post,
      score: calculatePostScore(post)
    }));

    res.status(200).json(scoredPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid post data" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(204).send(); // No content
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete post" });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost // ✅ export it
};
