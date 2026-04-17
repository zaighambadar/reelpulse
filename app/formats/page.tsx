'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { contentFormats } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target, Check } from 'lucide-react';

export default function FormatsPage() {
  const highEngagement = contentFormats.filter(f => f.engagement === 'high');
  const mediumEngagement = contentFormats.filter(f => f.engagement === 'medium');

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0a1a' }}>
      <Navbar />

      <main className="flex-1 pt-24 pb-24" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Lightbulb style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>Content Formats</h1>
            </div>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Proven formats that consistently go viral. Pick one and create.
            </p>
          </motion.div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#EC4899' }} />
              High Engagement
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
              {highEngagement.map((format, i) => (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    padding: '2rem',
                    borderRadius: '1.5rem',
                    background: 'rgba(26, 26, 46, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)'
                  }}
                  className="format-card"
                >
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{format.name}</h3>
                    <p style={{ fontSize: '1rem', color: '#94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <Target style={{ width: '1rem', height: '1rem' }} />
                      Best for: {format.bestFor}
                    </p>
                  </div>

                  <p style={{ color: '#94A3B8', textAlign: 'center', marginBottom: '1.5rem', lineHeight: 1.6 }}>{format.description}</p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {format.tips.map((tip, j) => (
                      <li key={j} style={{ color: '#94A3B8', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <Check style={{ width: '1.25rem', height: '1.25rem', color: '#06B6D4', flexShrink: 0, marginTop: '0.125rem' }} />
                        {tip}
                      </li>
                    ))}
                  </ul>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                    <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
                      <span style={{ color: '#8B5CF6', fontWeight: 600 }}>Example:</span> {format.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {mediumEngagement.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#06B6D4' }} />
                Medium Engagement
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
                {mediumEngagement.map((format, i) => (
                  <motion.div
                    key={format.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      padding: '2rem',
                      borderRadius: '1.5rem',
                      background: 'rgba(26, 26, 46, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(12px)'
                    }}
                    className="format-card"
                  >
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                      <h3 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{format.name}</h3>
                      <p style={{ fontSize: '1rem', color: '#94A3B8' }}>Best for: {format.bestFor}</p>
                    </div>
                    <p style={{ color: '#94A3B8', textAlign: 'center', marginBottom: '1.5rem', lineHeight: 1.6 }}>{format.description}</p>
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                      <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
                        <span style={{ color: '#8B5CF6', fontWeight: 600 }}>Example:</span> {format.example}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .format-card:hover {
          border-color: rgba(139, 92, 246, 0.3) !important;
        }
      `}</style>
    </div>
  );
}
