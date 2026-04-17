'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import TrendCard from '@/components/TrendCard';
import { stats, trendingAudio } from '@/lib/trends';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Music, Lightbulb, BarChart3, Play, Users, Zap, Share2 } from 'lucide-react';

export default function Home() {
  const featuredTrends = trendingAudio.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-16">
        <section className="relative min-h-[90vh] flex items-center justify-center px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <span className="w-2 h-2 rounded-full bg-accent pulse-glow" />
                <span className="text-sm text-text-secondary">Updated April 17, 2026</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="text-gradient">Track the Pulse</span>
                <br />
                <span>of Instagram Reels</span>
              </h1>

              <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                Discover trending audio, viral formats, and algorithm insights.
                Stay ahead of the game with real-time trend tracking.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/trends"
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Explore Trends
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/tips"
                  className="flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold hover:bg-surface-light transition-colors"
                >
                  Learn the Algorithm
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
            >
              {[
                { icon: Play, label: 'Daily Reels Plays', value: stats.dailyReelsPlays },
                { icon: Music, label: 'Audio Engagement Boost', value: stats.engagementBoost },
                { icon: Share2, label: 'Daily Reshared', value: stats.dailyReshared },
                { icon: TrendingUp, label: 'ROI Increase', value: stats.roiIncrease }
              ].map((stat, i) => (
                <div key={i} className="glass rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold font-mono text-gradient">{stat.value}</p>
                  <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Audio Right Now</h2>
              <p className="text-text-secondary">The hottest sounds dominating Instagram Reels this week</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTrends.map((trend, i) => (
                <TrendCard key={trend.id} audio={trend} index={i} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/trends"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
              >
                View all trending audio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Viral Content Formats</h2>
              <p className="text-text-secondary">Proven formats that consistently outperform on the algorithm</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Lightbulb, name: 'POV / Types Of', desc: 'High shares & saves', color: 'primary' },
                { icon: BarChart3, name: 'Educational', desc: 'Authority building', color: 'secondary' },
                { icon: Users, name: 'GRWM', desc: 'Connection & views', color: 'accent' },
                { icon: Zap, name: 'Trending Audio', desc: 'Maximum reach', color: 'primary' }
              ].map((format, i) => (
                <Link
                  key={i}
                  href="/formats"
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${format.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <format.icon className={`w-6 h-6 text-${format.color}`} />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-gradient transition-all">{format.name}</h3>
                  <p className="text-sm text-text-secondary">{format.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Master the <span className="text-gradient">2026 Algorithm</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12">
              The rules have changed. DM shares now outweigh likes.
              Watch time is king. We break it all down for you.
            </p>
            <Link
              href="/tips"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Get Algorithm Tips
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
