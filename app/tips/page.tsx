'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { algorithmTips, postingTimes } from '@/lib/trends';
import { motion } from 'framer-motion';
import { BarChart3, Clock, CheckCircle2, Zap, Share2, AlertCircle } from 'lucide-react';

export default function TipsPage() {
  const critical = algorithmTips.filter(t => t.priority === 'critical');
  const important = algorithmTips.filter(t => t.priority === 'important');
  const nice = algorithmTips.filter(t => t.priority === 'nice');

  const iconMap: Record<string, React.ElementType> = {
    zap: Zap,
    'share-2': Share2,
    clock: Clock,
    ban: AlertCircle,
    calendar: Clock,
    'volume-x': AlertCircle,
    repeat: Zap,
    bookmark: CheckCircle2
  };

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
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Algorithm Tips</h1>
            </div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              What actually matters for the 2026 algorithm. Focus on what moves the needle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-bold mb-6 text-secondary text-center">
                  Critical (Must Follow)
                </h2>
                <div className="space-y-4">
                  {critical.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass rounded-2xl p-6 border-secondary/30"
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                            <p className="text-base text-text-secondary leading-relaxed">{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-6 text-accent text-center">
                  Important
                </h2>
                <div className="space-y-4">
                  {important.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass rounded-2xl p-6"
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                            <p className="text-base text-text-secondary leading-relaxed">{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-6 text-primary text-center">
                  Nice to Have
                </h2>
                <div className="space-y-4">
                  {nice.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass rounded-2xl p-6 opacity-80"
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                            <p className="text-base text-text-secondary leading-relaxed">{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-8 sticky top-24"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">Best Times (US)</h3>
                </div>
                <div className="space-y-3">
                  {postingTimes.us.map((day, i) => (
                    <div key={i} className="flex items-center justify-between text-base py-3 border-b border-white/5 last:border-0">
                      <span className="text-text-secondary">{day.day}</span>
                      <span className="font-semibold text-accent">{day.peak}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="font-bold text-lg text-center mb-6">Quick Checklist</h3>
                <div className="space-y-4">
                  {[
                    'Hook in 1.5 sec',
                    'Use trending audio',
                    'Add on-screen text',
                    'End with CTA',
                    'Post 4-7x/week'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-base">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
