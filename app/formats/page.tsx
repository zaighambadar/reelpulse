'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import FormatCard from '@/components/FormatCard';
import { contentFormats } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';

export default function FormatsPage() {
  const highEngagement = contentFormats.filter(f => f.engagement === 'high');
  const mediumEngagement = contentFormats.filter(f => f.engagement === 'medium');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Lightbulb className="w-4 h-4 text-secondary" />
              <span className="text-sm text-text-secondary">Proven Formats</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Viral <span className="text-gradient">Content Formats</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              These formats consistently outperform on the 2026 algorithm.
              Each one is optimized for specific engagement signals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {[
              { icon: TrendingUp, label: 'High Engagement', value: highEngagement.length, color: 'secondary' },
              { icon: Target, label: 'Medium Engagement', value: mediumEngagement.length, color: 'accent' },
              { icon: Lightbulb, label: 'Total Formats', value: contentFormats.length, color: 'primary' }
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-6 text-center">
                <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-3`} />
                <p className="text-3xl font-bold font-mono text-gradient">{stat.value}</p>
                <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-secondary" />
              <div>
                <h2 className="text-2xl font-bold">High Engagement Formats</h2>
                <p className="text-sm text-text-secondary">These formats consistently drive shares, saves, and watch time</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {highEngagement.map((format, i) => (
                <FormatCard key={format.id} format={format} index={i} />
              ))}
            </div>
          </div>

          {mediumEngagement.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 rounded-full bg-accent" />
                <div>
                  <h2 className="text-2xl font-bold">Medium Engagement Formats</h2>
                  <p className="text-sm text-text-secondary">Still effective, especially for specific niches</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mediumEngagement.map((format, i) => (
                  <FormatCard key={format.id} format={format} index={i + highEngagement.length} />
                ))}
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Format Selection Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { goal: 'Maximize Shares', formats: ['POV / Types Of', 'Multi-Person Debate', 'Storytime'] },
                { goal: 'Maximize Saves', formats: ['Educational Listicles', 'Tutorial / How-To', 'Before & After'] },
                { goal: 'Maximize Watch Time', formats: ['Storytime', 'GRWM', 'Storytelling'] },
                { goal: 'Maximize Reach', formats: ['Trending Audio', 'POV', 'Transitions'] }
              ].map((guide, i) => (
                <div key={i} className="bg-surface-light rounded-xl p-4">
                  <h4 className="font-semibold text-secondary mb-3">{guide.goal}</h4>
                  <ul className="space-y-2">
                    {guide.formats.map((format, j) => (
                      <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {format}
                      </li>
                    ))}
                  </ul>
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
