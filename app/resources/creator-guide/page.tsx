'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, CheckCircle2, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function CreatorGuidePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0a1a' }}>
      <Navbar />

      <main className="flex-1 pt-24 pb-24" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/resources"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#94A3B8',
                textDecoration: 'none',
                marginBottom: '2rem',
                transition: 'color 0.2s'
              }}
              className="back-link"
            >
              <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
              Back to Resources
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Book style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
              </div>
              <span style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                fontSize: '0.875rem',
                fontWeight: 500
              }}>
                Complete Guide
              </span>
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Instagram Reels Creator Guide</h1>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Everything you need to know to create viral Reels and grow your Instagram presence in 2026.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Lightbulb style={{ width: '1.5rem', height: '1.5rem', color: '#8B5CF6' }} />
              Getting Started
            </h2>
            <div style={{
              padding: '2rem',
              borderRadius: '1.5rem',
              background: 'rgba(26, 26, 46, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)'
            }}>
              <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Instagram Reels is one of the most powerful tools for organic growth on the platform. With the right strategy, you can reach new audiences and grow your following faster than ever before.
              </p>
              <p style={{ color: '#94A3B8', lineHeight: 1.8 }}>
                This guide covers the essential principles, formats, and techniques that top creators use to consistently produce viral content.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>The Algorithm Basics</h2>
            <div style={{
              padding: '2rem',
              borderRadius: '1.5rem',
              background: 'rgba(26, 26, 46, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)'
            }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { title: 'Completion Rate', desc: 'The most important metric. Videos that people watch to the end get priority.' },
                  { title: 'Engagement', desc: 'Likes, comments, shares, and saves signal quality content to the algorithm.' },
                  { title: 'Shares', desc: 'When people send your Reel to friends, it\'s a powerful positive signal.' },
                  { title: 'Watch Time', desc: 'Total time spent watching matters more than views.' },
                  { title: 'Originality', desc: 'Content with watermarks from other platforms is deprioritized.' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', color: '#8B5CF6', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <span style={{ fontWeight: 600 }}>{item.title}</span>
                      <span style={{ color: '#94A3B8' }}> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>Content Pillars</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Educational', desc: 'Teach something valuable. Tips, tutorials, how-tos.' },
                { title: 'Entertainment', desc: 'Make people laugh or feel emotions. Comedy, POV, storytime.' },
                { title: 'Inspiration', desc: 'Motivate and inspire. Transformations, achievements, goals.' },
                { title: 'Connection', desc: 'Build relationships. Behind-the-scenes, day-in-life, Q&As.' }
              ].map((pillar, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: '#252542'
                }}>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{pillar.title}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              padding: '2rem',
              borderRadius: '1.5rem',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}
          >
            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>Next Steps</h3>
            <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>
              Now that you understand the basics, explore our trending content to see what's working right now:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/videos" style={{
                padding: '0.625rem 1.25rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Trending Videos →
              </Link>
              <Link href="/trends" style={{
                padding: '0.625rem 1.25rem',
                borderRadius: '9999px',
                background: 'rgba(26, 26, 46, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Trending Audio →
              </Link>
              <Link href="/formats" style={{
                padding: '0.625rem 1.25rem',
                borderRadius: '9999px',
                background: 'rgba(26, 26, 46, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Content Formats →
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .back-link:hover {
          color: white !important;
        }
      `}</style>
    </div>
  );
}
