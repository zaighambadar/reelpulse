'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { trendingAudio } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Music, TrendingUp, Clock, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export default function TrendsPage() {
  const rising = trendingAudio.filter(t => t.trend === 'rising');
  const peak = trendingAudio.filter(t => t.trend === 'peak');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Trending Audio</h1>
            </div>
            <p className="text-text-secondary text-lg">
              The sounds dominating Reels this week. Use these for maximum reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Rising', count: rising.length, color: 'accent' },
              { label: 'At Peak', count: peak.length, color: 'secondary' },
              { label: 'Total', count: trendingAudio.length, color: 'primary' }
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold font-mono text-gradient">{stat.count}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5 text-accent" />
              Rising Fast
            </h2>
            <div className="space-y-3">
              {rising.map((audio, i) => (
                <motion.div
                  key={audio.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-5 flex items-center justify-between hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{audio.title}</h3>
                      <p className="text-sm text-text-secondary">{audio.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-mono font-bold text-gradient">{audio.posts}</p>
                      <p className="text-xs text-text-secondary">posts</p>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      {audio.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              At The Peak
            </h2>
            <div className="space-y-3">
              {peak.map((audio, i) => (
                <motion.div
                  key={audio.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-5 flex items-center justify-between hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{audio.title}</h3>
                      <p className="text-sm text-text-secondary">{audio.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-mono font-bold text-gradient">{audio.posts}</p>
                      <p className="text-xs text-text-secondary">posts</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
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
            className="mt-12 glass rounded-xl p-6"
          >
            <h3 className="font-semibold mb-2">Pro Tip</h3>
            <p className="text-text-secondary text-sm">
              Use trending audio within 48 hours of it starting to rise. This is when the algorithm gives maximum distribution boost.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
