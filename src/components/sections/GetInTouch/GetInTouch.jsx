import { contact, whatsappLink } from '../../../config/contact.js'
import Icon from '../../ui/Icon.jsx'
import './GetInTouch.css'

/**
 * Section 12 — Get in Touch (sits directly before the Footer).
 *
 * Reproduces the Avantage contact section: a full-width map with a wide,
 * horizontal white panel overlapping its lower-middle. Left of the panel:
 * label + heading + description; right: three equal contact columns
 * (Address / Call us / Email us).
 *
 * All contact values come from `src/config/contact.js`. When a value is not
 * configured the column shows a neutral placeholder — never fabricated data.
 * The map defaults to the configured city; override with `contact.mapEmbedUrl`.
 */
export default function GetInTouch() {
  const address = contact.addressLines.filter(Boolean)
  const hasEmail = Boolean(contact.email)
  const query = address.join(', ')
  const mapSrc =
    contact.mapEmbedUrl ||
    (query
      ? `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=11&output=embed`
      : '')
  const mapLink =
    contact.mapLink ||
    (query ? `https://www.google.com/maps/search/${encodeURIComponent(query)}` : '')

  const columns = [
    {
      icon: 'pin',
      title: 'Address',
      lines: address.length
        ? address
        : [<span key="ph" className="giCol__placeholder">Office address to be added</span>],
    },
    {
      icon: 'phone',
      title: 'Call us',
      lines: [
        <a key="tel" href={contact.phoneHref}>{contact.phoneDisplay}</a>,
      ],
    },
    {
      icon: 'mail',
      title: 'Email us',
      lines: hasEmail
        ? [<a key="mail" href={`mailto:${contact.email}`}>{contact.email}</a>]
        : [<span key="ph" className="giCol__placeholder">Email address to be added</span>],
    },
  ]

  return (
    <section className="getInTouch" id="contact">
      <div className="getInTouch__map">
        {mapSrc ? (
          <iframe
            className="getInTouch__frame"
            src={mapSrc}
            title="Vision Business Setup location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="getInTouch__mapFallback" aria-hidden="true">
            <span className="getInTouch__mapPin"><Icon name="pin" /></span>
          </div>
        )}
      </div>

      <div className="getInTouch__cell">
        <div className="giPanel">
          <span className="giPanel__corner" aria-hidden="true" />

          <div className="giPanel__intro">
            <span className="giPanel__super">OUR OFFICES</span>
            <h2 className="giPanel__title">
              <span className="giPanel__titlePlain">Get in</span>{' '}
              <strong className="giPanel__titleAccent">Touch</strong>
            </h2>
            <p className="giPanel__text">
              Whether you are starting fresh or expanding your presence, our team is here to
              guide you with expertise, clarity and dedication. Connect with Vision Business
              Setup and experience a service built around you.
            </p>

            <div className="giPanel__actions">
              <a href="#request-callback" className="giBtn giBtn--accent">
                <span>Request a Callback</span>
                <Icon name="arrow-right" size="small" />
              </a>
              <a
                href={whatsappLink}
                className="giBtn giBtn--wa"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" size="small" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          <ul className="giCols">
            {columns.map((col) => (
              <li className="giCol" key={col.title}>
                <span className="giCol__icon">
                  <Icon name={col.icon} />
                </span>
                <h3 className="giCol__title">{col.title}</h3>
                <div className="giCol__lines">
                  {col.lines.map((line, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {mapLink && (
          <a
            className="getInTouch__mapLink"
            href={mapLink}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="pin" size="small" />
            <span>Open in Google Maps</span>
          </a>
        )}
      </div>
    </section>
  )
}
