/**
 * Homepage section content.
 *
 * One export per section, named to match its component. Keeping copy here
 * (rather than inline in JSX) means the section components stay pure layout,
 * which is what the pixel-perfect work actually operates on.
 *
 * TODO(structure-only): fill in body copy per section as each is built.
 */

/**
 * Hero slider — 3 fading slides. Matches the reference `bt_bb_content_slider`:
 * dark colour scheme, `layout: wide`, fade animation, autoplay 4500ms, dots
 * on the right, no arrows. Each slide has its text half on `side` and the
 * other half left empty for the photo. `title` is the light-weight line,
 * `accent` the bold line under it; both render in the same dark ink — the
 * imagery is bright on the copy side, so the hero text is dark, not white.
 * Button one is the accent (pink) fill, button two the navy fill.
 */
export const heroSlides = [
  {
    super: "WHAT'S MISSING IN YOUR BUSINESS?",
    title: 'Find that',
    accent: 'Missing piece',
    text: 'Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    image: 'img-slider-01.jpg',
    side: 'left',
    buttons: [
      { label: 'Find out more', variant: 'accent' },
      { label: 'Our Services', variant: 'navy' },
    ],
  },
  {
    super: 'COMMITTED TO YOUR SUCCESS',
    title: 'Delivering',
    accent: 'The promise',
    text: 'Quickly aggregate B2B users and worldwide potentialities. Progressively plagiarize resource-leveling e-commerce core competencies.',
    image: 'img-slider-02.jpg',
    side: 'right',
    buttons: [
      { label: 'View Portfolio', variant: 'accent' },
      { label: 'View Testimonials', variant: 'navy' },
    ],
  },
  {
    super: 'WE WANT TO SEE YOU SUCCEED',
    title: 'Your success',
    accent: 'Our business',
    text: 'Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured products.',
    image: 'img-slider-03.jpg',
    side: 'left',
    buttons: [
      { label: 'View our Solutions', variant: 'accent' },
      { label: 'View our Team', variant: 'navy' },
    ],
  },
]

/**
 * Section 2 — three overlapping cards. Each `bt_bb_column` carries a
 * `bgn-boxes-0X.jpg` photo that fades to white behind the copy, a drop
 * shadow (`bt_bb_highlight`), an uppercase eyebrow, an accent dash, an
 * h4 title, a paragraph and a small accent-filled button.
 */
export const servicesIntro = [
  {
    title: 'Our Services',
    super: 'PLAN, THEN DO',
    text: 'Avantage Group is all about strategy, we’re here to inform which tactics need funding and which are drains on resources.',
    cta: 'Avantage services',
    bg: 'bgn-boxes-01.jpg',
  },
  {
    title: 'Our Approach',
    super: 'SMALL TACTICS',
    text: 'Business we operate in is like an intricate game of chess, where every move counts and you keep score with money.',
    cta: 'More about Avantage',
    bg: 'bgn-boxes-02.jpg',
  },
  {
    title: 'Avantage Results',
    super: 'PROOF, NOT PROMISES',
    text: 'Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    cta: 'Explore our Solutions',
    bg: 'bgn-boxes-03.jpg',
  },
]

/**
 * Section 3 — "Consultancy Industries". Half-width headline
 * (`bt_bb_size_large`, eyebrow + accent dash), then a 3x2 grid of
 * `bt_bb_service` items — a big accent icon on the left, navy title + copy
 * on the right, icon darkens on hover — closed by a 2px rule and a navy
 * "View all Industries" button. Faint decorative triangles sit behind the
 * top of the section (`bgn-industries.png`).
 */
