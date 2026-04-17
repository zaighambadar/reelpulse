'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { trendingAudio } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Music, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function TrendsPage() {
  const rising = trendingAudio.filter(t => t.trend === 'rising');
  const peak = trendingAudio.filter(t => t.trend === 'peak');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Trending Audio</h1>
            </div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The sounds dominating Reels this week. Use these for maximum reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Rising', count: rising.length, color: 'accent' },
              { label: 'At Peak', count: peak.length, color: 'secondary' },
              { label: 'Total', count: trendingAudio.length, color: 'primary' }
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold font-mono text-gradient">{stat.count}</p>
                <p className="text-base text-text-secondary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <ArrowUpRight className="w-6 h-6 text-accent" />
              Rising Fast
            </h2>
            <div className="space-y-4">
              {rising.map((audio, i) => (
                <motion.div
                  key={audio.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-6 flex items-center justify-between hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{audio.title}</h3>
                      <p className="text-base text-text-secondary">{audio.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="font-mono font-bold text-xl text-gradient">{audio.posts}</p>
                      <p className="text-sm text-text-secondary">posts</p>
                    </div>
                    <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {audio.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6 text-secondary" />
              At The Peak
            </h2>
            <div className="space-y-4">
              {peak.map((audio, i) => (
                <motion.div
                  key={audio.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-6 flex items-center justify-between hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-secondary flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{audio.title}</h3>
                      <p className="text-base text-text-secondary">{audio.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="font-mono font-bold text-xl text-gradient">{audio.posts}</p>
                      <p className="text-sm text-text-secondary">posts</p>
                    </div>
                    <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
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
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="font-semibold text-lg mb-3">Pro Tip</h3>
            <p className="text-base text-text-secondary">
              Use trending audio within 48 hours of it starting to rise. This is when the algorithm gives maximum distribution boost.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
