// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 py-8 relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:40px_40px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center justify-center text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg" tabIndex={0}>
          📊 Welcome to MetaMetrics
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg sm:text-xl drop-shadow" tabIndex={0}>
          Track and analyze the performance of your social media content effortlessly.
          <br />
          Create, view, and evaluate posts from multiple platforms in one place.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
          {[
            {
              emoji: '📈',
              title: 'Analytics Dashboard',
              description: 'Comprehensive insights into your content performance',
            },
            {
              emoji: '🎯',
              title: 'Multi-Platform',
              description: 'Support for Facebook, Instagram, Twitter, and more',
            },
            {
              emoji: '⚡',
              title: 'Real-time Tracking',
              description: 'Get instant updates on likes, shares, comments, and engagement',
              colSpan: 'sm:col-span-2',
            },
          ].map(({ emoji, title, description, colSpan }, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform ${colSpan ?? ''}`}
              tabIndex={0}
              role="region"
              aria-labelledby={`feature-title-${index}`}
            >
              <span className="text-4xl mb-2" aria-hidden="true">
                {emoji}
              </span>
              <h3
                id={`feature-title-${index}`}
                className="text-white font-semibold text-lg mb-1"
              >
                {title}
              </h3>
              <p className="text-white/80 text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/dashboard" className="inline-block" aria-label="Go to Dashboard">
          <button
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform uppercase tracking-wide focus:outline-none focus:ring-4 focus:ring-pink-300"
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
