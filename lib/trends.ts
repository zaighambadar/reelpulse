export interface TrendingAudio {
  id: number;
  title: string;
  artist: string;
  posts: string;
  trend: 'rising' | 'peak' | 'declining';
  category: string;
  bestFor: string[];
}

export interface ContentFormat {
  id: number;
  name: string;
  description: string;
  engagement: 'high' | 'medium';
  bestFor: string;
  tips: string[];
  example: string;
}

export interface AlgorithmTip {
  id: number;
  title: string;
  description: string;
  icon: string;
  priority: 'critical' | 'important' | 'nice';
}

export const trendingAudio: TrendingAudio[] = [
  {
    id: 1,
    title: "Loving Life Again",
    artist: "Ella Langley",
    posts: "31K",
    trend: 'rising',
    category: 'Country Pop',
    bestFor: ['Lifestyle', 'Self-improvement', 'Morning routines']
  },
  {
    id: 2,
    title: "Spring Is Coming",
    artist: "Morunas",
    posts: "526K",
    trend: 'peak',
    category: 'Seasonal',
    bestFor: ['Travel', 'Nature', 'Seasonal content']
  },
  {
    id: 3,
    title: "DtMF",
    artist: "Various Artists",
    posts: "890K",
    trend: 'peak',
    category: 'Electronic',
    bestFor: ['Dance', 'Workout', 'High-energy content']
  },
  {
    id: 4,
    title: "World Stop!",
    artist: "@browsbyzulema",
    posts: "3.5K",
    trend: 'rising',
    category: 'Original Audio',
    bestFor: ['Storytelling', 'GRWM', 'Day-in-life']
  },
  {
    id: 5,
    title: "Lucky",
    artist: "Britney Spears",
    posts: "215K",
    trend: 'peak',
    category: 'Nostalgia',
    bestFor: ['Throwback', 'Fashion', 'Aesthetic']
  },
  {
    id: 6,
    title: "Someday We Will Dream About Today",
    artist: "@theswaysmusic",
    posts: "89K",
    trend: 'rising',
    category: 'Indie',
    bestFor: ['Reflection', 'Aesthetic', 'Moody content']
  },
  {
    id: 7,
    title: "FEVER DREAM",
    artist: "Alex Warren",
    posts: "156K",
    trend: 'peak',
    category: 'Trending',
    bestFor: ['Comedy', 'POV', 'Relatable']
  },
  {
    id: 8,
    title: "Money Maker",
    artist: "Ludacris ft. Pharrell",
    posts: "78K",
    trend: 'declining',
    category: 'Hip Hop',
    bestFor: ['Flex', 'Business', 'Success content']
  },
  {
    id: 9,
    title: "Ignoring Calls",
    artist: "@ourfiscusfamily",
    posts: "45K",
    trend: 'rising',
    category: 'Comedy',
    bestFor: ['Comedy sketches', 'Relatable', 'Storytime']
  },
  {
    id: 10,
    title: "Break My Stride",
    artist: "Matthew Wilder",
    posts: "112K",
    trend: 'peak',
    category: 'Retro',
    bestFor: ['Motivation', 'Workout', 'Transitions']
  }
];

export const contentFormats: ContentFormat[] = [
  {
    id: 1,
    name: "POV / Types Of",
    description: "Relatable scenarios that make viewers say 'That's so me!' Perfect for shares and saves.",
    engagement: 'high',
    bestFor: 'Shares & Saves',
    tips: [
      'Start with a relatable hook in first 2 seconds',
      'Use the phrase "Types of people" or "POV:"',
      'Include 3-5 distinct scenarios',
      'End with a punchline or relatable twist'
    ],
    example: '"Types of people at the grocery store" or "POV: you finally beat procrastination"'
  },
  {
    id: 2,
    name: "Educational Listicles",
    description: "Quick tips or facts delivered in a numbered format. High save rate due to reference value.",
    engagement: 'high',
    bestFor: 'Saves & Authority',
    tips: [
      'Lead with a bold claim or surprising fact',
      'Keep to 5-7 items max',
      'Use on-screen text for each point',
      'Add a call-to-action for saves'
    ],
    example: '"5 habits that changed my life" or "Things you never knew about..."'
  },
  {
    id: 3,
    name: "GRWM (Get Ready With Me)",
    description: "Classic day-in-life format. Works for any niche from beauty to coding.",
    engagement: 'high',
    bestFor: 'Connection & Views',
    tips: [
      'Film in vertical format with good lighting',
      'Talk throughout the process',
      'Include product/tool mentions',
      'Add trending audio for reach'
    ],
    example: '"Get ready with me for a job interview" or "GRWM: Sunday reset routine"'
  },
  {
    id: 4,
    name: "Before & After",
    description: "Transformation content that showcases dramatic change. High completion rate.",
    engagement: 'high',
    bestFor: 'Watch Time & Shares',
    tips: [
      "Make the 'before' genuinely unappealing",
      'Speed up the process (2x speed works)',
      'End with satisfying reveal',
      'Use trending transition effects'
    ],
    example: '"My messy room vs. organized room" or "Before & after learning to code"'
  },
  {
    id: 5,
    name: "Storytime / Storytimes",
    description: "Narrative-driven content that builds suspense. Keeps viewers hooked to the end.",
    engagement: 'high',
    bestFor: 'Watch Time & Comments',
    tips: [
      'Start mid-action for intrigue',
      'Build suspense in the middle',
      'Deliver the payoff at the end',
      'Use sound effects for drama'
    ],
    example: '"The scariest moment of my life..." or "I made a mistake at work and..."'
  },
  {
    id: 6,
    name: "Trending Audio Participation",
    description: "Using trending sounds with your own twist. Fastest path to algorithmic distribution.",
    engagement: 'high',
    bestFor: 'Reach & Discovery',
    tips: [
      'Use audio within first 48 hours of trending',
      'Put your unique spin on the trend',
      'Jump on trends early for maximum reach',
      'Never repost TikToks directly'
    ],
    example: '"Duet this if you... " or using trending sounds with your niche'
  },
  {
    id: 7,
    name: "Multi-Person Debate",
    description: "Two viewpoints discussing a topic. Great for engagement and comments.",
    engagement: 'high',
    bestFor: 'Comments & Shares',
    tips: [
      'Use two distinct perspectives',
      'Keep each point short and punchy',
      'End with a question for comments',
      'Switch positions/angles for interest'
    ],
    example: '"Hot takes: morning people vs. night owls" or "Unpopular opinions about..."'
  },
  {
    id: 8,
    name: "Stomp to Reveal",
    description: 'Dramatic transition where you stomp/jump and the frame reveals something new.',
    engagement: 'medium',
    bestFor: 'Views & Entertainment',
    tips: [
      'Start with horizontal or unexpected angle',
      'Stomp or jump creates the shift',
      'Reveal text or product in background',
      'Use bold, attention-grabbing audio'
    ],
    example: '"When the new drop arrives..." or product reveal transitions'
  }
];

