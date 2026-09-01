import { whatSetsUsApart } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './WhatSetsUsApart.css'

/**
 * Section 4 — What Sets Us Apart.
 *
 * Avantage "consultancy industries" treatment: a half-width headline, a grid
 * of icon-left service items whose icon darkens on hover, closed by a 2px rule
 * and a navy button.
 */
export default function WhatSetsUsApart() {
  const { super: eyebrow, title, accent, intro, cta, ctaHref, items } = whatSetsUsApart

  return (
    <section className="whatSets" id="why-vision">
      <div className="whatSets__cell">
        <header className="whatSets__head">
          <span className="whatSets__super">{eyebrow}</span>
          <h2 className="whatSets__title">
            <span className="whatSets__titlePlain">{title}</span>
            <strong className="whatSets__titleAccent">{accent}</strong>
          </h2>
          <p className="whatSets__intro">{intro}</p>
        </header>

        <ul className="whatSets__grid">
          {items.map((item) => (
            <li className="wsItem" key={item.title}>
              <span className="wsItem__icon">
                <Icon name={item.icon} />
              </span>
              <div className="wsItem__body">
                <h3 className="wsItem__title">{item.title}</h3>
                <p className="wsItem__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="whatSets__foot">
          <span className="whatSets__rule" aria-hidden="true" />
          <a href={ctaHref} className="whatSets__button">
            <span>{cta}</span>
            <Icon name="arrow-right" size="small" />
          </a>
        </div>
      </div>
    </section>
  )
}
