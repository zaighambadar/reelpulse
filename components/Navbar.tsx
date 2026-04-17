'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, Video, Music, Lightbulb, BarChart3 } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Zap },
  { href: '/videos', label: 'Videos', icon: Video },
  { href: '/trends', label: 'Audio', icon: Music },
  { href: '/formats', label: 'Formats', icon: Lightbulb },
  { href: '/tips', label: 'Tips', icon: BarChart3 },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(26, 26, 46, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ReelPulse</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.625rem 1.25rem',
                    borderRadius: '0.75rem',
                    transition: 'all 0.2s ease',
                    background: isActive ? 'linear-gradient(135deg, #8B5CF6, #EC4899)' : 'transparent',
                    color: isActive ? 'white' : '#94A3B8'
                  }}
                  className="nav-link"
                >
                  <Icon style={{ width: '1rem', height: '1rem' }} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X style={{ width: '1.5rem', height: '1.5rem' }} /> : <Menu style={{ width: '1.5rem', height: '1.5rem' }} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{ padding: '1rem 2rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }} className="mobile-menu">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'linear-gradient(135deg, #8B5CF6, #EC4899)' : 'transparent',
                  color: isActive ? 'white' : '#94A3B8',
                  marginBottom: '0.25rem'
                }}
              >
                <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      <style jsx global>{`
        .desktop-nav {
          display: flex;
        }
        .mobile-menu-btn,
        .mobile-menu {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn,
          .mobile-menu {
            display: block !important;
          }
        }
        .nav-link:hover {
          color: white !important;
          background: rgba(139, 92, 246, 0.2) !important;
        }
      `}</style>
    </nav>
  );
}
