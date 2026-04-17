'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trendingVideos } from '@/lib/trends';
import { motion } from 'framer-motion';
import { ArrowRight, Video, Music, Lightbulb, BarChart3, Play, TrendingUp } from 'lucide-react';

const navItems = [
  { href: '/videos', label: 'Trending Videos', icon: Video },
  { href: '/trends', label: 'Audio Trends', icon: Music },
  { href: '/formats', label: 'Formats', icon: Lightbulb },
  { href: '/tips', label: 'Algorithm', icon: BarChart3 },
];

const thumbnailGradients: { [key: string]: string } = {
  '1': 'from-violet-600 via-purple-600 to-fuchsia-600',
  '2': 'from-emerald-600 via-teal-600 to-cyan-600',
  '3': 'from-rose-500 via-pink-500 to-fuchsia-500',
  '4': 'from-amber-500 via-orange-500 to-red-500',
  '5': 'from-slate-700 via-zinc-700 to-neutral-800',
  '6': 'from-blue-600 via-indigo-600 to-violet-600',
  '7': 'from-pink-600 via-rose-600 to-red-600',
  '8': 'from-cyan-500 via-sky-500 to-blue-500',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="min-h-[90vh] flex items-center px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-10">
                <span className="w-3 h-3 rounded-full bg-secondary pulse-glow" />
                <span className="text-sm text-text-secondary">Live Trending • April 2026</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 leading-tight tracking-tight">
                What's actually
                <br />
                <span className="text-gradient">trending on Reels</span>
              </h1>

              <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed">
                Real data on viral videos, trending audio, and formats that work.
                Updated weekly.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mb-16">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-4 px-8 py-5 glass rounded-2xl hover:border-primary/50 transition-all min-w-[260px] justify-center hover:scale-105"
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                    <span className="font-semibold text-lg group-hover:text-gradient transition-all">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Trending Videos</h2>
              <p className="text-xl text-text-secondary mb-8">Most viral content this week</p>
              <Link
                href="/videos"
                className="inline-flex items-center gap-3 text-lg text-primary hover:text-secondary transition-colors"
              >
                View all videos <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {trendingVideos.slice(0, 4).map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group block"
                >
                  <div className="relative aspect-video rounded-3xl overflow-hidden bg-surface">
                    <div className={`absolute inset-0 bg-gradient-to-br ${thumbnailGradients[video.id]} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/40 transition-all group-hover:scale-110">
                        <Play className="w-9 h-9 lg:w-11 lg:h-11 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-5 left-5 flex gap-3">
                      <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-sm font-semibold">
                        {video.format}
                      </span>
                      {video.trend === 'rising' && (
                        <span className="px-4 py-2 bg-emerald-500/80 backdrop-blur-md rounded-full text-sm font-semibold flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" /> Rising
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-5 right-5 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-sm font-medium">
                      {video.views} views
                    </div>
                    <div className="absolute bottom-5 left-5 right-20">
                      <p className="text-white font-semibold text-lg truncate">{video.title}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Explore by Category</h2>
              <p className="text-xl text-text-secondary">Find what's trending in your niche</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-8">
              {['POV / Relatable', 'Educational', 'GRWM', 'Before & After', 'Storytime', 'Debates', 'Transitions', 'Trending Audio'].map((cat, i) => (
                <Link
                  key={cat}
                  href="/formats"
                  className="group glass rounded-3xl p-8 lg:p-10 text-center hover:border-primary/50 transition-all hover:scale-105"
                >
                  <span className="font-semibold text-lg group-hover:text-gradient transition-all">{cat}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Platform Stats</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
              {[
                { label: 'Daily Plays', value: '200B+', icon: Play },
                { label: 'Audio Boost', value: '+42%', icon: Music },
                { label: 'Shares', value: '4.5B/day', icon: TrendingUp },
                { label: 'ROI Increase', value: '+29%', icon: BarChart3 }
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-3xl p-8 lg:p-10 text-center hover:border-primary/30 transition-all">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-5" />
                  <p className="text-4xl lg:text-5xl font-bold font-mono text-gradient">{stat.value}</p>
                  <p className="text-lg text-text-secondary mt-3">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
