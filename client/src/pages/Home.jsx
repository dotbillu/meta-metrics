// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-blue-100 to-gray-200 px-4 py-8 relative overflow-hidden">
      {/* Top Navbar */}
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-20 shadow">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-blue-700">MetaMetrics</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://dotbillu.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
          >
            {/* Portfolio SVG Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4V6a4 4 0 10-8 0v2c0 2.21 1.79 4 4 4zm6 2H6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2z" />
            </svg>
            Portfolio
          </a>
          <a
            href="https://github.com/dotbillu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
          >
            {/* GitHub SVG Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* Decorative background grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full bg-[radial-gradient(circle,rgba(30,64,175,0.04)_1px,transparent_1px)] bg-[length:36px_36px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center justify-center text-center mt-32">
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 rounded-full p-4 shadow-lg mb-3">
            <span className="text-5xl md:text-6xl" role="img" aria-label="MetaMetrics Logo">📊</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg" tabIndex={0}>
            MetaMetrics
          </h1>
        </div>

        {/* Project Explanation */}
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 mb-8 shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">About the Project</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-2">
            <span className="font-semibold text-blue-600">MetaMetrics</span> is a full-stack analytics platform designed to help creators, marketers, and teams <span className="font-semibold text-blue-600">track, analyze, and visualize</span> the performance of their social media posts across platforms like Facebook, Instagram, Twitter, and LinkedIn.
          </p>
          <p className="text-gray-600 text-base">
            Our mission is to empower you with actionable insights, so you can focus on what matters: <span className="italic text-blue-500">growing your audience and maximizing your impact</span>.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
          {[
            {
              emoji: '📈',
              title: 'Analytics Dashboard',
              description: 'Visualize your content performance with beautiful charts and metrics.',
            },
            {
              emoji: '🎯',
              title: 'Multi-Platform',
              description: 'Track posts from Facebook, Instagram, Twitter, and LinkedIn in one place.',
            },
            {
              emoji: '⚡',
              title: 'Real-time Tracking',
              description: 'Instant updates on likes, shares, comments, and engagement.',
              colSpan: 'sm:col-span-2',
            },
          ].map(({ emoji, title, description, colSpan }, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform ${colSpan ?? ''}`}
              tabIndex={0}
              role="region"
              aria-labelledby={`feature-title-${index}`}
            >
              <span className="text-4xl mb-2" aria-hidden="true">
                {emoji}
              </span>
              <h3
                id={`feature-title-${index}`}
                className="text-blue-700 font-semibold text-lg mb-1"
              >
                {title}
              </h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/dashboard" className="inline-block" aria-label="Go to Dashboard">
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-wide focus:outline-none focus:ring-4 focus:ring-blue-300"
            type="button"
          >
            🚀 Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
