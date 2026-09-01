import { ourServices } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './OurServices.css'

/**
 * Section 6 — Our Services.
 *
 * Four corporate-support categories (Licence / Visa / Finance & Banking /
 * Other). Concise cards on the homepage; detailed service pages linked later.
 */
export default function OurServices() {
  const { super: eyebrow, title, accent, intro, cta, ctaHref, groups } = ourServices

  return (
    <section className="ourServices" id="services">
      <div className="ourServices__cell">
        <header className="svcHead">
          <span className="svcHead__super">{eyebrow}</span>
          <h2 className="svcHead__title">
            <span className="svcHead__plain">{title}</span>{' '}
            <strong className="svcHead__accent">{accent}</strong>
          </h2>
          <p className="svcHead__intro">{intro}</p>
        </header>

        <ul className="svcGrid">
          {groups.map((group) => (
            <li className="svcCard" key={group.title}>
              <span className="svcCard__icon">
                <Icon name={group.icon} />
              </span>
              <h3 className="svcCard__title">{group.title}</h3>
              <ul className="svcCard__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="svcCard__bullet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="ourServices__foot">
          <a href={ctaHref} className="ourServices__button">
            <span>{cta}</span>
            <Icon name="arrow-right" size="small" />
          </a>
        </div>
      </div>
    </section>
  )
}
