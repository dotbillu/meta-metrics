const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  createPost,
  deletePost // ✅ add this
} = require('../controllers/postController');

// GET all posts with scores
router.get('/', getAllPosts);

// POST a new post
router.post('/', createPost);

// DELETE a post by ID
router.delete('/:id', deletePost); // ✅ add this

module.exports = router;
