import Link from 'next/link';
import { Zap, Globe, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">ReelPulse</span>
            </div>
            <p className="text-text-secondary max-w-md leading-relaxed">
              Your go-to resource for Instagram Reels trends, trending audio, and viral content strategies.
              Stay ahead of the algorithm and grow your presence in 2026.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-light hover:bg-primary/20 transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-text-secondary" />
                <span className="text-sm text-text-secondary">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-light hover:bg-primary/20 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-text-secondary" />
                <span className="text-sm text-text-secondary">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/trends" className="text-text-secondary hover:text-white transition-colors">Trending Audio</Link></li>
              <li><Link href="/formats" className="text-text-secondary hover:text-white transition-colors">Content Formats</Link></li>
              <li><Link href="/tips" className="text-text-secondary hover:text-white transition-colors">Algorithm Tips</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Instagram Creator Guide</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Content Calendar</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            Made with <Heart className="w-4 h-4 inline text-secondary" /> for content creators
          </p>
          <p className="text-text-secondary text-sm">
            Updated weekly for April 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
