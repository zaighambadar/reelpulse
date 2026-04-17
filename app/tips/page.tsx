'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { algorithmTips, postingTimes } from '@/lib/trends';
import { motion } from 'framer-motion';
import { BarChart3, Clock, CheckCircle2, Zap, Share2, AlertCircle } from 'lucide-react';

export default function TipsPage() {
  const critical = algorithmTips.filter(t => t.priority === 'critical');
  const important = algorithmTips.filter(t => t.priority === 'important');
  const nice = algorithmTips.filter(t => t.priority === 'nice');

  const iconMap: Record<string, React.ElementType> = {
    zap: Zap,
    'share-2': Share2,
    clock: Clock,
    ban: AlertCircle,
    calendar: Clock,
    'volume-x': AlertCircle,
    repeat: Zap,
    bookmark: CheckCircle2
  };

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
                <BarChart3 style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>Algorithm Tips</h1>
            </div>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              What actually matters for the 2026 algorithm. Focus on what moves the needle.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center', color: '#EC4899' }}>
                  Critical (Must Follow)
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {critical.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        style={{
                          padding: '1.5rem',
                          borderRadius: '1.5rem',
                          background: 'rgba(26, 26, 46, 0.8)',
                          border: '1px solid rgba(236, 72, 153, 0.2)',
                          backdropFilter: 'blur(12px)'
                        }}
                        className="tip-card"
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                          <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon style={{ width: '1.5rem', height: '1.5rem', color: '#EC4899' }} />
                          </div>
                          <div>
                            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tip.title}</h3>
                            <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center', color: '#06B6D4' }}>
                  Important
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {important.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        style={{
                          padding: '1.5rem',
                          borderRadius: '1.5rem',
                          background: 'rgba(26, 26, 46, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          backdropFilter: 'blur(12px)'
                        }}
                        className="tip-card"
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                          <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon style={{ width: '1.5rem', height: '1.5rem', color: '#06B6D4' }} />
                          </div>
                          <div>
                            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tip.title}</h3>
                            <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center', color: '#8B5CF6' }}>
                  Nice to Have
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {nice.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        style={{
                          padding: '1.5rem',
                          borderRadius: '1.5rem',
                          background: 'rgba(26, 26, 46, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          backdropFilter: 'blur(12px)',
                          opacity: 0.8
                        }}
                        className="tip-card"
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                          <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon style={{ width: '1.5rem', height: '1.5rem', color: '#8B5CF6' }} />
                          </div>
                          <div>
                            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tip.title}</h3>
                            <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  background: 'rgba(26, 26, 46, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  position: 'sticky',
                  top: '7rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#8B5CF6' }} />
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Best Times (US)</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {postingTimes.us.map((day, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: i < 6 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none' }}>
                      <span style={{ color: '#94A3B8' }}>{day.day}</span>
                      <span style={{ fontWeight: 600, color: '#06B6D4' }}>{day.peak}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  background: 'rgba(26, 26, 46, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', textAlign: 'center', marginBottom: '1.5rem' }}>Quick Checklist</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Hook in 1.5 sec',
                    'Use trending audio',
                    'Add on-screen text',
                    'End with CTA',
                    'Post 4-7x/week'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem' }}>
                      <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', color: '#06B6D4', flexShrink: 0 }} />
                      <span style={{ color: '#94A3B8' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .tip-card:hover {
          border-color: rgba(139, 92, 246, 0.3) !important;
        }
      `}</style>
    </div>
  );
}
