'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Book, BarChart3, Calendar, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Instagram Creator Guide',
      description: 'A comprehensive guide to growing your Instagram presence with Reels. Learn the best practices, common mistakes to avoid, and proven strategies.',
      icon: Book,
      href: '/resources/creator-guide',
      comingSoon: false
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track your Reels performance with detailed analytics. Monitor views, engagement, and growth trends over time.',
      icon: BarChart3,
      href: '/resources/analytics',
      comingSoon: true
    },
    {
      title: 'Content Calendar',
      description: 'Plan and schedule your content with our built-in calendar. Never miss a trending topic or posting time.',
      icon: Calendar,
      href: '/resources/calendar',
      comingSoon: true
    },
    {
      title: 'Newsletter',
      description: 'Get weekly updates on trending audio, viral formats, and algorithm changes delivered straight to your inbox.',
      icon: Mail,
      href: '/resources/newsletter',
      comingSoon: true
    }
  ];

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
                <Book style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>Resources</h1>
            </div>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Tools and guides to help you create better Reels and grow your audience.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    padding: '2rem',
                    borderRadius: '1.5rem',
                    background: 'rgba(26, 26, 46, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)'
                  }}
                  className="resource-card"
                >
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <Icon style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                  </div>
                  <h3 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.75rem' }}>{resource.title}</h3>
                  <p style={{ color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>{resource.description}</p>
                  {resource.comingSoon ? (
                    <span style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: '#06B6D4',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}>
                      Coming Soon
                    </span>
                  ) : (
                    <Link
                      href={resource.href}
                      style={{
                        display: 'inline-block',
                        padding: '0.625rem 1.25rem',
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                        color: 'white',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      View Guide →
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .resource-card:hover {
          border-color: rgba(139, 92, 246, 0.3) !important;
        }
      `}</style>
    </div>
  );
}
