'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { trendingVideos } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Video, Eye, Heart, Share2, Play, TrendingUp, Clock, Filter } from 'lucide-react';

export default function VideosPage() {
  const topVideos = trendingVideos.slice(0, 4);
  const allVideos = trendingVideos;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Trending Videos</h1>
            </div>
            <p className="text-text-secondary text-lg">
              Real examples of what's going viral. Study what works and replicate it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-4 h-4 text-text-secondary" />
              <span className="text-sm font-medium">Filter by format:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', 'POV', 'Educational', 'GRWM', 'Before & After', 'Storytime', 'Debate', 'Transitions'].map((filter, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    i === 0
                      ? 'bg-gradient-primary text-white'
                      : 'bg-surface-light text-text-secondary hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              Top Performing This Week
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/30 via-surface to-secondary/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur rounded-full text-xs font-semibold">
                      {video.format}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur rounded-full text-xs font-medium flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {video.views} views
                      </span>
                      {video.trend === 'rising' && (
                        <span className="px-3 py-1 bg-accent/80 backdrop-blur rounded-full text-xs font-medium flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Rising
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-all">
                      {video.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">{video.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> {video.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" /> {video.shares}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {video.format}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <p className="text-sm">
                        <span className="text-primary font-medium">Why it worked:</span>{' '}
                        <span className="text-text-secondary">{video.whyItWorks}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">All Trending Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-[9/16] max-h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur rounded-full text-xs font-medium">
                      {video.format}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur rounded-full text-xs font-medium">
                      {video.views}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-gradient transition-all">
                      {video.title}
                    </h3>
                    <p className="text-xs text-text-secondary">{video.creatorHandle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-4">How to Use These Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Study the Hook', desc: 'Notice how each video captures attention in the first 1-2 seconds' },
                { title: 'Analyze the Format', desc: 'Each format has specific structural elements that drive engagement' },
                { title: 'Add Your Twist', desc: 'Take inspiration but add your unique perspective to stand out' }
              ].map((tip, i) => (
                <div key={i} className="bg-surface-light rounded-xl p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {tip.title}
                  </h4>
                  <p className="text-sm text-text-secondary">{tip.desc}</p>
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
