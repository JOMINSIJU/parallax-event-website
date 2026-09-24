// ============================================================================
// PARALLAX — Centralized Event Configuration
// ============================================================================
// All event-specific information lives here. To update the website content,
// modify the values below. No other files need to be changed for content updates.
// ============================================================================

export const EVENT_CONFIG = {
  // ── Core Identity ──────────────────────────────────────────────────────
  name: "PARALLAX",
  type: "Promptathon",
  tagline: "Where Prompts Meet Possibility",
  date: "14 October",
  year: "2025",

  // ── Institution ────────────────────────────────────────────────────────
  institution: {
    name: "Kristu Jayanti Deemed To Be University",
    shortName: "KJDBU",
  },

  // ── Venue ──────────────────────────────────────────────────────────────
  venue: {
    hall: "M1 Auditorium",
    floor: "1st Floor",
    block: "Main Block",
    institution: "Kristu Jayanti Deemed To Be University",
    full: "M1 Auditorium, 1st Floor, Main Block, Kristu Jayanti Deemed To Be University",
  },

  // ── Registration ───────────────────────────────────────────────────────
  // PLACEHOLDER: Replace this URL with the actual registration link
  registrationUrl: "#",

  // ── About Section ──────────────────────────────────────────────────────
  // PLACEHOLDER: Replace with the official event description
  about: {
    title: "What is PARALLAX?",
    paragraphs: [
      "PARALLAX is an electrifying Promptathon that challenges participants to harness the power of AI through creative and strategic prompt engineering. Compete across three intense rounds designed to test your ability to communicate with cutting-edge AI systems.",
      "Whether you're a seasoned prompt engineer or just beginning to explore the world of AI, PARALLAX offers a platform to showcase your skills, learn from peers, and push the boundaries of what's possible with intelligent systems.",
    ],
  },

  // ── Rounds ─────────────────────────────────────────────────────────────
  // PLACEHOLDER: Replace titles and descriptions with official round details
  rounds: [
    {
      number: "01",
      title: "Round Title — Coming Soon",
      description:
        "Round details will be announced soon. Stay tuned for the official brochure with complete round information.",
      tags: ["Details TBA"],
    },
    {
      number: "02",
      title: "Round Title — Coming Soon",
      description:
        "Round details will be announced soon. Stay tuned for the official brochure with complete round information.",
      tags: ["Details TBA"],
    },
    {
      number: "03",
      title: "Round Title — Coming Soon",
      description:
        "Round details will be announced soon. Stay tuned for the official brochure with complete round information.",
      tags: ["Details TBA"],
    },
  ],

  // ── Prizes ─────────────────────────────────────────────────────────────
  // PLACEHOLDER: Replace with official prize information when available
  prizes: {
    status: "coming-soon" as const, // Change to "announced" when prizes are confirmed
    headline: "Prizes — Coming Soon",
    items: [
      {
        place: "1st Place",
        prize: "To Be Announced",
        icon: "🥇",
      },
      {
        place: "2nd Place",
        prize: "To Be Announced",
        icon: "🥈",
      },
      {
        place: "3rd Place",
        prize: "To Be Announced",
        icon: "🥉",
      },
    ],
  },

  // ── Rules & Guidelines ─────────────────────────────────────────────────
  // PLACEHOLDER: Replace with official rules when available
  rules: [
    "Official rules and guidelines will be published soon.",
    "Eligibility requirements will be announced with the official brochure.",
    "Team size and format details are coming soon.",
    "Please check back for updates or follow our announcements.",
  ],

  // ── Contact ────────────────────────────────────────────────────────────
  // PLACEHOLDER: Replace with actual contact details
  contacts: [
    {
      role: "Contact Person 1",
      name: "To Be Announced",
      phone: "—",
      email: "—",
    },
    {
      role: "Contact Person 2",
      name: "To Be Announced",
      phone: "—",
      email: "—",
    },
  ],

  // ── Assets / Logos ─────────────────────────────────────────────────────
  // Replace these paths with actual logo files when provided
  logos: {
    university: "/assets/logos/university-logo.svg",
    parallax: "/assets/logos/parallax-logo.svg",
  },

  // ── Navigation ─────────────────────────────────────────────────────────
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Details", href: "#details" },
    { label: "Rounds", href: "#rounds" },
    { label: "Prizes", href: "#prizes" },
    { label: "Rules", href: "#rules" },
    { label: "Contact", href: "#contact" },
  ],

  // ── SEO / Meta ─────────────────────────────────────────────────────────
  meta: {
    title: "PARALLAX — Promptathon | Kristu Jayanti Deemed To Be University",
    description:
      "PARALLAX is a Promptathon event on 14 October at Kristu Jayanti Deemed To Be University. Compete across three rounds of AI prompt engineering challenges.",
    keywords: [
      "PARALLAX",
      "Promptathon",
      "AI",
      "Prompt Engineering",
      "Kristu Jayanti",
      "University Event",
      "Tech Event",
      "Hackathon",
    ],
    ogImage: "/assets/og-image.png",
  },
} as const;

// ── Type Exports ───────────────────────────────────────────────────────────
export type EventConfig = typeof EVENT_CONFIG;
export type Round = (typeof EVENT_CONFIG.rounds)[number];
export type Prize = (typeof EVENT_CONFIG.prizes.items)[number];
export type Contact = (typeof EVENT_CONFIG.contacts)[number];
export type NavLink = (typeof EVENT_CONFIG.navLinks)[number];
