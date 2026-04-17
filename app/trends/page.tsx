'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trendingAudio } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Music, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function TrendsPage() {
  const rising = trendingAudio.filter(t => t.trend === 'rising');
  const peak = trendingAudio.filter(t => t.trend === 'peak');

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0a1a' }}>
      <Navbar />

      <main className="flex-1 pt-24 pb-24" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Music style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>Trending Audio</h1>
            </div>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              The sounds dominating Reels this week. Use these for maximum reach.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { label: 'Rising', count: rising.length },
              { label: 'At Peak', count: peak.length },
              { label: 'Total', count: trendingAudio.length }
            ].map((stat, i) => (
              <div style={{
                padding: '1.5rem',
                borderRadius: '1.5rem',
                background: 'rgba(26, 26, 46, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: 'monospace' }}>{stat.count}</p>
                <p style={{ fontSize: '1rem', color: '#94A3B8', marginTop: '0.5rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <ArrowUpRight style={{ width: '1.5rem', height: '1.5rem', color: '#06B6D4' }} />
              Rising Fast
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {rising.map((audio, i) => (
                <motion.div
                  key={audio.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    borderRadius: '1.5rem',
                    background: 'rgba(26, 26, 46, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)'
                  }}
                  className="audio-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Music style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{audio.title}</h3>
                      <p style={{ fontSize: '1rem', color: '#94A3B8' }}>{audio.artist}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.25rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{audio.posts}</p>
                      <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>posts</p>
                    </div>
                    <span style={{ padding: '0.5rem 1rem', background: 'rgba(6, 182, 212, 0.1)', color: '#06B6D4', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>
                      {audio.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#EC4899' }} />
              At The Peak
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {peak.map((audio, i) => (
                <motion.div
                  key={audio.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    borderRadius: '1.5rem',
                    background: 'rgba(26, 26, 46, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)'
                  }}
                  className="audio-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Music style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{audio.title}</h3>
                      <p style={{ fontSize: '1rem', color: '#94A3B8' }}>{audio.artist}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.25rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{audio.posts}</p>
                      <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>posts</p>
                    </div>
                    <span style={{ padding: '0.5rem 1rem', background: 'rgba(236, 72, 153, 0.1)', color: '#EC4899', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>
                      {audio.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '4rem', padding: '2rem', borderRadius: '1.5rem', background: 'rgba(26, 26, 46, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', textAlign: 'center' }}
          >
            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Pro Tip</h3>
            <p style={{ fontSize: '1rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
              Use trending audio within 48 hours of it starting to rise. This is when the algorithm gives maximum distribution boost.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .audio-card:hover {
          border-color: rgba(139, 92, 246, 0.3) !important;
        }
      `}</style>
    </div>
  );
}
