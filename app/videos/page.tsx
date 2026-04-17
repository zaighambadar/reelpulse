'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { trendingVideos } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Video, Eye, Heart, Share2, Play, TrendingUp, ExternalLink } from 'lucide-react';

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Trending Videos</h1>
            </div>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Real examples of what's going viral. Click any video to watch it on Instagram.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Top Performing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trendingVideos.slice(0, 4).map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl overflow-hidden group"
                >
                  <a
                    href={`https://www.instagram.com/reel/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/30 via-surface to-secondary/30 flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur rounded-full text-xs font-semibold">
                        {video.format}
                      </span>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur rounded-full text-xs font-medium flex items-center gap-1">
                          <Eye className="w-3 h-3" /> {video.views}
                        </span>
                        {video.trend === 'rising' && (
                          <span className="px-3 py-1 bg-accent/80 backdrop-blur rounded-full text-xs font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> Rising
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-center mb-2 group-hover:text-gradient transition-all">
                      {video.title}
                    </h3>
                    <p className="text-sm text-text-secondary text-center mb-4">{video.description}</p>
                    
                    <div className="flex items-center justify-center gap-6 text-sm text-text-secondary mb-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> {video.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" /> {video.shares}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-white/5 text-center">
                      <p className="text-sm">
                        <span className="text-primary font-medium">Why it worked:</span>{' '}
                        <span className="text-text-secondary">{video.whyItWorks}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">More Trending Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingVideos.slice(4).map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl overflow-hidden group block"
                >
                  <div className="aspect-[9/16] max-h-72 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
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
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-gradient transition-all">
                      {video.title}
                    </h3>
                    <p className="text-xs text-text-secondary">{video.creatorHandle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold mb-4">How to Use These Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Study the Hook', desc: 'Notice how each video captures attention in the first 1-2 seconds' },
                { title: 'Analyze the Format', desc: 'Each format has specific elements that drive engagement' },
                { title: 'Add Your Twist', desc: 'Take inspiration but add your unique perspective to stand out' }
              ].map((tip, i) => (
                <div key={i} className="bg-surface-light rounded-xl p-4">
                  <h4 className="font-semibold mb-2">{tip.title}</h4>
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
