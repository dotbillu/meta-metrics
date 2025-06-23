// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite',
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          {/* Main heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: 'white',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}>
            📊 Welcome to MetaMetrics
          </h1>

          {/* Subtitle */}
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            fontSize: '1.25rem',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Track and analyze the performance of your social media content effortlessly.  
            Create, view, and evaluate posts from multiple platforms in one place.
          </p>

          {/* Features list */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            margin: '3rem 0',
            maxWidth: '700px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ 
                color: 'white', 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '0.5rem' 
              }}>
                Analytics Dashboard
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.95rem' 
              }}>
                Comprehensive insights into your content performance
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ 
                color: 'white', 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '0.5rem' 
              }}>
                Multi-Platform
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.95rem' 
              }}>
                Support for Facebook, Instagram, Twitter, and more
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'transform 0.3s ease',
              gridColumn: window.innerWidth <= 768 ? 'span 1' : 'span 2'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ 
                color: 'white', 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '0.5rem' 
              }}>
                Real-time Tracking
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.95rem' 
              }}>
                Get instant updates on likes, shares, comments, and engagement
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'linear-gradient(45deg, #ff6b6b, #ff8e53)',
              color: 'white',
              padding: '16px 32px',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(255, 107, 107, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 32px rgba(255, 107, 107, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 24px rgba(255, 107, 107, 0.3)';
            }}>
              🚀 Go to Dashboard
            </button>
          </Link>

          {/* Stats section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '800', 
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                500K+
              </div>
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Posts Analyzed
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '800', 
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                10K+
              </div>
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Active Users
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '800', 
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                99.9%
              </div>
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Uptime
              </div>
            </div>
          </div>
        </div>

        {/* Add keyframes for animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;