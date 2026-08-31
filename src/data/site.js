/**
 * Site-wide chrome: header top bar, navigation, footer.
 * Content is transcribed from the reference layout so the clone has the
 * same text metrics (line counts / wrap points) as the original.
 */

export const topBar = {
  hours: { icon: 'clock', title: 'Monday - Friday', text: '8AM - 9PM' },
  offices: { icon: 'pin', title: 'Offices', text: 'Bloomsbury Square, London WC1B 4EA' },
  social: {
    title: 'Visit our social pages',
    links: [
      { icon: 'facebook', href: '#' },
      { icon: 'twitter', href: '#' },
      { icon: 'pinterest', href: '#' },
      { icon: 'linkedin', href: '#' },
    ],
  },
  phone: '020 7946 0020',
}

/**
 * Primary menu — the real 3-level tree from the reference site.
 * Home/About us/Services are 2 levels; Cases/Blog/Shop have a third-level
 * flyout. No item uses the theme's wide/mega dropdown on this demo.
 */
const m = (label, children) => ({ label, href: '#', ...(children && { children }) })

export const mainMenu = [
  m('Home', [
    m('Business Consultant'), m('Marketing Consultant'), m('HR Consultant'),
    m('Financial Consultant'), m('Accountant / Tax Consultant'),
    m('Strategy Consultant'), m('Management Consultant'),
    m('International Consultant'),
  ]),
  m('About us', [
    m('About us'), m('About me'), m('Team'), m('Company History'),
    m('Testimonials'), m('Clients'), m('Careers'), m('Contact'),
    m('Location'), m('Under construction'), m('404'),
  ]),
  m('Services', [
    m('Single service'), m('Our Process'), m('Solutions'),
    m('Cost Calculator'), m('FAQ'), m('Pricing'),
  ]),
  m('Cases', [
    m('Case list', [m('Classic'), m('Columns')]),
    m('Case grid', [m('Three columns'), m('Four columns'), m('Five columns'), m('Six columns')]),
    m('Case tiles', [m('Three columns'), m('Four columns'), m('Five columns'), m('Six columns')]),
    m('Single case', [
      m('Standard'), m('Grid gallery'), m('Carousel gallery'), m('Columns view'),
      m('Video case'), m('Audio case'), m('Without default title'),
      m('With Bold Builder content'),
    ]),
  ]),
  m('Blog', [
    m('Blog list', [
      m('Classic'), m('Classic with Avatar'), m('Columns'),
      m('Columns without sidebar'), m('Simple'), m('Simple with avatar'),
    ]),
    m('Blog grid', [m('Three columns'), m('Four columns'), m('Five columns'), m('Six columns')]),
    m('Blog tiles', [m('Three columns'), m('Four columns'), m('Five columns'), m('Six columns')]),
    m('Latest posts', [m('Three columns'), m('Four columns'), m('Six columns')]),
    m('Single post', [
      m('Standard post'), m('Image post'), m('Grid gallery post'),
      m('Carousel gallery post'), m('Columns view'), m('Video post'),
      m('Audio post'), m('Link post'), m('Quote post'),
    ]),
  ]),
  m('Shop', [
    m('Products', [
      m('Classic'), m('Two columns'), m('Four columns'), m('Five columns'),
      m('Six columns'), m('Product categories'),
    ]),
    m('Single product', [
      m('Standard product'), m('Discounted product'), m('Variable product'),
      m('Grouped product'), m('External product'),
    ]),
    m('Shop pages', [m('Cart'), m('Checkout'), m('My Account')]),
  ]),
]

/** Index of the item rendered as current (Home). */
export const currentMenuIndex = 0

/** The header's accent button is the phone number, not a generic CTA. */
export const headerPhone = { label: '020 7946 0020', href: 'tel:02079460020' }

export const footerWidgets = {
  headquarters: {
    super: 'AVANTAGE',
    title: 'Headquarters',
    text: 'Organically grow the holistic world view of disruptive innovation via empowerment.',
    links: [
      { icon: 'phone', label: '020 7946 0020', href: 'tel:02079460020' },
      { icon: 'mail', label: 'info@avantage.co.uk', href: 'mailto:info@avantage.co.uk' },
      { icon: 'globe', label: 'avantage.co.uk', href: '#' },
    ],
  },
  locations: {
    super: 'OUR LOCATIONS',
    title: 'Where to find us?',
    image: 'img-footer-map.png',
    offices: [
      { city: 'London', phone: '020 7946 0020' },
      { city: 'Ontario', phone: '613 285 5534' },
      { city: 'Tokyo', phone: '0428 298 114' },
    ],
  },
  social: {
    super: 'GET IN TOUCH',
    title: 'Avantage Social links',
    text: 'Taking seamless key performance indicators offline to maximise the long tail.',
    links: [
      { icon: 'facebook', href: '#' },
      { icon: 'twitter', href: '#' },
      { icon: 'pinterest', href: '#' },
      { icon: 'linkedin', href: '#' },
    ],
  },
}

export const footerBottom = {
  copyright: 'Copyright by BoldThemes. All rights reserved.',
  menu: ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Shop'].map(
    (label) => ({ label, href: '#' }),
  ),
}