export const industries = {
  super: 'WHERE CAN WE HELP YOU',
  title: 'Consultancy',
  accent: 'Industries',
  intro:
    'Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Override the digital divide with additional clickthroughs from DevOps.',
  cta: 'View all Industries',
  items: [
    {
      icon: 'gavel',
      title: 'Solicitory',
      text: 'Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    },
    {
      icon: 'chart',
      title: 'Business Planning',
      text: 'Podcasting operational change management inside of workflows to establish a framework.',
    },
    {
      icon: 'people',
      title: 'Human Resources',
      text: 'Dynamically innovate resource-leveling customer service for state of the art customer service.',
    },
    {
      icon: 'target',
      title: 'Strategy',
      text: 'Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.',
    },
    {
      icon: 'rocket',
      title: 'Start Ups',
      text: 'Interactively coordinate proactive e-commerce via process-centric outside the box thinking.',
    },
    {
      icon: 'building',
      title: 'Organisations',
      text: 'Seamlessly empower fully researched growth strategies and interoperable internal or organic sources.',
    },
  ],
}

/**
 * Section 4 — "30 Years of Experience". Two columns: the triangular
 * `img-experience.png` on the left (photo pre-cropped into a down-pointing
 * triangle) and, vertically centred beside it, an `bt_bb_size_large`
 * headline, two body paragraphs, and three centred features. Each feature
 * is a `bt_bb_progress_bar_advanced` circle — a 96% accent ring with an
 * icon in the middle that draws itself when scrolled into view — over a
 * `bt_bb_size_small` title and one line of copy. Faint hatched decoration
 * (`bgn-experience.png`) at the lower right.
 */
export const experience = {
  super: 'GROWING WITH OUR CLIENTS',
  title: '30 Years of',
  accent: 'Experience',
  image: 'img-experience.png',
  paragraphs: [
    'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation diversity.',
  ],
  features: [
    {
      icon: 'sync',
      title: 'Consistency',
      text: 'Podcasting operational change management inside of workflow.',
      percent: 96,
    },
    {
      icon: 'trend-up',
      title: 'Improvement',
      text: 'Dynamically innovate customer service for state of the art customer.',
      percent: 96,
    },
    {
      icon: 'branch',
      title: 'Branching',
      text: 'Pursue scalable customer service through sustainable potentialities.',
      percent: 96,
    },
  ],
}

/**
 * Section 5 — "Trusted by some Biggest Names". Dark teal section
 * (`bt_bb_color_scheme_1`, `background-color:#215876` + `bgn-quotes.jpg`)
 * with white diagonal coverage images cutting the top and bottom edges
 * (`bgn-quotes-top.png` / `bgn-quotes-bottom.png`). Half-width headline
 * (`bt_bb_size_large`, eyebrow + accent dash), then a static 3-column row
 * (`bt_bb_column_gap_20`) of quote cards: circular avatar
 * (`bt_bb_shape_hard-rounded`, 200px), accent `<b>` quote title, quote body,
 * five accent stars, uppercase name, company (`h5`).
 */
export const testimonials = {
  super: 'GREAT REVIEWS FOR OUR SERVICES',
  title: 'Trusted by some',
  accent: 'Biggest Names',
  items: [
    {
      heading: 'Absolutely spot-on!',
      quote:
        'Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals.',
      author: 'James Brisk',
      company: 'HSBC Bank',
      image: 'img-quote-01.jpg',
      rating: 5,
    },
    {
      heading: 'Best decision ever',
      quote:
        'Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.',
      author: 'Howard McMillan',
      company: 'Hotel Berg',
      image: 'img-quote-02.jpg',
      rating: 5,
    },
    {
      heading: 'Saved my Business',
      quote:
        'Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency communities.',
      author: 'Maria Gothenburg',
      company: 'Applauz Startup',
      image: 'img-quote-03.jpg',
      rating: 5,
    },
  ],
}

/**
 * Section 6 — client logo carousel (`bt_bb_slider.bt_bb_multiple_slides`):
 * light-grey band (`#f5f5f5`), 9 logos, `slidesToShow: 6`, autoplay 3000ms,
 * slide animation, large transparent-dark arrows positioned outside.
 * Responsive: 6 → 3 (≤1024) → 2 (≤768) → 1 (≤480). Order preserved.
 */
export const clientLogos = [
  { src: 'logo-celeste.png', name: 'Celeste' },
  { src: 'logo-applauz.png', name: 'Applauz' },
  { src: 'logo-bello.png', name: 'Bello' },
  { src: 'logo-hotel-berg.png', name: 'Hotel Berg' },
  { src: 'logo-hotel-california.png', name: 'Hotel California' },
  { src: 'logo-estato.png', name: 'Estato' },
  { src: 'logo-addison.png', name: 'Addison' },
  { src: 'logo-urbanist.png', name: 'Urbanist' },
  { src: 'logo-bold-news.png', name: 'Bold News' },
]

/**
 * Section 7 — "Get your Business Right up There". `bt_bb_layout_boxed_1200
 * .bt_bb_section_show_left_boxed_content`, top spacing medium, with the
 * `bgn-experience.png` hatch at `right 85%`. Left column (vertically
 * centred): `bt_bb_size_large` headline + accent dash, paragraph, accent
 * "Request a Call Back" button, a 2px rule, then a 3-up inner row of
 * counters — a 70px accent icon, a navy Sarabun-800 number that counts up
 * on scroll into view, and a small caption. Right column: the triangular
 * `img-callback.png` bleeding to the right edge (`bt_bb_animation_move_left`).
 */
export const callback = {
  super: 'REQUEST A CALL BACK',
  title: 'Get your Business',
  accent: 'Right up There',
  text: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric outside the box thinking.',
  cta: 'Request a Call Back',
  image: 'img-callback.png',
  counters: [
    { icon: 'chart', value: 500, suffix: '+', text: 'Business advices given over 30 years' },
    { icon: 'chart', value: 170, suffix: '+', text: 'Businesses guided over thirty years' },
    { icon: 'chart', value: 30, suffix: '+', text: 'Business Excellence awards achieved' },
  ],
}

/**
 * Section 8 — "Consultancy Cases". `bt_bb_layout_boxed_1200`, top spacing
 * normal, bottom spacing large, `bgn-cases.png` triangles at the top.
 * Headline `bt_bb_size_large` (eyebrow + accent dash, no subtitle), a
 * filter row (`bt_bb_post_grid_filter` — accent text + a small accent dash
 * on the active/hovered item), then a 3-column `bt_bb_look_triangular`
 * portfolio-tile grid of 6 cases. Each tile: cover image, centred white
 * title (fades on hover), and a white panel that slides up on hover with a
 * navy angled corner and a "+" mark. Filtering is client-side.
 */
export const cases = {
  super: 'SEE WHAT WE DO',
  title: 'Consultancy',
  accent: 'Cases',
  filters: ['All', 'Financial', 'Human Resources', 'Solicitory', 'Start Ups', 'Strategy'],
  items: [
    { title: 'HSBC Recruiting',  category: 'Human Resources', image: 'portfolio-01.jpg' },
    { title: 'Miller Solutions', category: 'Strategy',        image: 'portfolio-02.jpg' },
    { title: 'WA Trekking',      category: 'Start Ups',       image: 'portfolio-03.jpg' },
    { title: 'ScalePay',         category: 'Financial',       image: 'portfolio-04.jpg' },
    { title: 'California Caris', category: 'Solicitory',      image: 'portfolio-05.jpg' },
    { title: 'WAE Analytics',    category: 'Financial',       image: 'portfolio-01.jpg' },
  ],
}

/**
 * Section 9 — CTA / quote banner. `bt_bb_layout_boxed_1400`, bottom spacing
 * large. A centred teal box (`#215877` + `bgn-searching.jpg` cover, triangles
 * baked into its right side) capped at 1400px; inside, a 1200-wide row:
 * dark-scheme headline `bt_bb_size_medium` + accent dash on the left
 * (eyebrow "GET SOLUTIONS FAST" in near-black, white h3), accent
 * `bt_bb_style_filled` "Get a Quote here" button right-aligned. Faint grey
 * triangles (`bgn-searching.png`) sit behind the section, bottom-aligned.
 * Stacks and centres on mobile.
 */
export const quoteBanner = {
  super: 'GET SOLUTIONS FAST',
  title: 'Searching for a First-Class Consultant?',
  cta: 'Get a Quote here',
  bg: 'bgn-searching.jpg',
}

/**
 * Section 10 — "Latest News". `bt_bb_layout_boxed_1200`, bottom spacing large,
 * white background. Headline `bt_bb_size_large` (eyebrow + accent dash, no
 * subtitle), then a `bt_bb_latest_posts` widget: `bt_bb_columns_4`,
 * `bt_bb_gap_small`, `bt_bb_look_standard_highlighted`,
 * `bt_bb_date_design_triangle`, `bt_bb_show_dash_true`. In that layout the
 * first post is a 50%-wide featured card (its image fills the card behind a
 * dark bottom gradient, white text), posts 2–3 are text-only tinted cards,
 * and the 4th post is hidden. Each card: an accent category dash + uppercase
 * category links, a white skewed-triangle date tab (top-right), an 800-weight
 * title (accent on text cards, white on the featured card), a 3-line excerpt
 * and a "Read more ›" link.
 */
export const latestNews = {
  super: 'OUR ANNOUNCEMENTS',
  title: 'Latest',
  accent: 'News',
  posts: [
    {
      title: 'Consulting Project',
      date: '4 Apr',
      categories: ['News', 'Projects'],
      excerpt:
        'Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. Dramatically evisculate holistic innovation rather than client-centric data.',
      image: 'blog-post-01.jpg',
    },
    {
      title: 'Latest Client',
      date: '19 Mar',
      categories: ['Announcements', 'News'],
      excerpt:
        'Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.',
      image: 'blog-post-06.jpg',
    },
    {
      title: 'Management Project',
      date: '4 Mar',
      categories: ['News', 'Projects'],
      excerpt:
        'Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.',
      image: 'blog-post-10.jpg',
    },
    {
      title: 'Proper Business in your Path',
      date: '1 Mar',
      categories: ['Advices', 'Blog'],
      excerpt:
        'Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.',
      image: 'blog-post-12.jpg',
    },
  ],
}

export const contactBar = {
  super: 'OUR OFFICES',
  title: 'Get in Touch',
  text: '',
  items: [
    { icon: 'pin',   title: 'Address', lines: ['Bloomsbury Square, London WC1B 4EA'] },
    { icon: 'phone', title: 'Phone',   lines: ['020 7946 020', '020 7996 223'] },
    { icon: 'mail',  title: 'Email',   lines: ['info@avantage.co.uk', 'office@avantage.co.uk'] },
  ],
}
