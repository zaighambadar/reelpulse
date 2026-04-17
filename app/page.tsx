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
        <section className="min-h-[80vh] flex items-center px-8">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-12">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary pulse-glow" />
                <span className="text-sm text-text-secondary">Live • April 2026</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
                What's actually
                <br />
                <span className="text-gradient">trending on Reels</span>
              </h1>

              <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-16 leading-relaxed">
                Real data on viral videos, trending audio, and formats that work.
                Updated weekly.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-24">
                {navItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-4 px-10 py-5 glass rounded-2xl hover:border-primary/50 transition-all min-w-[240px] justify-center"
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="font-medium text-lg group-hover:text-gradient transition-all">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Daily Plays', value: '200B+', icon: Play },
                  { label: 'Audio Boost', value: '+42%', icon: Music },
                  { label: 'Avg. Shares', value: '4.5B/day', icon: Heart },
                  { label: 'ROI Increase', value: '+29%', icon: Eye }
                ].map((stat, i) => (
                  <div key={i} className="glass rounded-2xl p-8 text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold font-mono text-gradient">{stat.value}</p>
                    <p className="text-base text-text-secondary mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Trending Videos</h2>
              <p className="text-lg text-text-secondary mb-6">Most viral content this week</p>
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-lg"
              >
                View all videos <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'POV: Beating procrastination', views: '12.4M', format: 'POV', id: '1' },
                { title: '5 habits that changed my life', views: '8.7M', format: 'Educational', id: '2' },
                { title: 'Room before vs after 30 days', views: '22.1M', format: 'Before/After', id: '3' },
                { title: 'iPhone vs Android users', views: '9.8M', format: 'Debate', id: '4' }
              ].map((video, i) => (
                <a
                  key={i}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-3xl overflow-hidden group cursor-pointer block"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/30 via-surface to-secondary/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                    <span className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-sm font-semibold">
                      {video.format}
                    </span>
                    <span className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-sm font-medium">
                      {video.views} views
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-semibold text-xl text-center mb-3 group-hover:text-gradient transition-all">{video.title}</h3>
                    <p className="text-base text-text-secondary text-center">Tap to watch on Instagram</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-8 bg-surface/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Explore by Category</h2>
              <p className="text-lg text-text-secondary">Find what's trending in your niche</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['POV / Relatable', 'Educational', 'GRWM', 'Before & After', 'Storytime', 'Debates', 'Transitions', 'Trending Audio'].map((cat, i) => (
                <Link
                  key={i}
                  href="/formats"
                  className="glass rounded-2xl p-8 text-center hover:border-primary/50 transition-all group"
                >
                  <span className="font-medium text-lg group-hover:text-gradient transition-all">{cat}</span>
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
