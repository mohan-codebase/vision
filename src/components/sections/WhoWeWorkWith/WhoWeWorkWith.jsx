import { whoWeWorkWith } from '../../../data/home.js'
import './WhoWeWorkWith.css'

import portfolio01 from '../../../assets/images/portfolio-01.jpg'
import portfolio02 from '../../../assets/images/portfolio-02.jpg'
import portfolio03 from '../../../assets/images/portfolio-03.jpg'
import portfolio04 from '../../../assets/images/portfolio-04.jpg'
import portfolio05 from '../../../assets/images/portfolio-05.jpg'

const IMAGES = {
  'portfolio-01.jpg': portfolio01,
  'portfolio-02.jpg': portfolio02,
  'portfolio-03.jpg': portfolio03,
  'portfolio-04.jpg': portfolio04,
  'portfolio-05.jpg': portfolio05,
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
