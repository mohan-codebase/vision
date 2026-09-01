import { whoWeWorkWith } from '../../../data/home.js'
import './WhoWeWorkWith.css'

import workWith01 from '../../../assets/images/who-we-work-with-1-clean.avif'
import workWith02 from '../../../assets/images/who-we-work-with-2-clean.avif'
import workWith03 from '../../../assets/images/who-we-work-with-3-clean.avif'
import workWith04 from '../../../assets/images/who-we-work-with-4-clean.avif'
import workWith05 from '../../../assets/images/who-we-work-with-5-clean.avif'

const IMAGES = {
  'who-we-work-with-1-clean.avif': workWith01,
  'who-we-work-with-2-clean.avif': workWith02,
  'who-we-work-with-3-clean.avif': workWith03,
  'who-we-work-with-4-clean.avif': workWith04,
  'who-we-work-with-5-clean.avif': workWith05,
}

/**
 * Section 5 — Who We Work With.
 *
 * Avantage triangular portfolio-tile treatment, reused as an industries
 * showcase. Exactly the five industries documented — no more.
 */
export default function WhoWeWorkWith() {
  const { super: eyebrow, title, accent, intro, items } = whoWeWorkWith

  return (
    <section className="whoWork" id="industries">
      <div className="whoWork__cell">
        <header className="whoWork__head">
          <span className="whoWork__super">{eyebrow}</span>
          <h2 className="whoWork__title">
            <span className="whoWork__plain">{title}</span>{' '}
            <strong className="whoWork__accent">{accent}</strong>
          </h2>
          <p className="whoWork__intro">{intro}</p>
        </header>

        <ul className="whoWork__grid">
          {items.map((item) => (
            <li className="workTile" key={item.title}>
              <img
                className="workTile__img"
                src={IMAGES[item.image]}
                alt={item.title}
                loading="lazy"
              />
              <span className="workTile__corner" aria-hidden="true" />
              <span className="workTile__label">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