export const algorithmTips: AlgorithmTip[] = [
  {
    id: 1,
    title: "Hook in 1.5 Seconds",
    description: "Viewers decide to watch or scroll within 1.5 seconds. Your opening frame MUST capture attention instantly.",
    icon: "zap",
    priority: "critical"
  },
  {
    id: 2,
    title: "DM Shares = Gold",
    description: "Direct message shares are the highest-weighted signal. Create content people want to send to friends.",
    icon: "share-2",
    priority: "critical"
  },
  {
    id: 3,
    title: "30-60 Second Sweet Spot",
    description: "Optimal length is 30-60 seconds. Long enough for value, short enough for completion.",
    icon: "clock",
    priority: "critical"
  },
  {
    id: 4,
    title: "No TikTok Watermarks",
    description: "Instagram actively deprioritizes content with competitor watermarks. Always remove them.",
    icon: "ban",
    priority: "important"
  },
  {
    id: 5,
    title: "Post 4-7 Times Weekly",
    description: "Consistency matters more than perfection. The algorithm rewards regular creators.",
    icon: "calendar",
    priority: "important"
  },
  {
    id: 6,
    title: "Design for Sound-Off",
    description: "40% of Reels are watched without sound. Always include on-screen text.",
    icon: "volume-x",
    priority: "important"
  },
  {
    id: 7,
    title: "Create Loops",
    description: "Reels that naturally loop back to the start get 2.3x more watch time. Structure your ending to flow back to the beginning.",
    icon: "repeat",
    priority: "nice"
  },
  {
    id: 8,
    title: "Save-Worthy Content",
    description: "Saves signal high value to the algorithm. Create content people want to bookmark for later.",
    icon: "bookmark",
    priority: "nice"
  }
];

export const postingTimes = {
  us: [
    { day: "Monday", times: ["11 AM", "1 PM"], peak: "1 PM" },
    { day: "Tuesday", times: ["9 AM", "12 PM", "7 PM"], peak: "12 PM" },
    { day: "Wednesday", times: ["11 AM", "1 PM"], peak: "11 AM" },
    { day: "Thursday", times: ["12 PM", "7 PM", "9 PM"], peak: "7 PM" },
    { day: "Friday", times: ["9 AM", "1 PM", "3 PM"], peak: "1 PM" },
    { day: "Saturday", times: ["9 AM", "11 AM"], peak: "11 AM" },
    { day: "Sunday", times: ["10 AM", "2 PM", "7 PM"], peak: "7 PM" }
  ],
  europe: [
    { day: "Monday", times: ["12 PM", "3 PM"], peak: "3 PM" },
    { day: "Tuesday", times: ["10 AM", "2 PM", "8 PM"], peak: "2 PM" },
    { day: "Wednesday", times: ["12 PM", "2 PM"], peak: "12 PM" },
    { day: "Thursday", times: ["1 PM", "8 PM", "10 PM"], peak: "8 PM" },
    { day: "Friday", times: ["10 AM", "2 PM", "4 PM"], peak: "2 PM" },
    { day: "Saturday", times: ["10 AM", "12 PM"], peak: "12 PM" },
    { day: "Sunday", times: ["11 AM", "3 PM", "8 PM"], peak: "8 PM" }
  ]
};

export const stats = {
  dailyReelsPlays: "200B+",
  engagementBoost: "42%",
  roiIncrease: "29%",
  dailyReshared: "4.5B"
};
