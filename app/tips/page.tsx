'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { algorithmTips, postingTimes } from '@/lib/trends';
import { motion } from 'framer-motion';
import { BarChart3, Clock, MapPin, CheckCircle2, Zap, Share2, AlertCircle } from 'lucide-react';

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

      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Algorithm Tips</h1>
            </div>
            <p className="text-text-secondary text-lg">
              What actually matters for the 2026 algorithm. Focus on what moves the needle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-bold mb-4 text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Critical (Must Follow)
                </h2>
                <div className="space-y-3">
                  {critical.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass rounded-xl p-5 border-secondary/30"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{tip.title}</h3>
                            <p className="text-sm text-text-secondary">{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Important
                </h2>
                <div className="space-y-3">
                  {important.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass rounded-xl p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{tip.title}</h3>
                            <p className="text-sm text-text-secondary">{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Nice to Have
                </h2>
                <div className="space-y-3">
                  {nice.map((tip, i) => {
                    const Icon = iconMap[tip.icon] || Zap;
                    return (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass rounded-xl p-5 opacity-80"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{tip.title}</h3>
                            <p className="text-sm text-text-secondary">{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-xl p-6 sticky top-24"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Best Times (US)</h3>
                </div>
                <div className="space-y-2">
                  {postingTimes.us.map((day, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0">
                      <span className="text-text-secondary">{day.day}</span>
                      <span className="font-medium text-accent">{day.peak}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="font-bold mb-4">Quick Checklist</h3>
                <div className="space-y-2">
                  {[
                    'Hook in 1.5 sec',
                    'Use trending audio',
                    'Add on-screen text',
                    'End with CTA',
                    'Post 4-7x/week'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
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
