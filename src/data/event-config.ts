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
  tagline: "Decode, Recreate, Create.",
  date: "16th October",
  year: "2026",
  fullEventLine: "Inter Collegiate Promptathon Fest on 16th October 2026",

  // ── Institution ────────────────────────────────────────────────────────
  institution: {
    name: "Kristu Jayanti Deemed To Be University",
    shortName: "KJDBU",
    school: "School of Computational and Physical Sciences",
    department: "Department of Computational Studies",
  },

  // ── Club ────────────────────────────────────────────────────────────────
  club: {
    name: "AIVORA",
    tagline: "AI & Machine Learning Club",
    description: [
      "Aivora is the AI and Machine Learning Club of the School of Computational and Physical Sciences, Department of Computational Studies at Kristu Jayanti Deemed to be University, created to bring together students passionate about Artificial Intelligence, Machine Learning, and emerging technologies.",
      "Through technical events, workshops, competitions, research initiatives, and hands-on learning, Aivora provides a platform for students to learn, experiment, collaborate, and build with AI.",
    ],
  },

  // ── Venue ──────────────────────────────────────────────────────────────
  venue: {
    hall: "M1 Auditorium",
    floor: "First Floor",
    block: "Science Block 1",
    campus: "Central Campus",
    area: "K Narayanapura, Bangalore",
    institution: "Kristu Jayanti Deemed To Be University",
    full: "M1 Auditorium, First Floor, Science Block 1, Central Campus, K Narayanapura, Bangalore",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1726553029207!2d77.64949!3d13.06847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19555555555%3A0x70db5363b0d3cc9c!2sKristu%20Jayanti%20College!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin",
    mapUrl: "https://maps.google.com/?q=Kristu+Jayanti+College+Bangalore",
  },

  // ── Registration ───────────────────────────────────────────────────────
  // PLACEHOLDER: Replace this URL with the actual registration link
  registrationUrl: "#",

  // ── Brochure ───────────────────────────────────────────────────────────
  // PLACEHOLDER: Replace with the actual brochure PDF URL
  brochureUrl: "#",

  // ── About Section ──────────────────────────────────────────────────────
  about: {
    title: "What is PARALLAX?",
    paragraphs: [
      "PARALLAX is a Generative AI and Prompt Engineering competition that challenges participants to think beyond conventional approaches. Compete across three intense rounds designed to test your ability to communicate with cutting-edge AI systems.",
      "Whether you're a seasoned prompt engineer or just beginning to explore the world of AI, PARALLAX offers a platform to showcase your skills, learn from peers, and push the boundaries of what's possible with intelligent systems.",
    ],
  },

  // ── Rounds ─────────────────────────────────────────────────────────────
  rounds: [
    {
      number: "01",
      title: "Cipher",
      description:
        "One idea, two minds, one chain of prompts. Interpret, transform, and communicate an idea through AI without ever seeing the original prompt.",
      tags: ["Teamwork", "Prompt Chaining", "Communication"],
    },
    {
      number: "02",
      title: "Aperture",
      description:
        "Think within limits, create beyond them, build powerful prompts while navigating unexpected twists.",
      tags: ["Creativity", "Constraints", "Adaptability"],
    },
    {
      number: "03",
      title: "Catalyst",
      description:
        "Turn a real-world problem into an AI-powered solution. Refine your prompts, build a solution, and present your idea to the judges.",
      tags: ["Problem Solving", "Innovation", "Presentation"],
    },
  ],

  // ── Prizes ─────────────────────────────────────────────────────────────
  // PLACEHOLDER: Replace with official prize information when available
  prizes: {
    status: "coming-soon" as const,
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

  // ── Sponsors ───────────────────────────────────────────────────────────
  // PLACEHOLDER: Replace with actual sponsor details when available
  sponsors: {
    status: "coming-soon" as const,
    headline: "Our Sponsors",
    items: [] as { name: string; logo: string; tier: string }[],
  },

  // ── Contact ────────────────────────────────────────────────────────────
  contacts: [
    {
      role: "Contact Person 1",
      name: "Justin Johnson",
      phone: "+91 7696811958",
      email: "24aiml27@kristujayanti.com",
    },
    {
      role: "Contact Person 2",
      name: "Fathimath Rifa",
      phone: "+91 7411872026",
      email: "24aiml20@kristujayanti.com",
    },
  ],

  // ── Assets / Logos ─────────────────────────────────────────────────────
  logos: {
    university: "/assets/logos/kju-banner.png",
    parallax: "/assets/logos/parallax-logo.png",
  },

  // ── Navigation ─────────────────────────────────────────────────────────
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "AIVORA", href: "#club" },
    { label: "Details", href: "#details" },
    { label: "Rounds", href: "#rounds" },
    { label: "Prizes", href: "#prizes" },
    { label: "Contact", href: "#contact" },
  ],

  // ── SEO / Meta ─────────────────────────────────────────────────────────
  meta: {
    title: "PARALLAX 2026 — Promptathon | Kristu Jayanti Deemed To Be University",
    description:
      "PARALLAX is an Inter Collegiate Promptathon Fest on 16th October 2026 at Kristu Jayanti Deemed To Be University. Compete across three rounds of AI prompt engineering challenges.",
    keywords: [
      "PARALLAX",
      "Promptathon",
      "AI",
      "Prompt Engineering",
      "Generative AI",
      "Kristu Jayanti",
      "University Event",
      "Tech Event",
      "Hackathon",
      "AIVORA",
    ],
    ogImage: "/assets/logos/parallax-logo.jpg",
  },
} as const;

// ── Type Exports ───────────────────────────────────────────────────────────
export type EventConfig = typeof EVENT_CONFIG;
export type Round = (typeof EVENT_CONFIG.rounds)[number];
export type Prize = (typeof EVENT_CONFIG.prizes.items)[number];
export type Contact = (typeof EVENT_CONFIG.contacts)[number];
export type NavLink = (typeof EVENT_CONFIG.navLinks)[number];
