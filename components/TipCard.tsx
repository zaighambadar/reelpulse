'use client';

import { Zap, Share2, Clock, Ban, Calendar, VolumeX, Repeat, Bookmark, AlertCircle, CheckCircle, Info } from 'lucide-react';
import type { AlgorithmTip } from '@/lib/trends';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  'share-2': Share2,
  clock: Clock,
  ban: Ban,
  calendar: Calendar,
  'volume-x': VolumeX,
  repeat: Repeat,
  bookmark: Bookmark
};

const priorityConfig = {
  critical: { color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/30', label: 'Critical' },
  important: { color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/30', label: 'Important' },
  nice: { color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30', label: 'Nice to Have' }
};

export default function TipCard({ tip, index }: { tip: AlgorithmTip; index: number }) {
  const config = priorityConfig[tip.priority];
  const Icon = iconMap[tip.icon] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`glass rounded-xl p-5 border ${config.border} hover:scale-[1.02] transition-transform`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${config.color}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold">{tip.title}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}>
              {config.label}
            </span>
          </div>
          <p className="text-sm text-text-secondary">{tip.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
