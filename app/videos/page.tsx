'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { trendingVideos } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Video, Eye, Heart, Share2, Play, TrendingUp } from 'lucide-react';

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Trending Videos</h1>
            </div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Real examples of what's going viral. Click any video to watch it on Instagram.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Top Performing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {trendingVideos.slice(0, 4).map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-3xl overflow-hidden group"
                >
                  <a
                    href={`https://www.instagram.com/reel/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
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
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <span className="px-4 py-2 bg-black/60 backdrop-blur rounded-full text-sm font-medium flex items-center gap-2">
                          <Eye className="w-4 h-4" /> {video.views}
                        </span>
                        {video.trend === 'rising' && (
                          <span className="px-4 py-2 bg-accent/80 backdrop-blur rounded-full text-sm font-medium flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> Rising
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                  <div className="p-10">
                    <h3 className="font-semibold text-xl text-center mb-4 group-hover:text-gradient transition-all">
                      {video.title}
                    </h3>
                    <p className="text-base text-text-secondary text-center mb-6">{video.description}</p>
                    
                    <div className="flex items-center justify-center gap-10 text-base text-text-secondary mb-6">
                      <span className="flex items-center gap-2">
                        <Heart className="w-5 h-5" /> {video.likes}
                      </span>
                      <span className="flex items-center gap-2">
                        <Share2 className="w-5 h-5" /> {video.shares}
                      </span>
                    </div>

                    <div className="pt-6 border-t border-white/5 text-center">
                      <p className="text-base">
                        <span className="text-primary font-semibold">Why it worked:</span>{' '}
                        <span className="text-text-secondary">{video.whyItWorks}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">More Trending Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trendingVideos.slice(4).map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl overflow-hidden group block"
                >
                  <div className="aspect-[9/16] max-h-80 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur rounded-full text-xs font-medium">
                      {video.format}
                    </span>
                    <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur rounded-full text-xs font-medium">
                      {video.views}
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-medium text-base mb-2 line-clamp-2 group-hover:text-gradient transition-all">
                      {video.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{video.creatorHandle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 glass rounded-3xl p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-8">How to Use These Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Study the Hook', desc: 'Notice how each video captures attention in the first 1-2 seconds' },
                { title: 'Analyze the Format', desc: 'Each format has specific elements that drive engagement' },
                { title: 'Add Your Twist', desc: 'Take inspiration but add your unique perspective to stand out' }
              ].map((tip, i) => (
                <div key={i} className="bg-surface-light rounded-2xl p-6">
                  <h4 className="font-semibold text-lg mb-3">{tip.title}</h4>
                  <p className="text-base text-text-secondary">{tip.desc}</p>
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
