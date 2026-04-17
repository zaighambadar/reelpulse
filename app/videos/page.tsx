'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trendingVideos } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Video, Eye, Heart, Share2, Play, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

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

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Trending Videos</h1>
            </div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Real examples of what's going viral. Click any video to watch it on Instagram.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Top Performing</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {trendingVideos.slice(0, 4).map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group block glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:scale-[1.02]"
                >
                  <div className="relative aspect-video">
                    <div className={`absolute inset-0 bg-gradient-to-br ${thumbnailGradients[video.id]} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/40 transition-all group-hover:scale-110">
                        <Play className="w-10 h-10 text-white ml-1" />
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
                    <div className="absolute bottom-5 right-5 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-sm font-medium flex items-center gap-2">
                      <Eye className="w-4 h-4" /> {video.views}
                    </div>
                    <div className="absolute bottom-5 left-5 right-20">
                      <p className="text-white font-semibold text-lg truncate">{video.title}</p>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-gradient transition-all">
                          {video.title}
                        </h3>
                        <p className="text-base text-text-secondary">{video.creator}</p>
                      </div>
                      <div className="flex gap-4 text-base text-text-secondary shrink-0">
                        <span className="flex items-center gap-2">
                          <Heart className="w-5 h-5" /> {video.likes}
                        </span>
                        <span className="flex items-center gap-2">
                          <Share2 className="w-5 h-5" /> {video.shares}
                        </span>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-base text-text-secondary mb-3">{video.description}</p>
                      <p className="text-base">
                        <span className="text-primary font-semibold">Why it worked:</span>{' '}
                        <span className="text-text-secondary">{video.whyItWorks}</span>
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">More Trending Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {trendingVideos.slice(4).map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://www.instagram.com/reel/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group block glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:scale-[1.02]"
                >
                  <div className="relative aspect-[9/16] max-h-96">
                    <div className={`absolute inset-0 bg-gradient-to-br ${thumbnailGradients[video.id]} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/40 transition-all group-hover:scale-110">
                        <Play className="w-8 h-8 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold">
                        {video.format}
                      </span>
                      {video.trend === 'rising' && (
                        <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-md rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
                          <TrendingUp className="w-3 h-3" /> Rising
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium">
                        {video.views}
                      </span>
                    </div>
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
            className="mt-24 glass rounded-3xl p-10 lg:p-14"
          >
            <h3 className="text-2xl font-bold mb-10 text-center">How to Use These Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Study the Hook', desc: 'Notice how each video captures attention in the first 1-2 seconds', icon: Target },
                { title: 'Analyze the Format', desc: 'Each format has specific elements that drive engagement', icon: Sparkles },
                { title: 'Add Your Twist', desc: 'Take inspiration but add your unique perspective to stand out', icon: Zap }
              ].map((tip, i) => (
                <div key={i} className="bg-surface-light rounded-2xl p-8 text-center">
                  <tip.icon className="w-10 h-10 text-primary mx-auto mb-4" />
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
