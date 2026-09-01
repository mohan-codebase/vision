import { footer } from '../../../data/site.js'
import Icon from '../../ui/Icon.jsx'

const logo = `${import.meta.env.BASE_URL}logo.png`

/**
 * FooterWidgets — dark (`#191919`) widget band.
 *
 * Column 1: brand, tagline and a short description with contact details.
 * Columns 2–4: quick links (Business Setup / Our Services / Company).
 * All contact values come from `src/config/contact.js`.
 */
export default function FooterWidgets() {
  const { about, columns, contact } = footer

  return (
    <div className="siteFooterWidgets">
      <span className="siteFooterWidgets__decor" aria-hidden="true" />
      <span className="siteFooterWidgets__decor siteFooterWidgets__decor--2" aria-hidden="true" />

      <div className="siteFooterWidgets__port">
        <div className="siteFooterWidgets__row">
          <section className="ftBox ftBox--about">
            <img className="ftBrandLogo" src={logo} alt={about.title} width="180" height="178" />
            <span className="ftWidget__super">{about.tagline}</span>
            <p className="ftWidget__text">{about.text}</p>

            <ul className="ftContact">
              <li>
                <a href={contact.phoneHref}>
                  <span className="ftContact__icon"><Icon name="phone" /></span>
                  {contact.phoneDisplay}
                </a>
              </li>
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>
                    <span className="ftContact__icon"><Icon name="mail" /></span>
                    {contact.email}
                  </a>
                </li>
              )}
              <li>
                <span className="ftContact__plain">
                  <span className="ftContact__icon"><Icon name="pin" /></span>
                  {contact.addressLines.join(', ')}
                </span>
              </li>
            </ul>

            <div className="ftSocial">
              {contact.social.map((link) => (
                <a
                  className="ftSocial__link"
                  href={link.href}
                  key={link.icon}
                  aria-label={link.label}
                >
                  <Icon name={link.icon} />
                </a>
              ))}
            </div>
          </section>

          {columns.map((col) => (
            <nav className="ftBox ftBox--links" key={col.title} aria-label={col.title}>
              <span className="ftWidget__super">{col.title}</span>
              <ul className="ftLinks">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </div>
  )
}
