import { commitment } from '../../../data/home.js'
import './Commitment.css'

import imgCommitment from '../../../assets/images/our-commitment-clean.avif'

/**
 * Section 7 — Our Approach / Commitment.
 *
 * Avantage "left boxed content" layout: copy + CTA + three points on the
 * left, triangular photo bleeding off the right edge.
 */
export default function Commitment() {
  const { super: eyebrow, title, accent, text, cta, ctaHref, closing } = commitment

  return (
    <section className="commitment" id="commitment">
      <span className="commitment__decor" aria-hidden="true" />

      <div className="commitment__cell">
        <div className="commitment__grid">
          <div className="commitment__content">
            <header className="cmtHeadline">
              <span className="cmtHeadline__super">{eyebrow}</span>
              <h2 className="cmtHeadline__title">
                <span className="cmtHeadline__plain">{title}</span>
                <strong className="cmtHeadline__accent">{accent}</strong>
              </h2>
              <p className="cmtHeadline__sub">{text}</p>
            </header>

            <a href={ctaHref} className="cmtButton">
              <span>{cta}</span>
            </a>

            <span className="cmtRule" aria-hidden="true" />

            <div className="cmtClosing">
              <p className="cmtClosing__tagline">{closing.tagline}</p>
              {closing.lines.map((line) => (
                <p className="cmtClosing__line" key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="commitment__media">
            <div className="commitment__imageWrapper">
              <img
                src={imgCommitment}
                alt="A Vision Business Setup consultant advising a client"
                className="commitment__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
