'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trendingVideos } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Video, Eye, Heart, Share2, Play, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

const videoImages = [
  'https://picsum.photos/seed/reels1/600/400',
  'https://picsum.photos/seed/reels2/600/400',
  'https://picsum.photos/seed/reels3/600/400',
  'https://picsum.photos/seed/reels4/600/400',
  'https://picsum.photos/seed/reels5/600/600',
  'https://picsum.photos/seed/reels6/600/600',
  'https://picsum.photos/seed/reels7/600/600',
  'https://picsum.photos/seed/reels8/600/600',
];

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0a1a' }}>
      <Navbar />

      <main className="flex-1 pt-24 pb-24" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Video style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>Trending Videos</h1>
            </div>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Real examples of what's going viral. Click any video to watch it on Instagram.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-24"
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Top Performing</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              {trendingVideos.slice(0, 4).map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: 'block',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    background: '#1a1a2e',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                  className="video-card"
                >
                  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                    <img
                      src={videoImages[i]}
                      alt={video.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '5rem',
                        height: '5rem',
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Play style={{ width: '2rem', height: '2rem', color: 'white', marginLeft: '0.25rem' }} />
                      </div>
                    </div>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}>
                      {video.format}
                    </span>
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Eye style={{ width: '1rem', height: '1rem' }} /> {video.views}
                      </span>
                      {video.trend === 'rising' && (
                        <span style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '9999px',
                          background: 'rgba(16, 185, 129, 0.8)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <TrendingUp style={{ width: '1rem', height: '1rem' }} /> Rising
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem' }}>
                      <div>
                        <h3 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{video.title}</h3>
                        <p style={{ fontSize: '1rem', color: '#94A3B8' }}>{video.creator}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', color: '#94A3B8', flexShrink: 0 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Heart style={{ width: '1.25rem', height: '1.25rem' }} /> {video.likes}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Share2 style={{ width: '1.25rem', height: '1.25rem' }} /> {video.shares}
                        </span>
                      </div>
                    </div>
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <p style={{ fontSize: '1rem', color: '#94A3B8', marginBottom: '0.75rem' }}>{video.description}</p>
                      <p style={{ fontSize: '1rem' }}>
                        <span style={{ color: '#8B5CF6', fontWeight: 600 }}>Why it worked:</span>{' '}
                        <span style={{ color: '#94A3B8' }}>{video.whyItWorks}</span>
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>More Trending Videos</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {trendingVideos.slice(4).map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'block',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    background: '#1a1a2e',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                  className="video-card"
                >
                  <div style={{ position: 'relative', aspectRatio: '9/16', maxHeight: '350px' }}>
                    <img
                      src={videoImages[i + 4]}
                      alt={video.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Play style={{ width: '1.5rem', height: '1.5rem', color: 'white', marginLeft: '0.125rem' }} />
                      </div>
                    </div>
                    <span style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {video.format}
                    </span>
                    <span style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem'
                    }}>
                      {video.views}
                    </span>
                  </div>
                  <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                    <h3 style={{ fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {video.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>{video.creatorHandle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '5rem', padding: '2.5rem', borderRadius: '1.5rem', background: 'rgba(26, 26, 46, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>How to Use These Examples</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Study the Hook', desc: 'Notice how each video captures attention in the first 1-2 seconds', icon: Target },
                { title: 'Analyze the Format', desc: 'Each format has specific elements that drive engagement', icon: Sparkles },
                { title: 'Add Your Twist', desc: 'Take inspiration but add your unique perspective to stand out', icon: Zap }
              ].map((tip, i) => (
                <div key={i} style={{ background: '#252542', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
                  <tip.icon style={{ width: '2.5rem', height: '2.5rem', color: '#8B5CF6', margin: '0 auto 1rem' }} />
                  <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tip.title}</h4>
                  <p style={{ fontSize: '1rem', color: '#94A3B8' }}>{tip.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .video-card:hover {
          border-color: rgba(139, 92, 246, 0.4) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}
