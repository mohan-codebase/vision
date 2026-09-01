/**
 * Homepage section content for Vision Business Setup.
 *
 * Source of truth: "Website Content_Vision.docx". Copy here is condensed from
 * that document for a concise, conversion-focused homepage — the full detail
 * belongs on the dedicated inner pages, which are linked but not built here.
 *
 * One export per section, named to match its component.
 */

/* 1 — HERO ------------------------------------------------------------------ */

export const heroSlides = [
  {
    super: 'EVERY BUSINESS STARTS WITH VISION',
    title: 'Set up your business',
    accent: 'in the UAE with confidence',
    text: 'End-to-end company formation and corporate support across Mainland, Free Zone and Offshore — handled with precision, from first idea to operational launch.',
    image: 'banner-1.avif',
    side: 'right',
    buttons: [
      { label: 'Get Started', href: '#request-callback', variant: 'accent' },
      { label: 'Explore Business Setup', href: '#business-setup', variant: 'navy' },
    ],
  },
  {
    super: 'MAINLAND · FREE ZONE · OFFSHORE',
    title: 'The right structure',
    accent: 'for your goals',
    text: 'We act as strategic advisors — helping you choose the right jurisdiction, navigate regulations and build a strong foundation for long-term success.',
    image: 'banner-2.avif',
    side: 'left',
    buttons: [
      { label: 'Request a Callback', href: '#request-callback', variant: 'accent' },
      { label: 'Our Services', href: '#services', variant: 'navy' },
    ],
  },
  {
    super: 'STRATEGIC GUIDANCE, END-TO-END SUPPORT',
    title: 'More than paperwork —',
    accent: 'a partner for growth',
    text: 'From company formation to visas, PRO services and banking, we manage the entire process so you can focus on building your business.',
    image: 'banner-3.avif',
    side: 'left',
    buttons: [
      { label: 'Get Started', href: '#request-callback', variant: 'accent' },
      { label: 'Why Vision', href: '#why-vision', variant: 'navy' },
    ],
  },
  {
    super: 'OUR APPROACH & COMMITMENT',
    title: 'We partner with you',
    accent: 'throughout your journey',
    text: 'Delivering value, building trust, and ensuring your business operates with confidence and long-term success in the UAE.',
    image: 'banner-4.avif',
    side: 'left',
    buttons: [
      { label: 'Request a Callback', href: '#request-callback', variant: 'accent' },
      { label: 'Our Commitment', href: '#commitment', variant: 'navy' },
    ],
  },
]

/* 2 — BUSINESS SETUP OPTIONS --------------------------------------------- */

export const businessSetup = {
  super: 'CHOOSE YOUR JURISDICTION',
  title: 'UAE Business',
  accent: 'Setup Options',
  intro:
    'Three routes into the UAE market, each with distinct advantages. Our consultants match the structure to your business model, then manage the setup end to end.',
  options: [
    {
      title: 'UAE Mainland',
      super: 'MAXIMUM FLEXIBILITY',
      icon: 'building',
      text: 'Licensed by the DET, a Mainland company can trade anywhere in the UAE and work with both government and private sectors.',
      benefits: [
        'Up to 100% foreign ownership on many activities',
        'No restrictions on business location within the UAE',
        'Expand operations across multiple emirates',
      ],
      cta: 'Explore Mainland',
      bg: 'bgn-boxes-01.jpg',
    },
    {
      title: 'UAE Free Zone',
      super: 'FULL OWNERSHIP, FAST SETUP',
      icon: 'globe',
      text: 'Set up inside a designated economic zone with investor-friendly regulation, simplified procedures and industry-specific ecosystems.',
      benefits: [
        '100% foreign ownership',
        'Fast and simplified registration process',
        'Full repatriation of profits and capital',
      ],
      cta: 'Explore Free Zone',
      bg: 'bgn-boxes-02.jpg',
    },
    {
      title: 'UAE Offshore',
      super: 'INTERNATIONAL STRUCTURING',
      icon: 'shield',
      text: 'A compliant entity for holding companies, international trade and asset protection, operating outside the UAE domestic market.',
      benefits: [
        '100% foreign ownership',
        'No requirement for physical office space',
        'High level of confidentiality',
      ],
      cta: 'Explore Offshore',
      bg: 'bgn-boxes-03.jpg',
    },
  ],
}

/* 3 — WHY VISION / OUR STORY -------------------------------------------- */

