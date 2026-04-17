import Link from 'next/link';
import { Zap, Globe, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ReelPulse</span>
            </div>
            <p style={{ color: '#94A3B8', maxWidth: '400px', lineHeight: 1.6 }}>
              Your go-to resource for Instagram Reels trends, trending audio, and viral content strategies.
              Stay ahead of the algorithm and grow your presence in 2026.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1rem',
                  borderRadius: '0.75rem',
                  background: '#252542',
                  transition: 'all 0.2s ease'
                }}
              >
                <Globe style={{ width: '1rem', height: '1rem', color: '#94A3B8' }} />
                <span style={{ fontSize: '0.875rem', color: '#94A3B8' }}>GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1rem',
                  borderRadius: '0.75rem',
                  background: '#252542',
                  transition: 'all 0.2s ease'
                }}
              >
                <ExternalLink style={{ width: '1rem', height: '1rem', color: '#94A3B8' }} />
                <span style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.25rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Home</Link></li>
              <li><Link href="/trends" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Trending Audio</Link></li>
              <li><Link href="/formats" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Content Formats</Link></li>
              <li><Link href="/tips" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Algorithm Tips</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.25rem' }}>Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Instagram Creator Guide</a></li>
              <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Analytics Dashboard</a></li>
              <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Content Calendar</a></li>
              <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
            Made with <Heart style={{ width: '1rem', height: '1rem', display: 'inline', color: '#EC4899' }} /> for content creators
          </p>
          <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
            Updated weekly for April 2026
          </p>
        </div>
      </div>

      <style jsx global>{`
        .footer-link:hover {
          color: white !important;
        }
      `}</style>
    </footer>
  );
}
