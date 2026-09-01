/**
 * Vision Business Setup — contact configuration.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  PLACEHOLDERS — the source document does not include contact details.
 *  Replace every value below with Vision Business Setup's real information
 *  before launch. Nothing here is a verified number or address.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * `whatsappNumber` must be digits only in full international format (no "+",
 * spaces or dashes) so it can be dropped straight into a wa.me link.
 */
export const contact = {
  phoneDisplay: '+971 4 000 0000',
  phoneHref: 'tel:+97140000000',

  whatsappNumber: '971500000000',
  whatsappMessage: 'Hi Vision Business Setup, I would like to know more about setting up my business in the UAE.',

  email: '',            // e.g. 'info@visionbusinesssetup.ae' — leave '' to hide
  addressLines: ['Dubai', 'United Arab Emirates'],

  hours: 'Sunday – Friday',

  // Get in Touch map. Leave `mapEmbedUrl` empty to show the styled placeholder;
  // paste a Google Maps / OpenStreetMap "embed" src URL once the office
  // location is confirmed. `mapLink` opens the full map in a new tab.
  mapEmbedUrl: '',
  mapLink: '',

  social: [
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'facebook', href: '#', label: 'Facebook' },
  ],
}

/** wa.me deep link built from the configured number + prefilled message. */
export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`
