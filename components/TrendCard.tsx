'use client';

import { TrendingUp, TrendingDown, Minus, Music, ArrowUpRight } from 'lucide-react';
import type { TrendingAudio } from '@/lib/trends';
import { motion } from 'framer-motion';

export default function TrendCard({ audio, index }: { audio: TrendingAudio; index: number }) {
  const trendIcon = audio.trend === 'rising' ? TrendingUp : audio.trend === 'peak' ? ArrowUpRight : TrendingDown;
  const trendColor = audio.trend === 'rising' ? 'text-accent' : audio.trend === 'peak' ? 'text-secondary' : 'text-text-secondary';
  const trendBg = audio.trend === 'rising' ? 'bg-accent/10' : audio.trend === 'peak' ? 'bg-secondary/10' : 'bg-surface-light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold group-hover:text-gradient transition-all">{audio.title}</h3>
            <p className="text-sm text-text-secondary">{audio.artist}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trendBg}`}>
          {(() => {
            const Icon = trendIcon;
            return <Icon className={`w-4 h-4 ${trendColor}`} />;
          })()}
          <span className={`text-xs font-medium ${trendColor}`}>
            {audio.trend === 'rising' ? 'Rising' : audio.trend === 'peak' ? 'Hot' : 'Cooling'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-2xl font-bold font-mono text-gradient">{audio.posts}</p>
          <p className="text-xs text-text-secondary">posts using this sound</p>
        </div>
        <span className="px-3 py-1 bg-surface-light rounded-full text-xs text-text-secondary">
          {audio.category}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {audio.bestFor.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-primary/10 rounded-md text-xs text-primary">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
