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
    setFormData((prev) => ({
      ...prev,
      [name]: ['likes', 'shares', 'comments', 'views'].includes(name)
        ? value === '' ? '' : Number(value)
        : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.views === 0 || formData.views === '' || isNaN(formData.views)) {
      window.alert('Invalid: lol get some views first!');
      return;
    }

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
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 dark:bg-gray-900/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />

        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        >
          <option value="" disabled>
            Select Platform
          </option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          
        </select>

        <input
          type="number"
          name="likes"
          placeholder="Likes"
          value={formData.likes}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          min="0"
        />
        <input
          type="number"
          name="shares"
          placeholder="Shares"
          value={formData.shares}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          min="0"
        />
        <input
          type="number"
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          min="0"
        />
        <input
          type="number"
          name="views"
          placeholder="Views"
          value={formData.views}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          min="0"
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleChange}
          className="md:col-span-2 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
      </div>
      <button
        type="submit"
        className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-xl font-semibold text-lg shadow hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Submit Post
      </button>
    </form>
  );
};

export default PostForm;
