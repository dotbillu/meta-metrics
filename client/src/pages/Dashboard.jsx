import React, { useEffect, useState } from 'react';
import axios from '../services/axios';
import PostForm from '../components/PostForm';
import { BarChart3, TrendingUp, Users, Eye, MessageCircle, Share2, Heart, Calendar, Trash2, Download, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [sortBy, setSortBy] = useState('score');

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error('❌ Failed to delete post:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Calculate analytics
  const totalEngagement = posts.reduce((sum, post) => sum + post.likes + post.shares + post.comments, 0);
  const avgScore = posts.length > 0 ? Math.round(posts.reduce((sum, post) => sum + post.score, 0) / posts.length) : 0;
  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);
  const topPost = posts.reduce((max, post) => post.score > (max?.score || 0) ? post : max, null);

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => {
      const matchesSearch =
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesPlatform = filterPlatform === 'all' || post.platform === filterPlatform;
      return matchesSearch && matchesPlatform;
    })
    .sort((a, b) => {
      if (sortBy === 'score') return b.score - a.score;
      if (sortBy === 'engagement') {
        const aEng = a.likes + a.shares + a.comments;
        const bEng = b.likes + b.shares + b.comments;
        return bEng - aEng;
      }
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'date') return new Date(b.postedAt) - new Date(a.postedAt);
      return 0;
    });

  const getPlatformIcon = (platform) => {
    const icons = {
      facebook: '📘',
      instagram: '📷',
      twitter: '🐦',
      linkedin: '💼'
    };
    return icons[platform.toLowerCase()] || '📱';
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'from-green-500 to-emerald-600';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    if (score >= 40) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-red-600';
  };

  const getScoreTextColor = (score) => {
    if (score >= 80) return 'text-green-800';
    if (score >= 60) return 'text-yellow-800';
    return 'text-red-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-blue-50 to-indigo-100 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Link
                to="/"
                className="text-3xl font-bold text-gray-900 flex items-center gap-3 hover:opacity-90 transition-all cursor-pointer hover:scale-[1.01]"
              >
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <span className="flex items-center gap-2">
                  📊 Meta Post Insights
                </span>
              </Link>
              <p className="text-gray-600 mt-2">Advanced social media performance insights</p>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Create Post Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/10 via-blue-400/10 to-blue-200/10 px-8 py-6 border-b border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">+</span>
                </div>
                Create New Post
              </h2>
              <p className="text-gray-600 mt-2">
                Add a new social media post to track its performance
              </p>
            </div>
            <div className="p-8">
              <PostForm onPostCreated={fetchPosts} />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by author or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="all">All Platforms</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                
              </select>
            </div>
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="score">Score</option>
                <option value="engagement">Engagement</option>
                <option value="views">Views</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Performance Overview
              </h2>
              <div className="text-sm text-gray-600">
                Showing {filteredPosts.length} of {posts.length} posts
              </div>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600 mb-6">Create your first post or adjust your filters</p>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post._id}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{getPlatformIcon(post.platform)}</div>
                        <div>
                          <div className="font-semibold text-gray-900 capitalize">{post.platform}</div>
                          <div className="text-sm text-gray-600">@{post.author}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${getScoreColor(post.score)} text-white shadow-lg`}>
                        {post.score}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white rounded-xl p-3 border border-gray-100 text-center hover:shadow-md transition-shadow">
                        <Heart className="w-5 h-5 text-red-500 mx-auto mb-1" />
                        <div className="font-bold text-gray-900">{post.likes.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Likes</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 text-center hover:shadow-md transition-shadow">
                        <Share2 className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                        <div className="font-bold text-gray-900">{post.shares.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Shares</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 text-center hover:shadow-md transition-shadow">
                        <MessageCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                        <div className="font-bold text-gray-900">{post.comments.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Comments</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 text-center hover:shadow-md transition-shadow">
                        <Eye className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                        <div className="font-bold text-gray-900">{post.views.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Views</div>
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-lg border border-blue-200"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.postedAt).toLocaleDateString()}
                      </div>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-110"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
