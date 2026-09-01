import { ctaBanner } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './CtaBanner.css'

import bgnSearching from '../../../assets/images/bgn-searching.jpg'

/**
 * Section 10 — Strong CTA banner.
 *
 * Avantage 1400-wide teal box: a dark-scheme headline on the left, an accent
 * button on the right. Carries the "Every Business starts with Vision" line.
 */
export default function CtaBanner() {
  const { super: eyebrow, title, text, cta, ctaHref } = ctaBanner

  return (
    <section className="ctaBanner">
      <span className="ctaBanner__decor" aria-hidden="true" />

      <div className="ctaBanner__cell">
        <div className="ctaBanner__box" style={{ backgroundImage: `url(${bgnSearching})` }}>
          <div className="ctaBanner__inner">
            <header className="ctaHeadline">
              <span className="ctaHeadline__super">{eyebrow}</span>
              <h2 className="ctaHeadline__title">{title}</h2>
              <p className="ctaHeadline__text">{text}</p>
            </header>

            <a href={ctaHref} className="ctaButton">
              <span>{cta}</span>
              <Icon name="arrow-right" size="small" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
