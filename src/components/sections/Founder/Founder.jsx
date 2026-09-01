import { founder } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './Founder.css'

/**
 * Section 8 — Our Founder.
 *
 * No approved founder photograph exists in the project, so the portrait slot
 * is a clean navy monogram card carrying the name, role and a pull-quote.
 * Facts are limited to what the source document states.
 */
export default function Founder() {
  const { super: eyebrow, name, role, initials, quote, paragraphs, facts } = founder

  return (
    <section className="founder" id="founder">
      <div className="founder__cell">
        <div className="founder__grid">
          <figure className="founderCard">
            <span className="founderCard__monogram" aria-hidden="true">{initials}</span>
            <figcaption>
              <span className="founderCard__name">{name}</span>
              <span className="founderCard__role">{role}</span>
            </figcaption>
            <blockquote className="founderCard__quote">
              <span className="founderCard__quoteMark" aria-hidden="true">
                <Icon name="quote" />
              </span>
              {quote}
            </blockquote>
          </figure>

          <div className="founder__content">
            <span className="founder__super">{eyebrow}</span>
            <h2 className="founder__title">
              Led by <strong>{name}</strong>
            </h2>

            {paragraphs.map((p) => (
              <p className="founder__para" key={p.slice(0, 24)}>{p}</p>
            ))}

            <ul className="founderFacts">
              {facts.map((fact) => (
                <li className="founderFact" key={fact.label}>
                  <span className="founderFact__value">{fact.value}</span>
                  <span className="founderFact__label">{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
