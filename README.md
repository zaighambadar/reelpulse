# ReelPulse - Instagram Reels Trend Tracker

A modern, sleek website that tracks the hottest Instagram Reels trends, trending audio, and viral content formats in real-time. Built with Next.js, Tailwind CSS, and deployed on Vercel.

## Features

- **Trending Audio** - Real-time tracking of trending sounds with lifecycle indicators
- **Viral Formats** - Proven content formats that consistently outperform
- **Algorithm Tips** - Deep dive into the 2026 Instagram algorithm
- **Best Times to Post** - Optimal posting windows for US and Europe
- **Dark Mode UI** - Beautiful glassmorphism design with gradient accents

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Repository**: GitHub

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/reelpulse.git
cd reelpulse

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import the project on Vercel
3. Vercel will automatically detect Next.js and deploy

## Project Structure

```
reelpulse/
├── app/
│   ├── page.tsx           # Homepage
│   ├── trends/page.tsx    # Trending audio page
│   ├── formats/page.tsx   # Content formats page
│   ├── tips/page.tsx      # Algorithm tips page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AnimatedBackground.tsx
│   ├── TrendCard.tsx
│   ├── FormatCard.tsx
│   └── TipCard.tsx
├── lib/
│   └── trends.ts          # Trend data
├── public/
│   └── favicon.svg
└── package.json
```

## Content

The website features:

- **10 trending audio tracks** with post counts and trend lifecycle
- **8 viral content formats** with pro tips and examples
- **8 algorithm tips** categorized by priority
- **Posting times** for US and Europe audiences

All content is based on current Instagram Reels trends for April 2026.

## License

MIT License - feel free to use this project for learning and inspiration.

---

Made with ❤️ for content creators