export const ourStory = {
  super: 'OUR STORY',
  title: 'Why businesses',
  accent: 'choose Vision',
  image: 'our-story.avif',
  paragraphs: [
    'At Vision Business Setup, we provide end-to-end business setup and corporate support services in the UAE. From company formation across Mainland, Free Zone, and Offshore jurisdictions to visa processing and PRO services, we manage the entire process with precision and efficiency. Our role goes beyond documentation—we act as strategic advisors, helping clients choose the right structure, navigate regulations, and build a strong foundation for long-term success in the UAE.',
    'Established in 2015, Vision Business Setup has grown into a trusted name in the UAE’s business setup landscape. Over the years, we have had the privilege of working with high-value clients, entrepreneurs, and well-connected business networks across the region—delivering solutions that are not only efficient, but also strategically aligned with long-term success.',
    'Our journey has been defined by one simple principle: putting our clients first in everything we do.',
  ],
  features: [
    { icon: 'compass', title: 'Strategic advisory', text: 'Guidance on structure, jurisdiction and compliance — not just filing.' },
    { icon: 'handshake', title: 'Client-first', text: 'Tailored solutions built around your goals, never templated.' },
    { icon: 'badge-check', title: 'Since 2015', text: 'Over 10 years of business setup and corporate support experience in the UAE.' },
  ],
}

/* 5b — TRUSTED BY SOME BIGGEST NAMES (testimonials) -------------------- */

/*
 * Recreated 1:1 from the Avantage Business reference section
 * ("Trusted by some Biggest Names"). Quote copy, names, companies, ratings
 * and the avatar images are the theme's originals, kept verbatim.
 */
export const testimonials = {
  super: 'GREAT REVIEWS FOR OUR SERVICES',
  title: 'Trusted by some',
  accent: 'Biggest Names',
  items: [
    {
      image: 'img-quote-01.jpg',
      title: 'Absolutely spot-on!',
      quote:
        'Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals.',
      name: 'James Brisk',
      company: 'HSBC Bank',
      rating: 5,
    },
    {
      image: 'img-quote-02.jpg',
      title: 'Best decision ever',
      quote:
        'Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.',
      name: 'Howard McMillan',
      company: 'Hotel Berg',
      rating: 5,
    },
    {
      image: 'img-quote-03.jpg',
      title: 'Saved my Business',
      quote:
        'Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency communities.',
      name: 'Maria Gothenburg',
      company: 'Applauz Startup',
      rating: 5,
    },
  ],
}

/* 4 — WHAT SETS US APART ----------------------------------------------- */

export const whatSetsUsApart = {
  super: 'WHAT SETS US APART',
  title: 'Value is in',
  accent: 'how we deliver',
  intro:
    'At Vision Business Setup, we believe that true value lies not just in delivering a service—but in how that service is delivered.',
  cta: 'Talk to our team',
  ctaHref: '#request-callback',
  items: [
    {
      icon: 'handshake-heart',
      title: 'Client-Centric Approach',
      text: 'We take the time to understand your business, your goals, and your challenges before recommending solutions. Every strategy we provide is tailored, not templated.',
    },
    {
      icon: 'badge-check',
      title: 'Uncompromised Service Quality',
      text: 'Our commitment to quality is one of the core pillars of our business. The consistent positive feedback we receive from our clients reflects our attention to detail and dedication to excellence.',
    },
    {
      icon: 'headset',
      title: 'Round-the-Clock Support',
      text: 'Unlike traditional firms, our relationship with clients does not operate within fixed hours. Our team is available beyond the conventional 9-to-5 framework, ensuring you have support whenever you need it.',
    },
    {
      icon: 'network',
      title: 'Strong Network & Industry Understanding',
      text: 'Having worked with well-established clients and networks in the UAE, we bring valuable connections and real-world expertise to every engagement.',
    },
  ],
}

/* 5 — WHO WE WORK WITH ------------------------------------------------- */

export const whoWeWorkWith = {
  super: 'WHO WE WORK WITH',
  title: 'Experience across',
  accent: 'industries',
  intro:
    'Our diverse client base spans multiple industries, reflecting our ability to adapt, understand, and deliver across different business environments. We have successfully supported:',
  items: [
    { title: 'Real Estate & Property Development', image: 'who-we-work-with-1-clean.avif' },
    { title: 'Food & Beverage', image: 'who-we-work-with-2-clean.avif' },
    { title: 'Trading & General Commerce', image: 'who-we-work-with-3-clean.avif' },
    { title: 'Salons & Lifestyle Brands', image: 'who-we-work-with-4-clean.avif' },
    { title: 'Manpower & Workforce Supply', image: 'who-we-work-with-5-clean.avif' },
  ],
}

/* 6 — OUR SERVICES -------------------------------------------------- */

