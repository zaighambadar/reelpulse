'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import TrendCard from '@/components/TrendCard';
import { trendingAudio } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Music, Filter, TrendingUp, Clock, Search } from 'lucide-react';

export default function TrendsPage() {
  const categories = ['All', 'Country Pop', 'Electronic', 'Nostalgia', 'Seasonal', 'Original Audio', 'Comedy', 'Retro'];
  const trendsByTrend = {
    rising: trendingAudio.filter(t => t.trend === 'rising'),
    peak: trendingAudio.filter(t => t.trend === 'peak'),
    declining: trendingAudio.filter(t => t.trend === 'declining')
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Music className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-secondary">Weekly Updated</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trending <span className="text-gradient">Audio</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Discover the hottest sounds on Instagram Reels. Updated weekly with post counts and trend lifecycle indicators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-semibold mb-1">Trend Lifecycle Guide</h3>
                <p className="text-sm text-text-secondary">Understanding when to jump on trends</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'Rising', color: 'accent', desc: 'Early adoption - High risk, high reward' },
                  { label: 'Peak', color: 'secondary', desc: 'Maximum reach potential' },
                  { label: 'Declining', color: 'text-secondary', desc: 'Saturated - Still works for niche' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full bg-${item.color}`} />
                    <div>
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-xs text-text-secondary ml-2 hidden sm:inline">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {[
            { title: 'Rising Stars', subtitle: 'These sounds are gaining momentum. Get in early for maximum reach.', audio: trendsByTrend.rising, color: 'accent' },
            { title: 'At The Peak', subtitle: 'Maximum viral potential. These sounds are dominating right now.', audio: trendsByTrend.peak, color: 'secondary' },
            { title: 'Cooling Down', subtitle: 'Still useful for niche audiences but reach is declining.', audio: trendsByTrend.declining, color: 'text-secondary' }
          ].map((section, sectionIndex) => (
            <div key={section.title} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full bg-${section.color}`} />
                <div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <p className="text-sm text-text-secondary">{section.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.audio.map((audio, i) => (
                  <TrendCard key={audio.id} audio={audio} index={sectionIndex * 3 + i} />
                ))}
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 glass rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold mb-4">Pro Tip: Timing is Everything</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The algorithm heavily favors Reels that use trending audio while it&apos;s still rising, not after it peaks.
              Aim to use new sounds within 48 hours of noticing them gain traction for the best results.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
