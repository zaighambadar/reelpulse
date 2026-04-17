'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { contentFormats } from '@/lib/trends';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target, Check } from 'lucide-react';

export default function FormatsPage() {
  const highEngagement = contentFormats.filter(f => f.engagement === 'high');
  const mediumEngagement = contentFormats.filter(f => f.engagement === 'medium');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedBackground />

      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Content Formats</h1>
            </div>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Proven formats that consistently go viral. Pick one and create.
            </p>
          </motion.div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              High Engagement
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {highEngagement.map((format, i) => (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold mb-1">{format.name}</h3>
                    <p className="text-sm text-text-secondary flex items-center justify-center gap-1">
                      <Target className="w-3 h-3" />
                      Best for: {format.bestFor}
                    </p>
                  </div>

                  <p className="text-text-secondary text-sm text-center mb-4">{format.description}</p>

                  <ul className="space-y-2 mb-4">
                    {format.tips.map((tip, j) => (
                      <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/5 text-center">
                    <p className="text-xs text-text-secondary">
                      <span className="text-primary font-medium">Example:</span> {format.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {mediumEngagement.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Medium Engagement
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mediumEngagement.map((format, i) => (
                  <motion.div
                    key={format.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass rounded-xl p-6 hover:border-primary/30 transition-all"
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold mb-1">{format.name}</h3>
                      <p className="text-sm text-text-secondary">Best for: {format.bestFor}</p>
                    </div>
                    <p className="text-text-secondary text-sm text-center mb-4">{format.description}</p>
                    <div className="pt-4 border-t border-white/5 text-center">
                      <p className="text-xs text-text-secondary">
                        <span className="text-primary font-medium">Example:</span> {format.example}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
