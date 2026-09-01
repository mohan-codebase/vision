/**
 * Site-wide chrome for Vision Business Setup: header top bar, primary
 * navigation and footer content.
 *
 * Contact details (phone, WhatsApp, email, address) live in
 * `src/config/contact.js` — that is the single place to edit them.
 */
import { contact } from '../config/contact.js'

export const brand = {
  name: 'Vision Business Setup',
  tagline: 'Every Business starts with Vision',
}

export const topBar = {
  tagline: brand.tagline,
  hours: { icon: 'clock', title: brand.tagline },
  phone: { icon: 'phone', title: 'Speak to a consultant', text: contact.phoneDisplay, href: contact.phoneHref },
  social: contact.social,
}

/**
 * Primary menu — the Vision homepage navigation.
 * `m(label, href, children)` builds one node; the menu renders up to three
 * levels (top item → dropdown → flyout).
 */
const m = (label, href = '#', children) => ({ label, href, ...(children && { children }) })

export const mainMenu = [
  m('Business Setup', '#business-setup', [
    m('UAE Mainland', '#business-setup'),
    m('UAE Free Zone', '#business-setup'),
    m('UAE Offshore', '#business-setup'),
  ]),
  m('Our Services', '#services', [
    m('Licence', '#services', [
      m('License Renewal', '#services'),
      m('License Modification', '#services'),
      m('License Cancellation', '#services'),
      m('License Freezing', '#services'),
    ]),
    m('Visa', '#services', [
      m('Residence Visa', '#services'),
      m('Dependent Visa', '#services'),
      m('Remote Work Visa', '#services'),
      m('Golden Visa', '#services'),
      m('Freelance Visa', '#services'),
      m('Domestic Worker Visa', '#services'),
    ]),
    m('Finance & Banking', '#services', [
      m('Bank Account Opening', '#services'),
      m('Corporate Tax Guide', '#services'),
      m('Bookkeeping & VAT Registration', '#services'),
    ]),
    m('Other', '#services', [
      m('VIP Medical & Emirates ID Assistance', '#services'),
      m('Customs Registration', '#services'),
      m('Office Spaces', '#services'),
    ]),
  ]),
  m('Contact Us', '#request-callback'),
]

/** Index of the item rendered as current. -1 = none (home has no nav match). */
export const currentMenuIndex = -1

/** The header's accent button is the phone number. */
export const headerPhone = { label: contact.phoneDisplay, href: contact.phoneHref }

export const footer = {
  about: {
    title: brand.name,
    tagline: brand.tagline,
    text: 'End-to-end business setup and corporate support services across UAE Mainland, Free Zone and Offshore jurisdictions — since 2015.',
  },
  columns: [
    {
      title: 'Business Setup',
      links: [
        { label: 'UAE Mainland', href: '#business-setup' },
        { label: 'UAE Free Zone', href: '#business-setup' },
        { label: 'UAE Offshore', href: '#business-setup' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { label: 'Licence', href: '#services' },
        { label: 'Visa', href: '#services' },
        { label: 'Finance & Banking', href: '#services' },
        { label: 'Other Services', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', href: '#our-story' },
        { label: 'What Sets Us Apart', href: '#why-vision' },
        { label: 'Our Founder', href: '#founder' },
        { label: 'Core Values', href: '#values' },
      ],
    },
  ],
  contact,
}

export const footerBottom = {
  copyright: `© ${new Date().getFullYear()} ${brand.name}. All rights reserved.`,
  menu: [
    { label: 'Business Setup', href: '#business-setup' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Contact Us', href: '#request-callback' },
  ],
}
