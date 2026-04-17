'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import TipCard from '@/components/TipCard';
import { algorithmTips, postingTimes } from '@/lib/trends';
import { motion } from 'framer-motion';
import { BarChart3, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function TipsPage() {
  const criticalTips = algorithmTips.filter(t => t.priority === 'critical');
  const importantTips = algorithmTips.filter(t => t.priority === 'important');
  const niceTips = algorithmTips.filter(t => t.priority === 'nice');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-sm text-text-secondary">2026 Algorithm Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Algorithm <span className="text-gradient">Mastery</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to know about how Instagram ranks your Reels in 2026.
              From critical signals to optimization tricks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 rounded-full bg-secondary" />
                  <div>
                    <h2 className="text-2xl font-bold">Critical Signals</h2>
                    <p className="text-sm text-text-secondary">Must-follow rules for algorithmic success</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {criticalTips.map((tip, i) => (
                    <TipCard key={tip.id} tip={tip} index={i} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 rounded-full bg-accent" />
                  <div>
                    <h2 className="text-2xl font-bold">Important Tips</h2>
                    <p className="text-sm text-text-secondary">Strong contributors to reach and engagement</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {importantTips.map((tip, i) => (
                    <TipCard key={tip.id} tip={tip} index={i + criticalTips.length} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 rounded-full bg-primary" />
                  <div>
                    <h2 className="text-2xl font-bold">Nice to Have</h2>
                    <p className="text-sm text-text-secondary">Extra optimization for power users</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {niceTips.map((tip, i) => (
                    <TipCard key={tip.id} tip={tip} index={i + criticalTips.length + importantTips.length} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-6 sticky top-24"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Best Times to Post</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-text-secondary" />
                      <span className="text-sm font-medium">United States (EST)</span>
                    </div>
                    <div className="space-y-2">
                      {postingTimes.us.slice(0, 4).map((day, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">{day.day}</span>
                          <span className="text-accent font-medium">{day.peak}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-text-secondary" />
                      <span className="text-sm font-medium">Europe (CET)</span>
                    </div>
                    <div className="space-y-2">
                      {postingTimes.europe.slice(0, 4).map((day, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">{day.day}</span>
                          <span className="text-secondary font-medium">{day.peak}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-text-secondary pt-4 border-t border-white/5">
                    Tip: Check your own Instagram Insights for your specific audience activity patterns.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="font-bold mb-4">Quick Checklist</h3>
                <div className="space-y-3">
                  {[
                    'Hook in first 1.5 seconds',
                    'Use trending audio (Day 1-3)',
                    'Add on-screen text',
                    'End with engagement CTA',
                    'Post 4-7 times per week',
                    'Respond to comments in 30 min',
                    'Avoid TikTok watermarks',
                    'Design for loops'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Common Mistakes That Kill Reach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { mistake: 'Opening too slowly', fix: 'Start with value immediately' },
                { mistake: 'Low watch-through rate', fix: 'Hook in 1.5 seconds' },
                { mistake: 'Using 20-30 hashtags', fix: 'Use 3-7 highly relevant hashtags' },
                { mistake: 'No on-screen text', fix: '40% watch without sound' },
                { mistake: 'Reposting TikToks', fix: 'Always remove watermarks' },
                { mistake: 'Inconsistent posting', fix: 'Aim for 4-7 reels/week' }
              ].map((item, i) => (
                <div key={i} className="bg-surface-light rounded-xl p-4">
                  <p className="text-secondary text-sm font-medium mb-2">❌ {item.mistake}</p>
                  <p className="text-accent text-sm">✓ {item.fix}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
