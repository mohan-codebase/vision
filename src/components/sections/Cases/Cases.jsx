import { useState } from 'react'
import { cases } from '../../../data/home.js'
import './Cases.css'

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
 * Section 8 — "Consultancy Cases".
 *
 * Reference: `bt_bb_section.bt_bb_layout_boxed_1200`, top spacing normal,
 * bottom spacing large, `bgn-cases.png` triangles at the top. Headline
 * `bt_bb_size_large` + `bt_bb_dash_top` (no subtitle), a `bt_bb_post_grid_filter`
 * row, then a 3-column `bt_bb_masonry_portfolio_tiles.bt_bb_look_triangular`
 * grid of 6 cases. Filtering is client-side (the reference does it over AJAX).
 */
export default function Cases() {
  const { super: eyebrow, title, accent, filters, items } = cases
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? items : items.filter((item) => item.category === active)

  return (
    <section className="cases">
      <div className="cases__cell">
        <header className="casesHeadline">
          <span className="casesHeadline__super">{eyebrow}</span>
          <h2 className="casesHeadline__title">
            <span className="casesHeadline__plain">{title}</span>{' '}
            <strong className="casesHeadline__accent">{accent}</strong>
          </h2>
        </header>

        <div className="casesFilter" role="tablist" aria-label="Filter cases by category">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              className={`casesFilter__item${active === filter ? ' is-active' : ''}`}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul className="casesGrid">
          {visible.map((item) => (
            <li className="caseTile" key={`${active}-${item.title}`}>
              <a className="caseTile__link" href="#">
                <img
                  className="caseTile__img"
                  src={IMAGES[item.image]}
                  alt={item.title}
                  loading="lazy"
                />
                <span className="caseTile__title">{item.title}</span>

                <div className="caseTile__panel">
                  <span className="caseTile__corner" aria-hidden="true" />
                  <span className="caseTile__plus" aria-hidden="true" />
                  <p className="caseTile__meta">{item.category}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
