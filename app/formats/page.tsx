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

      <main className="flex-1 pt-24 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Content Formats</h1>
            </div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Proven formats that consistently go viral. Pick one and create.
            </p>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6 text-secondary" />
              High Engagement
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {highEngagement.map((format, i) => (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-3xl p-8 hover:border-primary/30 transition-all"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-3">{format.name}</h3>
                    <p className="text-base text-text-secondary flex items-center justify-center gap-2">
                      <Target className="w-4 h-4" />
                      Best for: {format.bestFor}
                    </p>
                  </div>

                  <p className="text-text-secondary text-base text-center mb-8 leading-relaxed">{format.description}</p>

                  <ul className="space-y-4 mb-8">
                    {format.tips.map((tip, j) => (
                      <li key={j} className="text-base text-text-secondary flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-white/5 text-center">
                    <p className="text-base text-text-secondary">
                      <span className="text-primary font-semibold">Example:</span> {format.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {mediumEngagement.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                Medium Engagement
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {mediumEngagement.map((format, i) => (
                  <motion.div
                    key={format.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass rounded-3xl p-8 hover:border-primary/30 transition-all"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold mb-3">{format.name}</h3>
                      <p className="text-base text-text-secondary">Best for: {format.bestFor}</p>
                    </div>
                    <p className="text-text-secondary text-base text-center mb-8 leading-relaxed">{format.description}</p>
                    <div className="pt-6 border-t border-white/5 text-center">
                      <p className="text-base text-text-secondary">
                        <span className="text-primary font-semibold">Example:</span> {format.example}
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
