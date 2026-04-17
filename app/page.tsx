'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trendingVideos } from '@/lib/trends';
import { motion } from 'framer-motion';
import { ArrowRight, Video, Music, Lightbulb, BarChart3, Play, TrendingUp, Eye, Heart } from 'lucide-react';

const navItems = [
  { href: '/videos', label: 'Trending Videos', icon: Video },
  { href: '/trends', label: 'Audio Trends', icon: Music },
  { href: '/formats', label: 'Formats', icon: Lightbulb },
  { href: '/tips', label: 'Algorithm', icon: BarChart3 },
];

const videoThumbnails = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/reels1/600/800',
    emoji: '🎯',
    title: 'Beating Procrastination'
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/reels2/600/800',
    emoji: '✨',
    title: '5 Life-Changing Habits'
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/reels3/600/800',
    emoji: '💄',
    title: 'Room Makeover'
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/reels4/600/800',
    emoji: '📱',
    title: 'Phone Comparison'
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/reels5/600/800',
    emoji: '😱',
    title: 'Scary Story'
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/reels6/600/800',
    emoji: '🔥',
    title: 'Hot Takes Debate'
  },
  {
    id: 7,
    src: 'https://picsum.photos/seed/reels7/600/800',
    emoji: '👗',
    title: 'Fashion Reveal'
  },
  {
    id: 8,
    src: 'https://picsum.photos/seed/reels8/600/800',
    emoji: '💃',
    title: 'Dance Trend'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0a1a' }}>
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="min-h-[85vh] flex items-center justify-center px-8 py-16">
          <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-12" style={{ background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                <span className="w-3 h-3 rounded-full" style={{ background: '#EC4899' }} />
                <span className="text-base" style={{ color: '#94A3B8' }}>Live Trending • April 2026</span>
              </div>

              <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem' }}>
                What's actually
                <br />
                <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>trending on Reels</span>
              </h1>

              <p style={{ fontSize: '1.4rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                Real data on viral videos, trending audio, and formats that work.
                Updated weekly.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                {navItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.25rem 2.5rem',
                      borderRadius: '1rem',
                      background: 'rgba(26, 26, 46, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(12px)',
                      minWidth: '280px',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    className="nav-card"
                  >
                    <item.icon style={{ width: '1.75rem', height: '1.75rem', color: '#8B5CF6' }} />
                    <span style={{ fontWeight: 600, fontSize: '1.2rem', color: 'white' }}>{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', background: 'rgba(26, 26, 46, 0.3)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="text-center mb-16">
              <h2 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '1rem' }}>Trending Videos</h2>
              <p style={{ fontSize: '1.25rem', color: '#94A3B8', marginBottom: '2rem' }}>Most viral content this week</p>
              <Link
                href="/videos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: '#8B5CF6' }}
              >
                View all videos <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
                      src={videoThumbnails[i].src}
                      alt={video.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
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
                        fontSize: '0.875rem'
                      }}>
                        {video.views} views
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
                    <h3 style={{ fontWeight: 600, fontSize: '1.25rem', textAlign: 'center', marginBottom: '0.5rem' }}>{video.title}</h3>
                    <p style={{ fontSize: '1rem', color: '#94A3B8', textAlign: 'center' }}>{video.creator}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="text-center mb-16">
              <h2 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '1rem' }}>Explore by Category</h2>
              <p style={{ fontSize: '1.25rem', color: '#94A3B8' }}>Find what's trending in your niche</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {['POV / Relatable', 'Educational', 'GRWM', 'Before & After', 'Storytime', 'Debates', 'Transitions', 'Trending Audio'].map((cat, i) => (
                <Link
                  key={cat}
                  href="/formats"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    borderRadius: '1.5rem',
                    background: 'rgba(26, 26, 46, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  className="nav-card"
                >
                  <span style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white' }}>{cat}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', background: 'rgba(26, 26, 46, 0.3)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="text-center mb-16">
              <h2 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '1rem' }}>Platform Stats</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                { label: 'Daily Plays', value: '200B+', icon: Play },
                { label: 'Audio Boost', value: '+42%', icon: Music },
                { label: 'Shares', value: '4.5B/day', icon: TrendingUp },
                { label: 'ROI Increase', value: '+29%', icon: BarChart3 }
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  background: 'rgba(26, 26, 46, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  textAlign: 'center'
                }}>
                  <stat.icon style={{ width: '2.5rem', height: '2.5rem', color: '#8B5CF6', margin: '0 auto 1.25rem' }} />
                  <p style={{ fontSize: '2.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: 'monospace' }}>{stat.value}</p>
                  <p style={{ fontSize: '1.1rem', color: '#94A3B8', marginTop: '0.75rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .nav-card:hover {
          border-color: rgba(139, 92, 246, 0.5) !important;
          transform: translateY(-4px);
        }
        .video-card:hover {
          border-color: rgba(139, 92, 246, 0.4) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}