export const ourServices = {
  super: 'BEYOND COMPANY FORMATION',
  title: 'Our',
  accent: 'Services',
  intro:
    'Corporate support for every stage of your journey in the UAE. Detailed service pages follow — start with a callback and we will point you to the right one.',
  cta: 'Request a Callback',
  ctaHref: '#request-callback',
  groups: [
    {
      icon: 'id-card',
      title: 'Licence',
      items: ['License Renewal', 'License Modification', 'License Cancellation', 'License Freezing'],
    },
    {
      icon: 'passport',
      title: 'Visa',
      items: ['Residence Visa', 'Dependent Visa', 'Remote Work Visa', 'Golden Visa', 'Freelance Visa', 'Domestic Worker Visa'],
    },
    {
      icon: 'bank',
      title: 'Finance & Banking',
      items: ['Bank Account Opening', 'Corporate Tax Guide', 'Bookkeeping & VAT Registration'],
    },
    {
      icon: 'grid',
      title: 'Other Services',
      items: ['VIP Medical & Emirates ID Assistance', 'Customs Registration', 'Office Spaces'],
    },
  ],
}

/* 7 — OUR APPROACH / COMMITMENT ---------------------------------- */

export const commitment = {
  super: 'OUR COMMITMENT',
  title: 'We partner with you',
  accent: 'throughout your journey',
  text: 'At Vision Business Setup, we don’t just help you start a business—we partner with you throughout your journey. From initial setup to ongoing support, our focus remains on delivering value, building trust, and ensuring your business operates with confidence in the UAE.',
  cta: 'Request a Callback',
  ctaHref: '#request-callback',
  image: 'our-commitment-clean.avif',
  closing: {
    tagline: 'Every Business starts with Vision.',
    lines: [
      'Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity, and dedication.',
      'Connect with Vision Business Setup and experience a service built around you.',
    ],
  },
}

/* 8 — OUR FOUNDER ---------------------------------------------- */

export const founder = {
  super: 'OUR FOUNDER',
  name: 'Viekram Sadwani',
  role: 'Founder, Vision Business Setup',
  initials: 'VS',
  quote: 'Successful businesses are built on strong relationships, clear understanding, and a commitment to solving real challenges.',
  paragraphs: [
    'Vision Business Setup is led by Viekram Sadwani, a seasoned professional with deep-rooted experience in the UAE market since 2008. He began his career in the real estate sector, gaining valuable insights into the region’s business landscape before establishing Vision Business Setup in 2015.',
    'With a strong understanding of how businesses operate in the UAE, Viekram built the company with a clear focus—delivering reliable, high-quality solutions that genuinely support clients in achieving their goals.',
    'What distinguishes Viekram’s leadership is his genuine, people-centric mindset. This philosophy continues to shape the way Vision Business Setup engages with every client.',
    'Viekram is known for his hands-on approach and unwavering dedication to service excellence. He consistently goes beyond conventional expectations to ensure that every client receives not just a service, but a complete and dependable experience.',
  ],
  facts: [
    { label: 'In the UAE market since', value: '2008' },
    { label: 'Founded Vision Business Setup', value: '2015' },
    { label: 'Leadership approach', value: 'People-first' },
  ],
}

/* 9 — CORE VALUES ------------------------------------------- */

export const coreValues = {
  super: 'OUR CORE VALUES',
  title: 'What we stand',
  accent: 'behind',
  items: [
    { icon: 'shield', title: 'Trust', text: 'We build long-term relationships through honesty, reliability, and consistency.' },
    { icon: 'eye', title: 'Transparency', text: 'Clear communication and straightforward processes are at the heart of how we operate.' },
    { icon: 'chat', title: 'Understanding', text: 'We listen before we advise—ensuring every solution is aligned with your unique needs.' },
    { icon: 'puzzle', title: 'Tailored Solutions', text: 'No two businesses are the same. Our approach reflects that in every recommendation we make.' },
    { icon: 'star', title: 'Quality Service', text: 'We maintain high standards in every interaction, every process, and every outcome.' },
    { icon: 'sync', title: 'Reliability & Consistency', text: 'Our clients depend on us—and we deliver, every time.' },
    { icon: 'route', title: 'End-to-End Support', text: 'From initial idea to operational launch, we stay with you at every step.' },
  ],
}

/* 10 — STRONG CTA BANNER ---------------------------------- */

export const ctaBanner = {
  super: 'EVERY BUSINESS STARTS WITH VISION',
  title: 'Speak with a Vision Business Setup consultant',
  text: 'Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity and dedication.',
  cta: 'Request a Callback',
  ctaHref: '#request-callback',
  bg: 'bgn-searching.jpg',
}

/* 11 — REQUEST A CALLBACK FORM --------------------------- */

export const callbackForm = {
  super: 'REQUEST A CALLBACK',
  title: 'Let’s talk about',
  accent: 'your business',
  text: 'Share a few details and a Vision Business Setup consultant will call you back to discuss the right setup for your goals.',
  points: [
    'No-obligation consultation',
    'Guidance on Mainland, Free Zone & Offshore',
    'End-to-end setup and corporate support',
  ],
  fields: [
    { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name', required: true },
    { name: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel', required: true },
    { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email', required: true },
    { name: 'message', label: 'How can we help?', type: 'textarea', required: false },
  ],
  submitLabel: 'Request a Callback',
}
