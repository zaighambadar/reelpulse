'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import { ArrowRight, Video, Music, Lightbulb, BarChart3, Play, Heart, Eye } from 'lucide-react';

const navItems = [
  { href: '/videos', label: 'Trending Videos', icon: Video },
  { href: '/trends', label: 'Audio Trends', icon: Music },
  { href: '/formats', label: 'Formats', icon: Lightbulb },
  { href: '/tips', label: 'Algorithm', icon: BarChart3 },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-16">
        <section className="min-h-[85vh] flex items-center px-6">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary pulse-glow" />
                <span className="text-sm text-text-secondary">Live • April 2026</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                What's actually
                <br />
                <span className="text-gradient">trending on Reels</span>
              </h1>

              <p className="text-xl text-text-secondary max-w-xl mb-12">
                Real data on viral videos, trending audio, and formats that work.
                Updated weekly.
              </p>

              <div className="flex flex-wrap gap-4">
                {navItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary/50 transition-all"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium group-hover:text-gradient transition-all">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Daily Plays', value: '200B+', icon: Play },
                  { label: 'Audio Boost', value: '+42%', icon: Music },
                  { label: 'Avg. Shares', value: '4.5B/day', icon: Heart },
                  { label: 'ROI Increase', value: '+29%', icon: Eye }
                ].map((stat, i) => (
                  <div key={i} className="glass rounded-xl p-5">
                    <stat.icon className="w-5 h-5 text-primary mb-3" />
                    <p className="text-2xl font-bold font-mono text-gradient">{stat.value}</p>
                    <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold">Trending Now</h2>
                <p className="text-text-secondary mt-2">Most viral content this week</p>
              </div>
              <Link
                href="/videos"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'POV: Beating procrastination', views: '12.4M', format: 'POV' },
                { title: '5 habits that changed my life', views: '8.7M', format: 'Educational' },
                { title: 'Room before vs after 30 days', views: '22.1M', format: 'Before/After' },
                { title: 'iPhone vs Android users', views: '9.8M', format: 'Debate' }
              ].map((video, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur rounded-full text-xs font-medium">
                      {video.format}
                    </span>
                    <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur rounded-full text-xs font-medium">
                      {video.views} views
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-gradient transition-all">{video.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{video.format} Format</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-surface/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Explore by Category</h2>
              <p className="text-text-secondary mt-2">Find what's trending in your niche</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['POV / Relatable', 'Educational', 'GRWM', 'Before & After', 'Storytime', 'Debates', 'Transitions', 'Trending Audio'].map((cat, i) => (
                <Link
                  key={i}
                  href="/formats"
                  className="glass rounded-xl p-5 text-center hover:border-primary/50 transition-all group"
                >
                  <span className="font-medium group-hover:text-gradient transition-all">{cat}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
