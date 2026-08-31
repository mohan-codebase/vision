import { footerWidgets } from '../../../data/site.js'
import Icon from '../../ui/Icon.jsx'

import footerMap from '../../../assets/images/img-footer-map.png'

/**
 * FooterWidgets — the `btSiteFooterWidgets` area (`#191919`), three
 * `.btBox` columns at 33.33% each: Headquarters (contact icon-links),
 * Our Locations (`img-footer-map.png` + office list), and Avantage Social
 * links (icon buttons). Each column opens with an uppercase accent eyebrow
 * and a light-weight white title.
 */
export default function FooterWidgets() {
  const { headquarters, locations, social } = footerWidgets

  return (
    <div className="siteFooterWidgets">
      <span className="siteFooterWidgets__decor" aria-hidden="true" />
      <span className="siteFooterWidgets__decor siteFooterWidgets__decor--2" aria-hidden="true" />

      <div className="siteFooterWidgets__port">
        <div className="siteFooterWidgets__row">
          {/* Headquarters */}
          <section className="ftBox">
            <span className="ftWidget__super">{headquarters.super}</span>
            <h4 className="ftWidget__title">{headquarters.title}</h4>
            <p className="ftWidget__text">{headquarters.text}</p>
            <ul className="ftContact">
              {headquarters.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="ftContact__icon">
                      <Icon name={link.icon} />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Our Locations */}
          <section className="ftBox">
            <span className="ftWidget__super">{locations.super}</span>
            <h4 className="ftWidget__title">{locations.title}</h4>
            <img
              className="ftMap"
              src={footerMap}
              alt="Avantage office locations"
              width="280"
              height="142"
              loading="lazy"
            />
            <ul className="ftOffices">
              {locations.offices.map((office) => (
                <li className="ftOffice" key={office.city}>
                  <span className="ftOffice__city">{office.city}</span>
                  <span className="ftOffice__phone">{office.phone}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Avantage Social links */}
          <section className="ftBox">
            <span className="ftWidget__super">{social.super}</span>
            <h4 className="ftWidget__title">{social.title}</h4>
            <p className="ftWidget__text">{social.text}</p>
            <div className="ftSocial">
              {social.links.map((link) => (
                <a
                  className={`ftSocial__link ftSocial__link--${link.icon}`}
                  href={link.href}
                  key={link.icon}
                  aria-label={link.icon}
                >
                  <Icon name={link.icon} />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
