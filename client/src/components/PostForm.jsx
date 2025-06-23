// src/components/PostForm.jsx
import React, { useState } from 'react';
import axios from '../services/axios';

const PostForm = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    platform: '',
    author: '',
    likes: '',
    shares: '',
    comments: '',
    views: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert numeric fields to numbers, others stay as strings
    setFormData((prev) => ({
      ...prev,
      [name]: ['likes', 'shares', 'comments', 'views'].includes(name)
        ? value === '' ? '' : Number(value)
        : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        tags: formData.tags
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag !== ''),
      };

      await axios.post('/posts', payload);
      onPostCreated();

      // Reset the form after submission
      setFormData({
        platform: '',
        author: '',
        likes: '',
        shares: '',
        comments: '',
        views: '',
        tags: '',
      });
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="input"
        />

        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="" disabled>Select Platform</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
        </select>

        <input
          type="number"
          name="likes"
          placeholder="Likes"
          value={formData.likes}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="shares"
          placeholder="Shares"
          value={formData.shares}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="views"
          placeholder="Views"
          value={formData.views}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleChange}
          className="input col-span-2"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Submit Post
      </button>
    </form>
  );
};

export default PostForm;
