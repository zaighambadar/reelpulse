'use client';

import { TrendingUp, TrendingDown, Lightbulb, Target, ArrowRight } from 'lucide-react';
import type { ContentFormat } from '@/lib/trends';
import { motion } from 'framer-motion';

export default function FormatCard({ format, index }: { format: ContentFormat; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg group-hover:text-gradient transition-all">{format.name}</h3>
            <p className="text-sm text-text-secondary flex items-center gap-1">
              <Target className="w-3 h-3" />
              Best for: {format.bestFor}
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
          format.engagement === 'high' ? 'bg-secondary/10' : 'bg-accent/10'
        }`}>
          {format.engagement === 'high' ? (
            <TrendingUp className="w-4 h-4 text-secondary" />
          ) : (
            <TrendingDown className="w-4 h-4 text-accent" />
          )}
          <span className={`text-xs font-medium ${
            format.engagement === 'high' ? 'text-secondary' : 'text-accent'
          }`}>
            {format.engagement === 'high' ? 'High' : 'Medium'} Engagement
          </span>
        </div>
      </div>

      <p className="text-text-secondary mb-4">{format.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Pro Tips:</h4>
        <ul className="space-y-1">
          {format.tips.map((tip, i) => (
            <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-white/5">
        <p className="text-xs text-text-secondary">
          <span className="text-primary font-medium">Example:</span> {format.example}
        </p>
      </div>
    </motion.div>
  );
}
